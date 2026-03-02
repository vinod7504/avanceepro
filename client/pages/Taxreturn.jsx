import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Taxreturn = () => {
  return (
    <Layout>
      <div>
<section className="tax-services container py-5">
        <div className="title-wrap mb-4">
            <h2 className="mb-1">Choose the service in Tax Return &amp; Compliance</h2>
            <p className="lead mb-0">Pick a category to see detailed options — the preview updates on the right.</p>
        </div>

        <div className="row g-4">
            
            <div className="col-lg-7">
                <div className="accordion" id="serviceAccordion">

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-gst" aria-expanded="true" aria-controls="cat-gst" data-visual-title="GST &amp; Indirect Tax" data-visual-text="Registrations, returns, cancellations and replies to notices handled end-to-end." data-visual-img="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-receipt-tax"></i></span>
                                GST &amp; Other Indirect Tax
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-gst" className="collapse show" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem">
                                    <i className="bi bi-building bullet"></i>
                                    <Link data-visual-title="GST Registration" data-visual-text="New GST registration and amendments with proper documentation support." data-visual-img="https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/gst-registration">
                                        GST Registration
                                    </Link>
                                </div>
                                <div className="subitem">
                                    <i className="bi bi-clipboard-check bullet"></i>
                                    <Link data-visual-title="GST Filing" data-visual-text="Monthly/quarterly filings (GSTR-1, GSTR-3B) with reconciliation." data-visual-img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/gst-filing">
                                        GST Filing
                                    </Link>
                                </div>
                                <div className="subitem">
                                    <i className="bi bi-arrow-repeat bullet"></i>
                                    <Link data-visual-title="GST Cancellation &amp; Revocation" data-visual-text="We handle cancellations and revocations to restore compliance quickly." data-visual-img="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/gst-cancellation">
                                        GST Cancellation &amp; Revocation
                                    </Link>
                                </div>
                                <div className="subitem">
                                    <i className="bi bi-envelope-exclamation bullet"></i>
                                    <Link data-visual-title="Reply to GST Notice" data-visual-text="Drafting and filing detailed replies to notices with evidence and workings." data-visual-img="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/gst-notice">
                                        Reply to GST Notice
                                    </Link>
                                </div>
                                <div className="subitem">
                                    <i className="bi bi-basket bullet"></i>
                                    <Link data-visual-title="Other Indirect Taxes" data-visual-text="Support for e-way bill, e-invoicing, composition, and other indirect obligations." data-visual-img="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/indirect-tax">
                                        Other Indirect Taxes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-pvt" aria-expanded="false" aria-controls="cat-pvt" data-visual-title="Changes in Pvt Ltd Company" data-visual-text="Director changes, capital increase, address and object updates, and closure." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-buildings"></i></span>
                                Changes in Pvt Ltd Company
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-pvt" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-person-plus bullet"></i>
                                    <Link data-visual-title="Add a Director" data-visual-text="End-to-end appointment with DIR filings and board documentation." data-visual-img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/add-director">Add
                                        a Director</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-person-dash bullet"></i>
                                    <Link data-visual-title="Remove a Director" data-visual-text="Resignation/Removal, minutes, and ROC forms handled." data-visual-img="https://images.unsplash.com/photo-1527249361680-7aa6c6a6d37b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/remove-director">Remove
                                        a Director</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-graph-up-arrow bullet"></i>
                                    <Link data-visual-title="Increase Authorized Capital" data-visual-text="AOA changes, resolutions, and filings for capital hikes." data-visual-img="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/increase-authorized-capital">Increase
                                        Authorized Capital</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-door-closed bullet"></i>
                                    <Link data-visual-title="Close the Pvt Ltd Company" data-visual-text="Strike-off/winding-up with regulatory clearances." data-visual-img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/close-pvt-ltd">Close
                                        the Pvt Ltd Company</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-x-octagon bullet"></i>
                                    <Link data-visual-title="Strike Off Company" data-visual-text="Section 248 strike-off with all supporting documents." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/strike-off-company">Strike
                                        off Company</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-journal-text bullet"></i>
                                    <Link data-visual-title="Change Objective/Activity" data-visual-text="MOA object change with shareholder approval and filings." data-visual-img="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/change-objective">Change
                                        Objective/Activity</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-geo-alt bullet"></i>
                                    <Link data-visual-title="Change Address" data-visual-text="Registered office shifts (within city/state) including proof updates." data-visual-img="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/change-address">Change
                                        Address</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-llp" aria-expanded="false" aria-controls="cat-llp" data-visual-title="Changes in LLP" data-visual-text="Designated partner changes, agreement amendments, address changes, and closure." data-visual-img="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-people"></i></span>
                                Changes in Limited Liability Partnership
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-llp" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-person-plus bullet"></i>
                                    <Link data-visual-title="Add a Designated Partner" data-visual-text="Admission of partners with revised LLP agreement." data-visual-img="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-add-designated-partner">Add
                                        a Designated Partner</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-person-dash bullet"></i>
                                    <Link data-visual-title="Remove a Partner" data-visual-text="Exit of partners and intimation filings." data-visual-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-remove-partner">Remove
                                        a Partner</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-journal-arrow-up bullet"></i>
                                    <Link data-visual-title="Change LLP Agreement" data-visual-text="Re-drafting and registration of amended LLP agreement." data-visual-img="https://images.unsplash.com/photo-1554224155-3a589877462f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-change-agreement">Change
                                        LLP Agreement</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-geo-alt bullet"></i>
                                    <Link data-visual-title="Change Registered Address" data-visual-text="Registered office change with due compliance." data-visual-img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-change-address">Change
                                        Registered Address</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-door-closed bullet"></i>
                                    <Link data-visual-title="Close the LLP" data-visual-text="Strike-off/closure with partner resolutions." data-visual-img="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-close">Close
                                        the LLP</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-annual" aria-expanded="false" aria-controls="cat-annual" data-visual-title="Mandatory Annual Filings" data-visual-text="Annual ROC &amp; IT filings, TDS, and audits taken care of on time." data-visual-img="https://images.unsplash.com/photo-1554224155-c9aebb6df7b2?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-calendar3"></i></span>
                                Mandatory Annual Filings
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-annual" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-file-earmark-check bullet"></i>
                                    <Link data-visual-title="ROC Annual Filing" data-visual-text="AOC-4, MGT-7 and related filings with financials." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/roc-annual-filing">ROC
                                        Annual Filing</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-cash-coin bullet"></i>
                                    <Link data-visual-title="Income Tax Return" data-visual-text="ITR preparation, review, and e-filing for entities and individuals." data-visual-img="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/income-tax-return">Income
                                        Tax Return</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-percent bullet"></i>
                                    <Link data-visual-title="TDS Return" data-visual-text="Quarterly TDS/TCS returns with challan reconciliation." data-visual-img="https://images.unsplash.com/photo-1554224155-1725f2fe4e9f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/tds-return">TDS
                                        Return</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-hammer bullet"></i>
                                    <Link data-visual-title="Audit &amp; Assurance" data-visual-text="Statutory, tax and internal audits with clear reports." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/audit-and-assurance">Audit
                                        &amp; Assurance</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-labour" aria-expanded="false" aria-controls="cat-labour" data-visual-title="Labour Compliance" data-visual-text="PF/ESI registrations and returns, Shops &amp; Establishment, and PT." data-visual-img="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-person-badge"></i></span>
                                Labour Compliance
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-labour" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-people bullet"></i>
                                    <Link data-visual-title="PF Registration" data-visual-text="Establishment registration and monthly EPF compliance." data-visual-img="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/pf-registration">PF
                                        Registration</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-shield-plus bullet"></i>
                                    <Link data-visual-title="ESI Registration" data-visual-text="ESIC registration and return support for employees." data-visual-img="https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/esi-registration">ESI
                                        Registration</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-shop bullet"></i>
                                    <Link data-visual-title="Shops &amp; Establishment" data-visual-text="State-wise Shops &amp; Establishment licence assistance." data-visual-img="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/shops-establishment">Shops
                                        &amp; Establishment</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-cash-stack bullet"></i>
                                    <Link data-visual-title="Professional Tax" data-visual-text="PT registration and periodic returns for your state." data-visual-img="https://images.unsplash.com/photo-1521540216272-a50305cd4421?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/professional-tax">Professional
                                        Tax</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-acc" aria-expanded="false" aria-controls="cat-acc" data-visual-title="Accounting &amp; Tax" data-visual-text="Book-keeping, tax planning, and assessments under one roof." data-visual-img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-calculator"></i></span>
                                Accounting &amp; Tax
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-acc" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-journal-bookmark bullet"></i>
                                    <Link data-visual-title="Accounting &amp; Book-keeping" data-visual-text="Managed books, MIS and reconciliations each month." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/accounting-bookkeeping">Accounting
                                        &amp; Book-keeping</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-pin-angle bullet"></i>
                                    <Link data-visual-title="Tax Planning" data-visual-text="Proactive planning to optimise your tax outgo." data-visual-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/tax-planning">Tax
                                        Planning</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-bank bullet"></i>
                                    <Link data-visual-title="Appeals &amp; Assessments" data-visual-text="Representation before authorities with full documentation." data-visual-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/appeals-assessments">Appeals
                                        &amp; Assessments</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-convert" aria-expanded="false" aria-controls="cat-convert" data-visual-title="Convert Your Business" data-visual-text="Smooth transitions between entity types with compliance support." data-visual-img="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-arrow-left-right"></i></span>
                                Convert Your Business
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-convert" className="collapse" data-bs-parent="#serviceAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-arrow-right-circle bullet"></i>
                                    <Link data-visual-title="Sole Proprietorship → Pvt Ltd" data-visual-text="Convert to a Pvt Ltd with asset and contract rollover." data-visual-img="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/sole-to-pvt">Sole
                                        Proprietorship → Pvt Ltd</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-arrow-right-circle bullet"></i>
                                    <Link data-visual-title="LLP → Pvt Ltd" data-visual-text="Plan and execute conversion with minimal downtime." data-visual-img="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/llp-to-pvt">LLP
                                        → Pvt Ltd</Link>
                                </div>
                                <div className="subitem"><i className="bi bi-arrow-right-circle bullet"></i>
                                    <Link data-visual-title="Pvt Ltd → LLP" data-visual-text="Switch to LLP for operational flexibility and tax efficiency." data-visual-img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" to="/pvt-to-llp">Pvt
                                        Ltd → LLP</Link>
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
                        <h5 id="visualTitle" className="visual-title mb-1">GST &amp; Indirect Tax</h5>
                        <p id="visualText" className="visual-text mb-0">
                            Registrations, returns, cancellations and replies to notices handled end-to-end.
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

export default Taxreturn;
