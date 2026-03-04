import React from 'react';
import Layout from '../Layout';
import CountryServicesPage from '../components/CountryServicesPage';

const INDIA_SECTIONS = [
  {
    title: 'Accounting Services',
    intro:
      'AvanceePro provides end-to-end accounting services for all kinds of businesses. We divide accounting work into clear processes and execute them in a standardized manner so you can gain maximum benefit through outsourcing.',
    points: [
      'Accounting and ledger setup in desktop and cloud accounting software',
      'Bookkeeping',
      'Intercompany reconciliation',
      'Cash flow, funds flow, and forecasting',
      'Monthly, quarterly, and year-end review',
      'Periodic income statement (profit and loss)',
      'GST return filings',
      'PT return filing',
      'ESI and PF return filings',
      'TDS returns and other compliances'
    ]
  },
  {
    title: 'Registration Services',
    points: [
      'Private Limited or Public Limited Company registration',
      'Limited Liability Partnership (LLP)',
      'Partnership firm',
      'Shop and Establishment',
      'SSI',
      'Provident Fund',
      'Employee State Insurance',
      'Professional Tax',
      'PAN',
      'TAN',
      'GST'
    ]
  },
  {
    title: 'Income Tax Services',
    intro:
      'We specialize in income tax services for individuals, small businesses, medium businesses, and large enterprises with effective and practical execution.',
    points: [
      'Preparation of return',
      'Getting assessment done',
      'Consultancy in tax matters and tax planning',
      'Foreign taxation consultancy',
      'Transfer Pricing matters: TP study, TP report, TP assessment, and objections with DRP',
      'TDS and withholding tax compliance',
      'Income tax appeals before CIT (Appeals)',
      'Income tax appeals before ITAT',
      'DTAA compliance'
    ],
    groups: [
      {
        title: 'Business Taxation',
        points: [
          'Corporate tax',
          'Structured reviews to maximize tax planning opportunities',
          'Tax planning for partnerships',
          'Capital gains tax planning for business owners',
          'Tax planning for employees',
          'Tax investigations: advice, assistance, and support'
        ]
      },
      {
        title: 'Personal Taxation',
        points: [
          'Advice and assistance with self-assessment',
          'Personal and family tax planning',
          'Capital gains tax planning and reviews',
          'Retirement planning',
          'Tax-related advice on investments'
        ]
      },
      {
        title: 'International Taxation',
        points: [
          'Individuals leaving India',
          'Individuals coming to India',
          'Business setting up abroad',
          'Business setting up in India'
        ]
      }
    ]
  },
  {
    title: 'Statutory Compliance Review',
    intro: [
      'Statutory compliance has become critical from both organizational and director responsibility perspectives. The cost of non-compliance can be heavy in financial and legal terms.',
      'To avoid surprises, periodic statutory health checks are essential. We review books of accounts and report compliance status to management and Board of Directors on a quarterly basis.'
    ],
    points: [
      'TDS-related compliances',
      'GST-related compliances',
      'Routine income tax compliances',
      'Compliances under labour laws such as Provident Fund, ESI, and Professional Tax',
      'Shops and Establishment Act compliance'
    ]
  },
  {
    title: 'Business Process Outsourcing Services',
    intro:
      'We provide business process outsourcing services to reputed MNCs and support bookkeeping operations for USA, Australia, and UK clients with reliable process controls.',
    points: [
      'Bookkeeping for USA, Australia, and UK clients',
      'Tax return services for USA, Australia, and UK clients',
      'Payroll processing',
      'Bank reconciliation statement preparation'
    ]
  },
  {
    title: 'Financial Services',
    intro:
      'Our experts analyze your current position and provide practical financial solutions including funding, diligence, and valuation support.',
    points: [
      'Preparation of project report',
      'Loan arrangement: cash credit limit, term loan, and project loan',
      'Due diligence for finance',
      'Valuation of shares'
    ]
  },
  {
    title: 'FEMA, RBI and Foreign Collaboration',
    intro:
      'For businesses tapping global opportunities, we provide consultancy and compliance support under FEMA, RBI processes, and foreign collaboration frameworks.',
    points: [
      'FDI (Foreign Direct Investment) related matters',
      'ODI (Overseas Direct Investment) and ECB (External Commercial Borrowing) consultancy',
      'NRI and PIO related matters and consultancy',
      'Liaison office, project office, and branch office setup in India',
      'All types of Reserve Bank of India approvals',
      'Foreign collaboration agreements with required government approvals including FIPB',
      'Valuation of shares as per DCF method'
    ]
  },
  {
    title: 'Company Law Matters Consultancy',
    intro:
      'Every company in India requires ROC registration and periodic statutory compliance. Our experts support the full lifecycle of company law requirements.',
    points: [
      'Formation of companies in India: Private Limited, Public Limited, wholly owned subsidiary, LLP, and more',
      'All matters related to Registrar of Companies and Company Law Board',
      'Maintenance and compliance of statutory records',
      'Merger and acquisitions',
      'Corporate restructuring',
      'Preparation of board and members meeting minutes',
      'Filing of annual returns and other statutory returns',
      'Consultancy on all related matters'
    ]
  },
  {
    title: 'Import-Export, Technology Park and SEZ',
    intro:
      'We provide complete assistance in import-export and technology park compliance including registrations, memberships, and documentation.',
    points: [
      'Import Export Code number',
      'STPI (Software Technology Park of India) matters',
      'SEZ (Special Economic Zone) matters',
      'Non-STPI matters',
      'Membership with Export Promotion Council',
      'Import-export consultancy and documentation',
      'Import license related matters'
    ]
  },
  {
    title: 'Societies and Trust Consultancy',
    intro:
      'We provide consultancy for trust and society formation, registrations, and tax exemptions with highly efficient delivery.',
    points: [
      'Formation',
      'Registration under section 12A and 80G of Income Tax Act',
      'Registration under FCRA: prior approval and permanent registration',
      'Registration under section 35AC of Income-tax Act',
      'Consultancy in all related matters'
    ]
  },
  {
    title: 'GST Consultancy',
    intro:
      'Our GST consultancy services are designed for complete compliance support in day-to-day and periodic GST obligations.',
    points: [
      'Registration',
      'Filing of periodical returns',
      'Maintenance of records',
      'Assessment support',
      'Appeals support'
    ]
  },
  {
    title: 'Basic Registrations and Consultancy',
    intro:
      'We assist in registration and periodic filing under key labour and local statutory frameworks.',
    points: [
      'Professional Tax registration and filing',
      'Provident Fund registration and filing',
      'Employee State Insurance registration and filing',
      'Shop and Establishment registration and filing',
      'Monthly, half-yearly, and yearly returns support'
    ]
  },
  {
    title: 'Migration of Books of Accounts into ERP System',
    intro: [
      'ERP systems integrate different business functions into one controlled platform using relational database technology and process modules.',
      'We help identify key controls, review project readiness, and recommend a secure migration approach to ensure ERP supports business processes and controls on an ongoing basis.'
    ],
    closing:
      'Key benefits include scalability, improved reporting, better data quality, lower maintenance cost, improved data access, and stronger regulatory compliance.'
  }
];

const India = () => {
  return (
    <Layout>
      <CountryServicesPage
        country="India"
        headline="India Accounting, Taxation, Compliance and Business Advisory Services"
        intro="Comprehensive services for businesses, startups, and enterprises across registrations, finance, taxation, compliance, and advisory."
        sections={INDIA_SECTIONS}
      />
    </Layout>
  );
};

export default India;
