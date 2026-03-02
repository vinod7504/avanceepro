import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Account = () => {
  return (
    <Layout>
      <div>
<section className="svc container py-5">
        <div className="title-wrap mb-4">
            <h2 className="mb-1">Choose the service in Accounting &amp; Book-keeping</h2>
            <p className="lead mb-0">Pick a category to see detailed options — the preview updates on the right.</p>
        </div>

        <div className="row g-4">
            
            <div className="col-lg-7">
                <div className="accordion" id="accAccordion">

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-core" aria-expanded="true" aria-controls="cat-core" data-visual-title="Core Book-keeping" data-visual-text="Day-to-day accounting, reconciliations and monthly close." data-visual-img="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-journal-bookmark"></i></span>
                                Core Book-keeping
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-core" className="collapse show" data-bs-parent="#accAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-card-checklist bullet"></i>
                                    <a href="#!" data-visual-title="Monthly Book-keeping" data-visual-text="Timely posting of sales, purchases, expenses and journals; month-end close." data-visual-img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Monthly
                                        Book-keeping</a>
                                </div>
                                <div className="subitem"><i className="bi bi-receipt bullet"></i>
                                    <a href="#!" data-visual-title="Bank &amp; Ledger Reconciliation" data-visual-text="Bank, credit card and vendor/customer reconciliations with schedules." data-visual-img="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Bank
                                        &amp; Ledger Reconciliation</a>
                                </div>
                                <div className="subitem"><i className="bi bi-cash-coin bullet"></i>
                                    <a href="#!" data-visual-title="AR / AP Management" data-visual-text="Invoice creation, collections follow-ups and vendor payment tracking." data-visual-img="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Accounts
                                        Receivable / Payable</a>
                                </div>
                                <div className="subitem"><i className="bi bi-person-lines-fill bullet"></i>
                                    <a href="#!" data-visual-title="Payroll Processing" data-visual-text="Salary sheets, statutory deductions and payslips with audit trail." data-visual-img="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Payroll
                                        Processing</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-mis" aria-expanded="false" aria-controls="cat-mis" data-visual-title="MIS &amp; Controls" data-visual-text="Management reporting, budgeting and CFO dashboards." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-graph-up-arrow"></i></span>
                                MIS &amp; Controls
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-mis" className="collapse" data-bs-parent="#accAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-bar-chart bullet"></i>
                                    <a href="#!" data-visual-title="MIS &amp; Dashboards" data-visual-text="P&amp;L, balance sheet, cash-flow, cohort &amp; KPI dashboards each month." data-visual-img="https://images.unsplash.com/photo-1581091014534-8987c1d2d7d5?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">MIS
                                        &amp; Dashboards</a>
                                </div>
                                <div className="subitem"><i className="bi bi-calendar2-week bullet"></i>
                                    <a href="#!" data-visual-title="Budgeting &amp; Forecasts" data-visual-text="Rolling forecasts, variance analysis and scenario planning." data-visual-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Budgeting
                                        &amp; Forecasts</a>
                                </div>
                                <div className="subitem"><i className="bi bi-briefcase bullet"></i>
                                    <a href="#!" data-visual-title="Virtual CFO" data-visual-text="Strategic finance support, policy design and board-ready packs." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Virtual
                                        CFO</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-setup" aria-expanded="false" aria-controls="cat-setup" data-visual-title="Setup &amp; Migration" data-visual-text="Tally/QuickBooks/Xero setup, chart of accounts and data migration." data-visual-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-gear"></i></span>
                                Setup &amp; Migration
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-setup" className="collapse" data-bs-parent="#accAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-diagram-3 bullet"></i>
                                    <a href="#!" data-visual-title="Accounting System Setup" data-visual-text="COA design, masters, templates and process SOPs." data-visual-img="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Accounting
                                        System Setup</a>
                                </div>
                                <div className="subitem"><i className="bi bi-cloud-arrow-up bullet"></i>
                                    <a href="#!" data-visual-title="Software Migration" data-visual-text="Move from spreadsheets/legacy tools to Tally, QuickBooks or Xero." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Migration
                                        &amp; Onboarding</a>
                                </div>
                                <div className="subitem"><i className="bi bi-archive bullet"></i>
                                    <a href="#!" data-visual-title="Cleanup &amp; Catch-up" data-visual-text="Backlog posting, error fixes and year-end readiness." data-visual-img="https://images.unsplash.com/photo-1554224155-1725f2fe4e9f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Cleanup
                                        &amp; Catch-up</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-compliance" aria-expanded="false" aria-controls="cat-compliance" data-visual-title="Compliance Add-ons" data-visual-text="Seamless link with GST/TDS/IT filings and audit support." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-shield-check"></i></span>
                                Compliance Add-ons
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-compliance" className="collapse" data-bs-parent="#accAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-receipt-cutoff bullet"></i>
                                    <a href="#!" data-visual-title="GST &amp; TDS Integration" data-visual-text="Reconciliation with GSTRs, TDS ledgers and challans." data-visual-img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">GST/TDS
                                        Integration</a>
                                </div>
                                <div className="subitem"><i className="bi bi-file-earmark-text bullet"></i>
                                    <a href="#!" data-visual-title="Financial Statements" data-visual-text="Year-end financials, schedules and audit-ready notes." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Financial
                                        Statements</a>
                                </div>
                                <div className="subitem"><i className="bi bi-building-check bullet"></i>
                                    <a href="#!" data-visual-title="Audit Support" data-visual-text="Tax/statutory audit assistance with workings and evidence." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Audit
                                        Support</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="visual-card">
                    <img id="visualImg" className="visual-img" alt="Service preview" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" />
                    <div className="visual-body">
                        <h5 id="visualTitle" className="visual-title mb-1">Core Book-keeping</h5>
                        <p id="visualText" className="visual-text mb-0">
                            Day-to-day accounting, reconciliations and monthly close.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    
    

</div>
    </Layout>
  );
};

export default Account;
