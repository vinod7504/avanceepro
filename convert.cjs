const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const inputDir = path.join(__dirname, '../avanceepro');
const outputDir = path.join(__dirname, 'client/pages');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert HTML attributes to JSX
function htmlToJsx(html) {
    let jsx = html;

    // Replace class= with className=
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/class='/g, "className='");

    // Replace for= with htmlFor=
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    jsx = jsx.replace(/for='/g, "htmlFor='");

    // Self close img, input, hr, br tags
    // Match up to the closing > and replace it with /> if not already />
    jsx = jsx.replace(/<img([^>]*?)(?:\/?)>/g, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*?)(?:\/?)>/g, '<input$1 />');
    jsx = jsx.replace(/<hr([^>]*?)(?:\/?)>/g, '<hr$1 />');
    jsx = jsx.replace(/<br([^>]*?)(?:\/?)>/g, '<br$1 />');

    // Also close <source> tags which are present in HTML headers/pictures
    jsx = jsx.replace(/<source([^>]*?)(?:\/?)>/g, '<source$1 />');

    // Convert inline styles to objects (rudimentary regex, might need manual touchups if complex)
    // E.g., style="height:38px" -> style={{height: '38px'}}
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
        const styleObj = styles.split(';').filter(s => s.trim() !== '').reduce((acc, style) => {
            const [key, value] = style.split(':').map(s => s.trim());
            if (key && value) {
                const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc.push(`${camelKey}: '${value.replace(/'/g, "\\'")}'`);
            }
            return acc;
        }, []);
        return `style={{ ${styleObj.join(', ')} }}`;
    });

    // Convert tabindex -> tabIndex, etc
    jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
    jsx = jsx.replace(/colspan=/g, 'colSpan=');
    jsx = jsx.replace(/rowspan=/g, 'rowSpan=');

    // Convert HTML comments to JSX comments, or just remove them to avoid parsing issues
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    return jsx;
}

// Read all HTML files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.html') && f !== 'navbar.html');

let appRoutes = [];
let appImports = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(inputDir, file), 'utf8');

    // Extract content between <nav> or <header> opening/closing and <footer>
    // Strategy: Find the earliest occurrence of a structural tag (<header, <div class="hero", <section, <main)
    // that comes AFTER the ending of the navigation and offcanvas blocks.

    let startIndex = -1;
    let baseOffset = 0;

    // 1. Find end of <nav>
    const navEndStr = '</nav>';
    const navEndIndex = content.indexOf(navEndStr);
    if (navEndIndex !== -1) {
        baseOffset = navEndIndex + navEndStr.length;
    }

    // 2. Find end of offcanvas if it exists near the top
    const offcanvasStart = content.indexOf('<div class="offcanvas', baseOffset);
    if (offcanvasStart !== -1 && (offcanvasStart - baseOffset) < 500) {
        const offcanvasEndStr = '</div>\n    </div>';
        const offcanvasEnd = content.indexOf(offcanvasEndStr, offcanvasStart);
        if (offcanvasEnd !== -1) {
            baseOffset = offcanvasEnd + offcanvasEndStr.length;
        }
    }

    // 3. Search for structural tags after the baseOffset
    const searchArea = content.substring(baseOffset);

    const tagsToFind = ['<main', '<section', '<header', '<div class="hero"'];
    let firstTagIndex = -1;

    for (const tag of tagsToFind) {
        const matchIdx = searchArea.indexOf(tag);
        if (matchIdx !== -1) {
            if (firstTagIndex === -1 || matchIdx < firstTagIndex) {
                firstTagIndex = matchIdx;
            }
        }
    }

    if (firstTagIndex !== -1) {
        startIndex = baseOffset + firstTagIndex;
    } else {
        // Fallback: Try to find a generic container
        const containerFallback = searchArea.indexOf('<div class="container');
        if (containerFallback !== -1) {
            startIndex = baseOffset + containerFallback;
        } else {
            // Ultimate fallback right after nav/offcanvas
            startIndex = baseOffset;
        }
    }

    // Find the footer start
    let endIndex = content.indexOf('<footer');
    if (endIndex === -1) {
        endIndex = content.lastIndexOf('</body');
    }

    // FINAL SAFETY CHECK: If startIndex is somehow before the <body> tag, force it to be after <body>
    const bodyMatch = content.indexOf('<body');
    if (bodyMatch !== -1 && startIndex < bodyMatch) {
        startIndex = content.indexOf('>', bodyMatch) + 1;
        // We must also try to skip the nav again if it exists after body
        const navEndSafety = content.indexOf('</nav>', startIndex);
        if (navEndSafety !== -1) {
            startIndex = navEndSafety + 6;
        }
    }

    // Extract purely the body segments we care about (ignoring scripts)
    mainContent = content.substring(startIndex, endIndex);

    // Remove script tags and HTML comments from body (so commented out elements don't affect matching)
    mainContent = mainContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, '');

    // Use cheerio to fix broken HTML structure and convert links
    const $ = cheerio.load(mainContent, { xmlMode: false });

    // Replace internal <a> tags with React Router <Link> components
    $('a').each(function () {
        const href = $(this).attr('href');
        if (href) {
            let isLocal = false;
            let newHref = href;
            if (href.endsWith('.html')) {
                isLocal = true;
                newHref = href === 'index.html' ? '/' : '/' + href.replace('.html', '');
            } else if (href.startsWith('/') && !href.startsWith('//')) {
                isLocal = true;
            }

            if (isLocal) {
                $(this).attr('to', newHref);
                $(this).removeAttr('href');
                this.tagName = 'Link';
            }
        }
    });

    mainContent = $('body').html(); // extracts the fixed structure

    // Fix HTML to JSX
    let jsxContent = htmlToJsx(mainContent);

    // To prevent empty wrap or fragment errors, output inside a generic div
    jsxContent = `<div>\n${jsxContent}\n</div>`;

    // Component Name
    const baseName = file.replace('.html', '');
    // Capitalize and remove hyphens
    const componentName = baseName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') || 'Index';

    let extraImports = '';
    let extraHooks = '';

    if (componentName === 'Index' || componentName === 'Index2') {
        extraImports = `import { useEffect } from 'react';\nimport { initIndex } from './indexInit';`;
        extraHooks = `\n  useEffect(() => {\n    const cleanup = initIndex();\n    return cleanup;\n  }, []);\n`;
    }

    const componentTemplate = `import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
${extraImports}

const ${componentName} = () => {${extraHooks}
  return (
    <Layout>
      ${jsxContent}
    </Layout>
  );
};

export default ${componentName};
`;

    fs.writeFileSync(path.join(outputDir, `${componentName}.jsx`), componentTemplate);
    console.log(`Generated ${componentName}.jsx from ${file}`);

    appImports.push(`import ${componentName} from './pages/${componentName}';`);
    const routePath = file === 'index.html' || file === 'index2.html' ? '/' : `/${file}`;
    appRoutes.push(`        <Route path="${routePath}" element={<${componentName} />} />`);
    // also add route without .html for cleaner URLs, but preserving them as requested
    if (file !== 'index.html') {
        const cleanPath = `/${file.replace('.html', '')}`;
        appRoutes.push(`        <Route path="${cleanPath}" element={<${componentName} />} />`);
    }
});

// Generate App.jsx
const appTemplate = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeoManager from './components/SeoManager';

${appImports.join('\n')}

const App = () => {
  return (
    <Router>
      <SeoManager />
      <Routes>
${appRoutes.join('\n')}
      </Routes>
    </Router>
  );
};

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'client/App.jsx'), appTemplate);
console.log('Generated client/App.jsx with routing');
