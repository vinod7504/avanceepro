import React from 'react';
import Layout from '../Layout';
import CountryServicesPage from '../components/CountryServicesPage';

const USA_SECTIONS = [
  {
    title: 'Bookkeeping Services',
    intro: [
      'We offer bookkeeping services for small businesses across USA, UK, and Australia to keep accounting records current and compliant.',
      'Our trained bookkeeping staff ensures clean books and compliance with applicable laws.'
    ],
    points: [
      'Journal entries',
      'Assets and equipment ledgers',
      'Expenses ledger',
      'Accounts receivables',
      'Accounts payables ageing reports and summaries',
      'Sales tax returns',
      'Bank reconciliation',
      'Trial balance',
      'Income statement (profit and loss)',
      'Balance sheet',
      'CPA bookkeeping services'
    ]
  },
  {
    title: 'Accounting and Taxation Services',
    intro:
      'We provide end-to-end accounting services by standardizing task execution and process controls to maximize outsourcing benefits.',
    groups: [
      {
        title: 'Accounting',
        points: [
          'Books cleanup (year-end adjustments)',
          'Accounting and ledger setup in desktop and cloud accounting software',
          'Bookkeeping',
          'Intercompany reconciliation',
          'Cash flow, funds flow, and forecasting',
          'Monthly, quarterly, and year-end review',
          'Periodic income statement (profit and loss)'
        ]
      },
      {
        title: 'US Taxation Services',
        points: [
          'Preparation of tax returns for multiple entities',
          'Individual income tax returns (1040)',
          'Partnership returns (1065)',
          'C-Corporation returns (1120)',
          'S-Corporation returns (1120S)',
          'Trust income tax returns (1041)',
          'Finalization and tax return preparation for group entities and individuals'
        ]
      },
      {
        title: 'Tax Software and Technology',
        points: [
          'Lacerte',
          'UltraTax',
          'ProSeries',
          'TurboTax',
          'Other software as required by client workflow'
        ]
      },
      {
        title: 'Service Advantages',
        points: [
          'Efficiency through experienced professional review before delivery',
          'Cost saving of up to 50-60% through outsourcing',
          'Quick turnaround of 24-48 hours',
          'Better time management to focus on core operations'
        ]
      }
    ]
  },
  {
    title: 'Management Reporting and Analysis',
    points: [
      'Forecasting requirements and variance analysis with corrective action planning',
      'Revenue and expense monitoring',
      'Collection, consolidation, and evaluation of financial data',
      'Special report preparation',
      'Financial analysis'
    ]
  },
  {
    title: 'Payroll Services',
    intro: [
      'Payroll is a critical business function. AvanceePro offers full-fledged payroll outsourcing for small and medium-sized businesses.',
      'Our customized services improve payroll accuracy, ensure timely statutory filing, and provide dependable processing outputs.'
    ],
    points: [
      'Timely return preparation',
      'Retrospective pay calculation and withholding tax calculation',
      'Pay slip generation',
      'Direct deposit of paycheck or paycheck printing',
      'Cloud-based payroll systems',
      'Process analytics and process capabilities',
      'Data confidentiality'
    ],
    groups: [
      {
        title: 'Payroll Outsourcing Advantages',
        points: [
          'Labor cost impact analysis for future planning',
          'Time and cost savings',
          'Reduced penalties for non-compliance',
          'Lower risk potential',
          'Latest technology usage'
        ]
      }
    ]
  },
  {
    title: 'Company Incorporation in India',
    intro: [
      'We assist US businesses in setting up operations in India through company and branch office incorporation services under Companies Act, 2013.',
      'We also support FEMA Act, 1999 compliance and FDI requirements for subsidiary setup and downstream investment.'
    ],
    points: [
      'Company setup and incorporation support',
      'FEMA and foreign investment compliance advisory',
      'Direct and indirect tax registrations in India'
    ]
  }
];

const Usa = () => {
  return (
    <Layout>
      <CountryServicesPage
        country="USA"
        headline="USA Bookkeeping, Accounting, Taxation and Payroll Services"
        intro="Scalable offshore accounting and tax support for US firms with quick turnaround, process controls, and cost efficiency."
        sections={USA_SECTIONS}
      />
    </Layout>
  );
};

export default Usa;
