import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const SEARCHABLE_PAGES = [
  { title: 'Home', path: '/', keywords: ['home page', 'landing'] },
  { title: 'About Us', path: '/about', keywords: ['about', 'company profile'] },
  { title: 'Contact', path: '/contact', keywords: ['contact', 'support', 'phone', 'email'] },
  { title: 'Services', path: '/services', keywords: ['all services', 'business services'] },
  { title: 'Trademark Registration', path: '/services', keywords: ['trademark', 'brand registration', 'ip'] },
  {
    title: 'Company Registration',
    path: '/private-limited',
    keywords: ['company registration', 'register company', 'incorporation', 'private limited']
  },
  { title: 'Limited Liability Partnership', path: '/llp', keywords: ['llp', 'partnership llp'] },
  { title: 'One Person Company', path: '/opc', keywords: ['opc', 'one person company'] },
  { title: 'Partnership Firm', path: '/partnership', keywords: ['partnership', 'firm registration'] },
  { title: 'Sole Proprietorship', path: '/sole-proprietorship', keywords: ['proprietorship', 'sole proprietor'] },
  { title: 'GST Registration', path: '/gst-registration', keywords: ['gst', 'new gst', 'apply gst'] },
  { title: 'GST Filing', path: '/gst-filing', keywords: ['gst return', 'gstr', 'file gst'] },
  { title: 'GST Cancellation', path: '/gst-cancellation', keywords: ['cancel gst', 'gst revocation'] },
  { title: 'Reply to GST Notice', path: '/gst-notice', keywords: ['gst notice', 'show cause notice'] },
  {
    title: 'Accounting and Business Compliance',
    path: '/annual-compliance',
    keywords: ['compliance', 'business compliance', 'annual compliance']
  },
  { title: 'Accounting and Bookkeeping', path: '/accounting-bookkeeping', keywords: ['accounting', 'bookkeeping', 'books'] },
  { title: 'TDS Return Filing', path: '/tds-return-filing', keywords: ['tds', 'withholding tax'] },
  { title: 'Income Tax Notice', path: '/income-tax-notice', keywords: ['income tax notice', 'assessment notice'] },
  { title: 'Secretarial Audit', path: '/secretarial-audit', keywords: ['secretarial', 'audit'] },
  { title: 'ISO Registration', path: '/iso-registration', keywords: ['iso', 'certificate'] },
  { title: 'FSSAI Registration', path: '/fssai-registration', keywords: ['fssai', 'food license'] },
  { title: 'IEC Registration', path: '/iec-registration', keywords: ['iec', 'import export code'] },
  { title: 'Liquor License Registration', path: '/liquor-license', keywords: ['liquor', 'alcohol license'] },
  { title: 'PSARA Registration', path: '/psara-registration', keywords: ['psara', 'security agency'] },
  { title: 'Tax Return and Compliance', path: '/Taxreturn', keywords: ['tax return', 'itr'] },
  { title: 'Appeals and Assessments', path: '/appeals', keywords: ['appeals', 'tax assessment'] }
];

const HERO_SHORTCUTS = [
  'Trademark Registration',
  'GST Registration',
  'Company Registration',
  'Accounting and Business Compliance'
];

const TOOL_LOGOS = [
  {
    name: 'MYOB',
    image: '/tools/myob.svg'
  },
  {
    name: 'Xero',
    image: '/tools/xero.svg'
  },
  {
    name: 'Zoho Books',
    image: '/tools/zoho.svg'
  },
  {
    name: 'QuickBooks',
    image: '/tools/quickbooks.svg'
  },
  {
    name: 'Tally',
    image: '/tools/tally.svg'
  },
  {
    name: 'RealBooks',
    image: '/tools/realbooks.svg'
  },
  {
    name: 'Fund360',
    image: '/tools/fund360.svg'
  }
];

const LEADERS = [
  {
    name: 'Prabhakara Rao G',
    role: 'Director',
    skills: 'Accounting Strategy',
    description:
      'Founder with over 15 years of experience in accounting, auditing, and taxation. Drives delivery quality and client trust across engagements.'
  },
  {
    name: 'Vijaya Lakshmi H V',
    role: 'Co-Director',
    skills: 'Client Operations',
    description:
      'Co-founder and commerce professional focused on dependable service delivery, strong process discipline, and long-term client relationships.'
  },
  {
    name: 'Datha Prasad',
    role: 'Chartered Accountant',
    skills: 'Tax and Compliance',
    description:
      'Fellow member of ICAI with deep experience in audit, taxation, and statutory representations for businesses across sectors.'
  },
  {
    name: 'Sunil R K',
    role: 'Chartered Accountant',
    skills: 'Global Accounting',
    description:
      'Experienced in Indian, Australian, and US accounting and taxation, with a practical approach to reporting, controls, and compliance.'
  }
];

const SERVICE_PACKAGES = [
  {
    title: 'Register your Company',
    price: 'Starting from ₹999/-',
    icon: '/service-icons/register-company.svg',
    items: [
      { label: 'Private Limited Company', path: '/private-limited' },
      { label: 'Limited Liability Partnership', path: '/llp' },
      { label: 'One Person Company', path: '/opc' },
      { label: 'Partnership Firm', path: '/partnership' },
      { label: 'Sole Proprietorship', path: '/sole-proprietorship' }
    ]
  },
  {
    title: 'File GST',
    price: 'Starting from ₹399/-',
    icon: '/service-icons/file-gst.svg',
    items: [
      { label: 'GST Registration', path: '/gst-registration' },
      { label: 'GST Filing', path: '/gst-filing' },
      { label: 'GST Cancellation & Revocation', path: '/gst-cancellation' },
      { label: 'Reply to GST Notice', path: '/gst-notice' },
      { label: 'Indirect Tax', path: '/indirect-tax' }
    ]
  },
  {
    title: 'Maintain your Accounts',
    price: 'Starting from ₹4999/-',
    icon: '/service-icons/maintain-accounts.svg',
    items: [
      { label: 'Accounting & Book-keeping', path: '/accounting-bookkeeping' },
      { label: 'Annual Compliance', path: '/annual-compliance' },
      { label: 'TDS Return Filing', path: '/tds-return-filing' },
      { label: 'Income Tax Notice', path: '/income-tax-notice' },
      { label: 'Secretarial Audit', path: '/secretarial-audit' }
    ]
  },
  {
    title: 'Licenses',
    price: 'Starting from ₹999/-',
    icon: '/service-icons/licenses.svg',
    items: [
      { label: 'ISO Registration', path: '/iso-registration' },
      { label: 'FSSAI Registration', path: '/fssai-registration' },
      { label: 'IEC Registration', path: '/iec-registration' },
      { label: 'Liquor License Registration', path: '/liquor-license' },
      { label: 'PSARA Registration', path: '/psara-registration' }
    ]
  }
];

const OUR_SERVICES = [
  {
    title: 'Accounting & Bookkeeping',
    description:
      'End-to-end bookkeeping and accounting solutions for businesses of all sizes.',
    path: '/account',
    icon: 'bi bi-journal-bookmark-fill'
  },
  {
    title: 'Tax Return & Compliance',
    description:
      'Tax return preparation and filing for individuals and businesses.',
    path: '/Taxreturn',
    icon: 'bi bi-calculator-fill'
  },
  {
    title: 'TDS/Withholding Tax',
    description:
      'Complete TDS and withholding tax management and compliance.',
    path: '/tds',
    icon: 'bi bi-percent'
  },
  {
    title: 'Appeals & Assessments',
    description:
      'Assistance with tax assessments and representation in income tax appeals.',
    path: '/appeals',
    icon: 'bi bi-hammer'
  }
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Expert Team',
    description:
      'Our team of qualified professionals brings years of experience and industry expertise to ensure your financial matters are handled with precision.',
    icon: 'bi bi-people-fill'
  },
  {
    title: 'Compliance Guarantee',
    description:
      'We stay updated with the latest tax laws and regulations to ensure your business remains fully compliant and avoids penalties.',
    icon: 'bi bi-shield-check'
  },
  {
    title: 'Strategic Insights',
    description:
      'Beyond compliance, we provide valuable financial insights to help you make informed business decisions and drive growth.',
    icon: 'bi bi-graph-up-arrow'
  },
  {
    title: 'Timely Services',
    description:
      'We prioritize deadlines to ensure all your financial obligations are met on time, every time.',
    icon: 'bi bi-clock-history'
  },
  {
    title: 'Data Security',
    description:
      'Your financial data is protected with enterprise-grade security measures and strict confidentiality protocols.',
    icon: 'bi bi-lock-fill'
  },
  {
    title: 'Cost-Effective',
    description:
      'Our tailored solutions help you save on operational costs while receiving top-tier financial services.',
    icon: 'bi bi-cash-coin'
  }
];

const normalizeText = (value) =>
  (value || '')
    .toString()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const scoreMatch = (query, page) => {
  if (!query) {
    return 0;
  }

  const title = normalizeText(page.title);
  let score = 0;

  if (title === query) {
    score = 120;
  } else if (title.startsWith(query)) {
    score = 90;
  } else if (title.includes(query)) {
    score = 70;
  }

  page.keywords.forEach((keyword) => {
    const term = normalizeText(keyword);

    if (term === query) {
      score = Math.max(score, 110);
    } else if (term.startsWith(query)) {
      score = Math.max(score, 80);
    } else if (term.includes(query)) {
      score = Math.max(score, 55);
    }
  });

  return score;
};

const findMatches = (rawQuery) => {
  const query = normalizeText(rawQuery);

  if (!query) {
    return [];
  }

  return SEARCHABLE_PAGES
    .map((page) => ({
      ...page,
      score: scoreMatch(query, page)
    }))
    .filter((page) => page.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 8);
};

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Index = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showRelatedSearches, setShowRelatedSearches] = useState(false);

  const [itemsPerView, setItemsPerView] = useState(4);
  const [activeSlide, setActiveSlide] = useState(0);

  const maxSlideIndex = Math.max(0, TOOL_LOGOS.length - itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    setActiveSlide((previous) => Math.min(previous, maxSlideIndex));
  }, [maxSlideIndex]);

  useEffect(() => {
    if (maxSlideIndex === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((previous) => (previous >= maxSlideIndex ? 0 : previous + 1));
    }, 3200);

    return () => window.clearInterval(timer);
  }, [maxSlideIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openPage = (path) => {
    setShowSuggestions(false);
    setShowRelatedSearches(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (event) => {
    const nextQuery = event.target.value;
    setQuery(nextQuery);

    if (!nextQuery.trim()) {
      setSearchResults([]);
      setShowSuggestions(false);
      setShowRelatedSearches(false);
      return;
    }

    setSearchResults(findMatches(nextQuery));
    setShowSuggestions(true);
    setShowRelatedSearches(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      setShowSuggestions(false);
      return;
    }

    const matches = findMatches(query);
    const normalizedQuery = normalizeText(query);
    const exactMatch = matches.find(
      (page) =>
        normalizeText(page.title) === normalizedQuery ||
        page.keywords.some((keyword) => normalizeText(keyword) === normalizedQuery)
    );

    if (exactMatch) {
      openPage(exactMatch.path);
      return;
    }

    setSearchResults(matches);
    setShowSuggestions(true);
    setShowRelatedSearches(true);
  };

  const handleShortcutClick = (term) => {
    const matches = findMatches(term);

    if (matches.length > 0) {
      openPage(matches[0].path);
      return;
    }

    setQuery(term);
    setSearchResults([]);
    setShowSuggestions(true);
    setShowRelatedSearches(true);
  };

  const handlePreviousSlide = () => {
    setActiveSlide((previous) => (previous <= 0 ? maxSlideIndex : previous - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((previous) => (previous >= maxSlideIndex ? 0 : previous + 1));
  };

  return (
    <Layout>
      <header className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <h1>
              <span className="hero-title-animated">your finance &amp; taxation partner</span>
            </h1>
            <p>
              Providing end-to-end accounting, taxation, and business services for
              companies of all sizes.
            </p>

            <div className="home-search-wrap" ref={searchRef}>
              <form className="home-search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="search"
                  className="form-control home-search-input"
                  value={query}
                  placeholder="Try 'Company Registration'"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleInputChange}
                  onFocus={() => query.trim() && setShowSuggestions(true)}
                  aria-label="Search services"
                />
                <button className="home-search-button" type="submit" aria-label="Search">
                  <i className="bi bi-search"></i>
                </button>
              </form>

              {showSuggestions && (
                <div className="home-search-suggestions" role="listbox" aria-label="Search suggestions">
                  {showRelatedSearches && searchResults.length > 0 && (
                    <p className="home-related-searches-label">Related searches</p>
                  )}

                  {searchResults.length > 0 ? (
                    searchResults.map((page) => (
                      <button
                        key={`${page.path}-${page.title}`}
                        type="button"
                        className="home-search-item"
                        onClick={() => openPage(page.path)}
                      >
                        <i className="bi bi-search"></i>
                        <span>{page.title}</span>
                      </button>
                    ))
                  ) : (
                    <p className="home-search-empty">No matching page found.</p>
                  )}
                </div>
              )}
            </div>

            <div className="home-shortcuts">
              {HERO_SHORTCUTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="home-shortcut-btn"
                  onClick={() => handleShortcutClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="service-packages-section">
        <div className="container">
          <div className="row g-4">
            {SERVICE_PACKAGES.map((pack) => (
              <div className="col-md-6 col-xl-3" key={pack.title}>
                <article className="service-package-card h-100">
                  <div className="service-package-icon">
                    <img src={pack.icon} alt={pack.title} loading="lazy" />
                  </div>
                  <h3>{pack.title}</h3>
                  <p className="service-package-price">{pack.price}</p>

                  <div className="service-package-links">
                    {pack.items.map((item) => (
                      <Link key={item.label} to={item.path} className="service-package-link">
                        <span>{item.label}</span>
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section our-services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We offer comprehensive solutions in accounting, taxation, compliance,
              and more to meet your business needs.
            </p>
          </div>

          <div className="row g-4">
            {OUR_SERVICES.map((service) => (
              <div className="col-md-6 col-xl-3" key={service.title}>
                <article className="our-service-card h-100">
                  <div className="our-service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="our-service-desc">{service.description}</p>
                  <Link to={service.path} className="our-service-link">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-carousel-section">
        <div className="container">
          <div className="section-title">
            <h2>Tools We Use</h2>
            <p>Platforms used by our team for accurate, secure, and scalable service delivery.</p>
          </div>

          <div className="tools-carousel-shell">
            <button
              type="button"
              className="tools-carousel-nav"
              onClick={handlePreviousSlide}
              aria-label="Previous tools"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="tools-carousel-window">
              <div
                className="tools-carousel-track"
                style={{ transform: `translateX(-${(activeSlide * 100) / itemsPerView}%)` }}
              >
                {TOOL_LOGOS.map((tool) => (
                  <div
                    key={tool.name}
                    className="tools-carousel-item"
                    style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                  >
                    <article className="tool-logo-card">
                      <div className="tool-logo-media">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                            const fallback = event.currentTarget.nextElementSibling;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="tool-logo-fallback">{tool.name}</div>
                      </div>
                      <p className="tool-logo-title">{tool.name}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="tools-carousel-nav"
              onClick={handleNextSlide}
              aria-label="Next tools"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose AvanceePro?</h2>
            <p>Discover the advantages of partnering with our expert team</p>
          </div>

          <div className="row g-4">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div className="col-md-6 col-xl-4" key={item.title}>
                <article className="why-choose-item h-100">
                  <div className="why-choose-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
            <p>Experienced professionals driving strategy, governance, and delivery quality.</p>
          </div>

          <div className="row g-4">
            {LEADERS.map((leader) => (
              <div className="col-md-6 col-xl-3" key={leader.name}>
                <article className="leadership-card h-100">
                  <div className="leader-avatar">{getInitials(leader.name)}</div>
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <span className="leader-skill">{leader.skills}</span>
                  <p className="leader-description">{leader.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-card">
            <div>
              <h3>Ready to streamline your financial operations?</h3>
              <p>Schedule a free consultation with our experts today.</p>
            </div>
            <a href="https://wa.me/919164453153" target="_blank" rel="noreferrer" className="btn btn-light btn-lg">
              <i className="bi bi-whatsapp"></i> Book Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
