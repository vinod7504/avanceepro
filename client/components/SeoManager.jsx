import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SITE_NAME = 'AvanceePro';
const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.avanceepro.com').replace(/\/+$/, '');
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80';

const DEFAULT_META = {
  title: 'AvanceePro | Accounting, Taxation and Business Compliance Services',
  description:
    'AvanceePro provides accounting, taxation, GST, registration, audit, and compliance services for startups, SMEs, and growing businesses.',
  keywords:
    'accounting services, taxation services, GST registration, GST filing, business compliance, company registration, chartered accountant'
};

const ROUTE_META = {
  '/': {
    title: 'AvanceePro | Accounting, Taxation and Business Compliance Services',
    description:
      'Your finance and taxation partner for accounting, GST, company registration, compliance, and advisory services.',
    keywords:
      'finance partner, taxation partner, accounting services, GST, compliance, company registration'
  },
  '/about': {
    title: 'About Us | AvanceePro',
    description:
      'Learn about AvanceePro leadership, expertise, and our mission to deliver reliable accounting and taxation services.'
  },
  '/contact': {
    title: 'Contact Us | AvanceePro',
    description:
      'Contact AvanceePro for accounting, taxation, GST, and compliance consultation for your business.'
  },
  '/services': {
    title: 'Business Services | AvanceePro',
    description:
      'Explore AvanceePro services in accounting, GST, tax returns, compliance, licenses, and business support.'
  },
  '/private-limited': {
    title: 'Private Limited Company Registration | AvanceePro',
    description:
      'Register your Private Limited Company with expert guidance on incorporation, documentation, and compliance.'
  },
  '/llp': {
    title: 'LLP Registration | AvanceePro',
    description:
      'Get Limited Liability Partnership registration support with end-to-end filing and compliance assistance.'
  },
  '/opc': {
    title: 'One Person Company Registration | AvanceePro',
    description:
      'Start your One Person Company with professional registration and compliance support from AvanceePro.'
  },
  '/partnership': {
    title: 'Partnership Firm Registration | AvanceePro',
    description:
      'Partnership firm registration service with documentation, setup, and ongoing compliance support.'
  },
  '/sole-proprietorship': {
    title: 'Sole Proprietorship Registration | AvanceePro',
    description:
      'Set up your sole proprietorship quickly with practical support for registration and tax compliance.'
  },
  '/gst-registration': {
    title: 'GST Registration Services | AvanceePro',
    description:
      'Apply for GST registration with accurate documentation and fast support from AvanceePro experts.'
  },
  '/gst-filing': {
    title: 'GST Return Filing Services | AvanceePro',
    description:
      'File GST returns on time with complete support for GSTR filing, reconciliation, and compliance.'
  },
  '/gst-cancellation': {
    title: 'GST Cancellation and Revocation | AvanceePro',
    description:
      'Professional assistance for GST cancellation, revocation, and post-cancellation compliance.'
  },
  '/gst-notice': {
    title: 'Reply to GST Notice | AvanceePro',
    description:
      'Get expert help to prepare and file replies to GST notices and statutory communications.'
  },
  '/indirect-tax': {
    title: 'Indirect Tax Services | AvanceePro',
    description:
      'Indirect tax advisory and compliance services for GST and related taxation requirements.'
  },
  '/accounting-bookkeeping': {
    title: 'Accounting and Bookkeeping Services | AvanceePro',
    description:
      'End-to-end bookkeeping and accounting services for startups, SMEs, and established businesses.'
  },
  '/annual-compliance': {
    title: 'Annual Compliance Services | AvanceePro',
    description:
      'Stay compliant with annual ROC, MCA, and business filing requirements through structured support.'
  },
  '/tds-return-filing': {
    title: 'TDS Return Filing Services | AvanceePro',
    description:
      'Timely and accurate TDS return filing with expert validation, correction, and compliance support.'
  },
  '/income-tax-notice': {
    title: 'Income Tax Notice Support | AvanceePro',
    description:
      'Professional support for responding to income tax notices, assessments, and representations.'
  },
  '/secretarial-audit': {
    title: 'Secretarial Audit Services | AvanceePro',
    description:
      'Secretarial audit services to help businesses maintain governance and statutory compliance.'
  },
  '/iso-registration': {
    title: 'ISO Registration Services | AvanceePro',
    description:
      'ISO registration support for documentation, process setup, and certification readiness.'
  },
  '/fssai-registration': {
    title: 'FSSAI Registration Services | AvanceePro',
    description:
      'Apply for FSSAI registration with complete support for food business licensing and compliance.'
  },
  '/iec-registration': {
    title: 'IEC Registration Services | AvanceePro',
    description:
      'Import Export Code registration support for businesses involved in international trade.'
  },
  '/liquor-license': {
    title: 'Liquor License Registration | AvanceePro',
    description:
      'Get expert support for liquor license registration, approvals, and documentation.'
  },
  '/psara-registration': {
    title: 'PSARA Registration Services | AvanceePro',
    description:
      'PSARA registration service for security agencies with guidance on documentation and approvals.'
  },
  '/Taxreturn': {
    title: 'Tax Return and Compliance Services | AvanceePro',
    description:
      'Comprehensive tax return filing and compliance services for individuals and businesses.'
  },
  '/tds': {
    title: 'TDS and Withholding Tax Services | AvanceePro',
    description:
      'Expert support for TDS compliance, withholding tax calculations, and filing obligations.'
  },
  '/appeals': {
    title: 'Tax Appeals and Assessments | AvanceePro',
    description:
      'Support for tax appeals, assessments, and representations before statutory authorities.'
  },
  '/account': {
    title: 'Accounting Services Overview | AvanceePro',
    description:
      'Overview of accounting services, reporting support, and process-driven financial controls.'
  },
  '/india': {
    title: 'India Accounting, Taxation and Compliance Services | AvanceePro',
    description:
      'Explore AvanceePro India services: accounting, bookkeeping, GST, registrations, income tax, statutory compliance, FEMA, company law, ERP migration, and business advisory.',
    keywords:
      'india accounting services, india taxation services, gst consultancy india, statutory compliance india, company law consultancy india, fema rbi consultancy, erp migration accounting'
  },
  '/australia': {
    title: 'Australia Bookkeeping and Taxation Services | AvanceePro',
    description:
      'Australia-focused bookkeeping, accounting, BAS preparation, payroll processing, taxation support, management reporting, and India incorporation support by AvanceePro.',
    keywords:
      'australia bookkeeping services, bas preparation, australia payroll outsourcing, accounting services australia, tax return support australia, offshore bookkeeping'
  },
  '/usa': {
    title: 'USA Bookkeeping, Taxation and Payroll Services | AvanceePro',
    description:
      'USA-focused bookkeeping, tax return preparation for 1040/1065/1120/1120S/1041, payroll outsourcing, management reporting, and India incorporation support from AvanceePro.',
    keywords:
      'usa bookkeeping services, us tax return outsourcing, 1040 1065 1120 preparation, payroll outsourcing usa, accounting support usa'
  }
};

const COUNTRY_PAGE_SCHEMA = {
  '/india': {
    name: 'India Financial and Compliance Services',
    areaServed: 'IN'
  },
  '/australia': {
    name: 'Australia Bookkeeping and Taxation Services',
    areaServed: 'AU'
  },
  '/usa': {
    name: 'USA Bookkeeping and Taxation Services',
    areaServed: 'US'
  }
};

const prettifyPath = (path) => {
  if (!path || path === '/') {
    return 'Home';
  }

  return path
    .replace(/^\//, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const normalizePath = (pathname) => {
  let nextPath = pathname || '/';
  nextPath = nextPath.replace(/\.html$/i, '');

  if (nextPath.length > 1 && nextPath.endsWith('/')) {
    nextPath = nextPath.slice(0, -1);
  }

  return nextPath || '/';
};

const upsertMeta = (selector, attrName, attrValue, content) => {
  if (!content) {
    return;
  }

  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
};

const upsertStructuredData = (id, payload) => {
  let script = document.head.querySelector(`#${id}`);

  if (!script) {
    script = document.createElement('script');
    script.setAttribute('id', id);
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

const SeoManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.pathname.toLowerCase().endsWith('.html')) {
      return;
    }

    const cleanPath = normalizePath(location.pathname);
    navigate(`${cleanPath}${location.search}${location.hash}`, { replace: true });
  }, [location.pathname, location.search, location.hash, navigate]);

  useEffect(() => {
    const path = normalizePath(location.pathname);
    const routeMeta = ROUTE_META[path] || {
      title: `${prettifyPath(path)} | ${SITE_NAME}`,
      description: DEFAULT_META.description,
      keywords: DEFAULT_META.keywords
    };

    const title = routeMeta.title || DEFAULT_META.title;
    const description = routeMeta.description || DEFAULT_META.description;
    const keywords = routeMeta.keywords || DEFAULT_META.keywords;
    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    );
    upsertMeta('meta[name="author"]', 'name', 'author', SITE_NAME);

    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

    upsertLink('canonical', canonicalUrl);

    const countrySchema = COUNTRY_PAGE_SCHEMA[path];
    const serviceGraphItem = countrySchema
      ? [
          {
            '@type': 'Service',
            '@id': `${canonicalUrl}#service`,
            name: countrySchema.name,
            provider: {
              '@id': `${SITE_URL}#organization`
            },
            areaServed: countrySchema.areaServed,
            serviceType: 'Accounting, taxation, compliance, payroll and advisory services'
          }
        ]
      : [];

    upsertStructuredData('avp-seo-schema', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}#organization`,
          name: 'AvanceePro Business Services Pvt Ltd',
          url: SITE_URL,
          email: 'info@avanceepro.com',
          telephone: '+91-9164456153',
          sameAs: ['https://www.linkedin.com/in/avancee-pro-51001bbb/']
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}#website`,
          name: SITE_NAME,
          url: SITE_URL,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          isPartOf: {
            '@id': `${SITE_URL}#website`
          }
        },
        ...serviceGraphItem
      ]
    });
  }, [location.pathname]);

  return null;
};

export default SeoManager;
