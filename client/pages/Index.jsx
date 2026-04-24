import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Layout from '../Layout';
import avanceeproImage from '../assets/avanceepro.png';

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
  {
    title: 'Accounting and Bookkeeping',
    path: '/accounting-bookkeeping',
    keywords: ['accounting', 'bookkeeping', 'books']
  },
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
  { name: 'MYOB', image: '/tools/myob.svg' },
  { name: 'Xero', image: '/tools/xero.svg' },
  { name: 'Zoho Books', image: '/tools/zoho.svg' },
  { name: 'QuickBooks', image: '/tools/quickbooks.svg' },
  { name: 'Tally', image: '/tools/tally.svg' },
  { name: 'RealBooks', image: '/tools/realbooks.svg' },
  { name: 'Fund360', image: '/tools/fund360.svg' }
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
    description: 'End-to-end bookkeeping and accounting solutions for businesses of all sizes.',
    path: '/account',
    icon: 'bi bi-journal-bookmark-fill'
  },
  {
    title: 'Tax Return & Compliance',
    description: 'Tax return preparation and filing for individuals and businesses.',
    path: '/Taxreturn',
    icon: 'bi bi-calculator-fill'
  },
  {
    title: 'TDS/Withholding Tax',
    description: 'Complete TDS and withholding tax management and compliance.',
    path: '/tds',
    icon: 'bi bi-percent'
  },
  {
    title: 'Appeals & Assessments',
    description: 'Assistance with tax assessments and representation in income tax appeals.',
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

const sectionVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
};

const cardParentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: 'easeOut' }
  }
};

const Index = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showRelatedSearches, setShowRelatedSearches] = useState(false);

  const [itemsPerView, setItemsPerView] = useState(4);
  const [activeSlide, setActiveSlide] = useState(0);

  const maxSlideIndex = Math.max(0, TOOL_LOGOS.length - itemsPerView);

  const heroStats = useMemo(
    () => [
      { label: 'Years Expertise', value: '15+' },
      { label: 'Services', value: '30+' },
      { label: 'Response Time', value: '<24h' }
    ],
    []
  );

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
    }, 3500);

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
      <header className="neo-hero">
        <div className="container">
          <motion.div
            className="neo-hero-grid"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: 'easeOut' }}
          >
            <motion.div
              className="neo-hero-copy"
              variants={cardParentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p className="neo-hero-kicker" variants={cardVariants}>
                Strategic Finance Partner
              </motion.p>
              <motion.h1 variants={cardVariants}>
                Accounting, Taxation and Compliance,
                <span> designed for business momentum.</span>
              </motion.h1>
              <motion.p className="neo-hero-sub" variants={cardVariants}>
                AvanceePro simplifies your financial operations with expert-led execution,
                transparent workflows, and measurable reliability.
              </motion.p>

              <motion.div className="neo-hero-actions" variants={cardVariants}>
                <Link to="/contact" className="neo-btn neo-btn-primary">
                  Start a Consultation
                </Link>
                <Link to="/services" className="neo-btn neo-btn-ghost">
                  Explore Services
                </Link>
              </motion.div>

              <motion.div className="neo-hero-stats" variants={cardParentVariants}>
                {heroStats.map((item) => (
                  <motion.article className="neo-stat" key={item.label} variants={cardVariants}>
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="neo-hero-visual"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="neo-hero-image-wrap">
                <img
                  src={avanceeproImage}
                  alt="AvanceePro digital service experience"
                  className="neo-hero-image"
                  loading="lazy"
                />
              </div>

              <div className="neo-hero-card neo-hero-card-top">
                <h3>Core Focus</h3>
                <ul>
                  <li>Company Registration</li>
                  <li>GST and Tax Filing</li>
                  <li>Compliance and Audit</li>
                </ul>
              </div>

              <div className="neo-hero-card neo-hero-card-bottom">
                <h3>Why Businesses Choose Us</h3>
                <ul>
                  <li>Fast Turnaround</li>
                  <li>Expert Advisory Team</li>
                  <li>Secure, Structured Process</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="neo-search-shell"
            ref={searchRef}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.28, ease: 'easeOut' }}
          >
            <form className="neo-search-form" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="form-control neo-search-input"
                value={query}
                placeholder="Search services like GST Registration, Company Registration..."
                autoComplete="off"
                spellCheck="false"
                onChange={handleInputChange}
                onFocus={() => query.trim() && setShowSuggestions(true)}
                aria-label="Search services"
              />
              <button className="neo-search-button" type="submit" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>

            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  className="neo-search-suggestions"
                  role="listbox"
                  aria-label="Search suggestions"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {showRelatedSearches && searchResults.length > 0 && (
                    <p className="neo-related-label">Related searches</p>
                  )}

                  {searchResults.length > 0 ? (
                    searchResults.map((page) => (
                      <button
                        key={`${page.path}-${page.title}`}
                        type="button"
                        className="neo-search-item"
                        onClick={() => openPage(page.path)}
                      >
                        <i className="bi bi-search"></i>
                        <span>{page.title}</span>
                      </button>
                    ))
                  ) : (
                    <p className="neo-search-empty">No matching page found.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="neo-shortcuts">
              {HERO_SHORTCUTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="neo-shortcut-btn"
                  onClick={() => handleShortcutClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <motion.section
        className="neo-packages section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="neo-section-head">
            <p>Built around real business journeys</p>
            <h2>Choose the package that fits your current stage</h2>
          </div>

          <motion.div
            className="row g-4"
            variants={cardParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            {SERVICE_PACKAGES.map((pack) => (
              <div className="col-md-6 col-xl-3" key={pack.title}>
                <motion.article className="neo-package-card h-100" variants={cardVariants}>
                  <div className="neo-package-icon">
                    <img src={pack.icon} alt={pack.title} loading="lazy" />
                  </div>
                  <h3>{pack.title}</h3>
                  <p className="neo-package-price">{pack.price}</p>

                  <div className="neo-package-links">
                    {pack.items.map((item) => (
                      <Link key={item.label} to={item.path} className="neo-package-link">
                        <span>{item.label}</span>
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    ))}
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="neo-services section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="neo-section-head">
            <p>End-to-end support</p>
            <h2>Our flagship services</h2>
          </div>

          <motion.div
            className="row g-4"
            variants={cardParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {OUR_SERVICES.map((service) => (
              <div className="col-md-6 col-xl-3" key={service.title}>
                <motion.article className="neo-service-card h-100" variants={cardVariants}>
                  <div className="neo-service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.path} className="neo-service-link">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="neo-tools section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="neo-section-head">
            <p>Systems we work with daily</p>
            <h2>Tools we use for reliable delivery</h2>
          </div>

          <div className="neo-tools-shell">
            <button
              type="button"
              className="neo-tools-nav"
              onClick={handlePreviousSlide}
              aria-label="Previous tools"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="neo-tools-window">
              <motion.div
                className="neo-tools-track"
                animate={{ x: `-${(activeSlide * 100) / itemsPerView}%` }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                {TOOL_LOGOS.map((tool) => (
                  <div
                    key={tool.name}
                    className="neo-tools-item"
                    style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                  >
                    <article className="neo-tool-card">
                      <div className="neo-tool-media">
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
                        <div className="neo-tool-fallback">{tool.name}</div>
                      </div>
                      <p>{tool.name}</p>
                    </article>
                  </div>
                ))}
              </motion.div>
            </div>

            <button type="button" className="neo-tools-nav" onClick={handleNextSlide} aria-label="Next tools">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="neo-why section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container">
          <div className="neo-section-head neo-section-head-centered">
            <p>Our strengths</p>
            <h2>Why businesses choose AvanceePro</h2>
          </div>

          <motion.div
            className="row g-4"
            variants={cardParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div className="col-md-6 col-xl-4" key={item.title}>
                <motion.article className="neo-why-card h-100" variants={cardVariants}>
                  <div className="neo-why-orb">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="neo-leadership section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container">
          <div className="neo-section-head neo-section-head-centered">
            <p>Experienced and accountable</p>
            <h2>Leadership team</h2>
          </div>

          <motion.div
            className="row g-4"
            variants={cardParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {LEADERS.map((leader) => (
              <div className="col-md-6 col-xl-3" key={leader.name}>
                <motion.article className="neo-leader-card h-100" variants={cardVariants}>
                  <div className="neo-leader-avatar">{getInitials(leader.name)}</div>
                  <h3>{leader.name}</h3>
                  <p className="neo-leader-role">{leader.role}</p>
                  <span className="neo-leader-skill">{leader.skills}</span>
                  <p className="neo-leader-description">{leader.description}</p>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="neo-bottom-cta section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <div className="neo-cta-card">
            <div>
              <h3>Ready to streamline your financial operations?</h3>
              <p>Schedule a free consultation and get a practical roadmap for your next milestone.</p>
            </div>
            <a
              href="https://wa.me/919164453153?text=Hello%20AvanceePro%2C%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="neo-btn neo-btn-light"
            >
              <i className="bi bi-whatsapp"></i> Book Consultation
            </a>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
