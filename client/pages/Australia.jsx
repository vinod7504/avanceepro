import React from 'react';
import Layout from '../Layout';
import CountryServicesPage from '../components/CountryServicesPage';

const AUSTRALIA_SECTIONS = [
  {
    title: 'Bookkeeping Services',
    intro: [
      'We offer bookkeeping services for small businesses across USA, UK, Canada, and Australia to keep books updated and compliant.',
      'Our trained bookkeeping staff ensures records are accurate and aligned with relevant statutory requirements.'
    ],
    points: [
      'Journal entries',
      'Assets and equipment ledgers',
      'Expenses ledger',
      'Accounts receivables',
      'Accounts payables ageing reports and summaries',
      'BAS preparations',
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
      'We provide end-to-end accounting and taxation support by splitting tasks into well-defined processes and executing them in a standardized, quality-driven manner.',
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
        title: 'Taxation Services',
        points: [
          'Preparation of tax returns for various entities including individual tax returns',
          'Audit for superannuation funds under Australian tax laws including SIS compliance',
          'Finalization and tax return preparation for groups comprising individuals, trusts, and companies'
        ]
      }
    ]
  },
  {
    title: 'Management Reporting and Analysis',
    points: [
      'Forecasting requirements, analyzing variances, and initiating corrective actions',
      'Monitoring revenue and expenses',
      'Coordinating collection, consolidation, and evaluation of financial data',
      'Preparing special management reports',
      'Financial analysis'
    ]
  },
  {
    title: 'Payroll Services',
    intro: [
      'Payroll is a critical function for every business. AvanceePro provides full-fledged payroll outsourcing for small and medium-sized organizations.',
      'Our customized payroll services improve report quality and payroll accuracy with timely processing and compliance.'
    ],
    points: [
      'Timely return preparation',
      'Retrospective pay calculation and withholding tax calculation',
      'Pay slip generation',
      'Direct deposit of paycheck or printing of paychecks',
      'Process analytics and process capabilities',
      'Data confidentiality controls',
      'Cloud-based payroll processing for reliability and cost-effectiveness'
    ],
    groups: [
      {
        title: 'Payroll Outsourcing Advantages',
        points: [
          'Labor cost impact analysis for better business planning',
          'Saves time and cost',
          'Reduces penalty risk due to non-compliance',
          'Lower risk potential',
          'Direct deposit enablement',
          'Latest technology adoption'
        ]
      }
    ]
  },
  {
    title: 'Company Incorporation in India',
    intro: [
      'We help Australian businesses establish operations in India and provide end-to-end support for company and branch office incorporation under Companies Act, 2013.',
      'Our team also supports FEMA Act, 1999 and FDI-related compliance required for setting up subsidiary structures and subsequent investment operations.'
    ],
    points: [
      'Entity setup and incorporation support',
      'Direct and indirect tax registrations in India',
      'Foreign investment compliance advisory'
    ]
  }
];

const Australia = () => {
  return (
    <Layout>
      <CountryServicesPage
        country="Australia"
        headline="Australia Bookkeeping, Accounting, Taxation and Payroll Services"
        intro="Dedicated offshore accounting support for Australian businesses with strong controls, compliance, and turnaround."
        sections={AUSTRALIA_SECTIONS}
      />
    </Layout>
  );
};

export default Australia;
