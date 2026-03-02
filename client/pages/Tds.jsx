import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Tds = () => {
  return (
    <Layout>
      <div>
<section className="svc container py-5">
        <div className="title-wrap mb-4">
            <h2 className="mb-1">Choose the service in TDS / Withholding Tax</h2>
            <p className="lead mb-0">Open a category to view options — the preview on the right updates automatically.</p>
        </div>

        <div className="row g-4">
            
            <div className="col-lg-7">
                <div className="accordion" id="tdsAccordion">

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-setup" aria-expanded="true" aria-controls="cat-setup" data-visual-title="TAN &amp; Deductor Setup" data-visual-text="TAN allotment, deductor registration on TRACES and end-to-end onboarding." data-visual-img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-person-gear"></i></span>
                                TAN / Deductor Setup
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-setup" className="collapse show" data-bs-parent="#tdsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-upc-scan bullet"></i>
                                    <a href="#!" data-visual-title="TAN Registration" data-visual-text="New TAN application, changes and reactivation support." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">TAN
                                        Registration / Change</a>
                                </div>
                                <div className="subitem"><i className="bi bi-link-45deg bullet"></i>
                                    <a href="#!" data-visual-title="TRACES Registration" data-visual-text="Register the deductor on TRACES, create users and set up roles." data-visual-img="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">TRACES
                                        Registration</a>
                                </div>
                                <div className="subitem"><i className="bi bi-credit-card bullet"></i>
                                    <a href="#!" data-visual-title="Challan Payment (ITNS 281)" data-visual-text="Challan creation, OLTAS tracking and CIN verification." data-visual-img="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Challan
                                        ITNS-281 Payment</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-returns" aria-expanded="false" aria-controls="cat-returns" data-visual-title="Quarterly TDS/TCS Returns" data-visual-text="Preparation and filing of 24Q, 26Q, 27Q and 27EQ with FVU validation." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-journal-check"></i></span>
                                Quarterly Returns
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-returns" className="collapse" data-bs-parent="#tdsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-filetype-q bullet"></i>
                                    <a href="#!" data-visual-title="Form 24Q (Salary)" data-visual-text="Employee-wise working, deductions and Form-16 generation." data-visual-img="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        24Q – Salary</a>
                                </div>
                                <div className="subitem"><i className="bi bi-filetype-q bullet"></i>
                                    <a href="#!" data-visual-title="Form 26Q (Domestic)" data-visual-text="Non-salary resident payments: contractors, rent, professional fees." data-visual-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        26Q – Non-Salary (Residents)</a>
                                </div>
                                <div className="subitem"><i className="bi bi-globe2 bullet"></i>
                                    <a href="#!" data-visual-title="Form 27Q (Non-Residents)" data-visual-text="Withholding u/s 195 with DTAA, rate checks and documentation." data-visual-img="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        27Q – Non-Residents</a>
                                </div>
                                <div className="subitem"><i className="bi bi-cart-check bullet"></i>
                                    <a href="#!" data-visual-title="Form 27EQ (TCS)" data-visual-text="TCS computation, challans and quarterly filing for collectors." data-visual-img="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        27EQ – TCS</a>
                                </div>
                                <div className="subitem"><i className="bi bi-pencil-square bullet"></i>
                                    <a href="#!" data-visual-title="Correction Statements" data-visual-text="Defaults removal via C1-C9 corrections, challan/offline &amp; online." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Correction
                                        Statements (RPU/FVU)</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-traces" aria-expanded="false" aria-controls="cat-traces" data-visual-title="TRACES Utilities &amp; Certificates" data-visual-text="Form 16/16A, justification reports, defaults rectification and refunds." data-visual-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-shield-check"></i></span>
                                TRACES &amp; Certificates
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-traces" className="collapse" data-bs-parent="#tdsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-file-earmark-text bullet"></i>
                                    <a href="#!" data-visual-title="Form 16 / 16A" data-visual-text="Download, digitally sign and distribute salary &amp; non-salary TDS certificates." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        16 &amp; 16A</a>
                                </div>
                                <div className="subitem"><i className="bi bi-clipboard2-pulse bullet"></i>
                                    <a href="#!" data-visual-title="Justification Reports &amp; Defaults" data-visual-text="Resolve short deduction, interest, late fee and PAN errors." data-visual-img="https://images.unsplash.com/photo-1581091014534-8987c1d2d7d5?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Justification
                                        Reports</a>
                                </div>
                                <div className="subitem"><i className="bi bi-arrow-counterclockwise bullet"></i>
                                    <a href="#!" data-visual-title="Refunds &amp; Challan Correction" data-visual-text="Request challan corrections, CIN merge/split and refunds where eligible." data-visual-img="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Refunds
                                        / Challan Correction</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-special" aria-expanded="false" aria-controls="cat-special" data-visual-title="Cross-border &amp; Special Cases" data-visual-text="Form 15CA/CB, 197 lower/NIL deduction and 195 analysis for NR payments." data-visual-img="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-globe-asia-australia"></i></span>
                                Cross-border &amp; Special Cases
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-special" className="collapse" data-bs-parent="#tdsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-file-earmark-ruled bullet"></i>
                                    <a href="#!" data-visual-title="Form 15CA / 15CB" data-visual-text="CA certificate, DTAA relief checks and e-filing for foreign remittances." data-visual-img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Form
                                        15CA/CB (Foreign Remittance)</a>
                                </div>
                                <div className="subitem"><i className="bi bi-badge-ad bullet"></i>
                                    <a href="#!" data-visual-title="Section 197 – Lower/NIL TDS" data-visual-text="Application, follow-up and compliance under s.197 / 206C(9)." data-visual-img="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Lower/NIL
                                        Deduction Certificate</a>
                                </div>
                                <div className="subitem"><i className="bi bi-search bullet"></i>
                                    <a href="#!" data-visual-title="Section 195 Opinion" data-visual-text="Chargeability, PE and DTAA analysis for payments to non-residents." data-visual-img="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Section
                                        195 Technical Opinion</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-health" aria-expanded="false" aria-controls="cat-health" data-visual-title="Compliance Health Check" data-visual-text="End-to-end review of deductor compliance with MIS of risks &amp; actions." data-visual-img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-heart-pulse"></i></span>
                                Compliance Health Check
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-health" className="collapse" data-bs-parent="#tdsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-clipboard2-check bullet"></i>
                                    <a href="#!" data-visual-title="Ledger &amp; PAN Validation" data-visual-text="PAN master clean-up, invalid PAN detection and rate checks." data-visual-img="https://images.unsplash.com/photo-1581091014534-8987c1d2d7d5?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">PAN
                                        &amp; Rate Validation</a>
                                </div>
                                <div className="subitem"><i className="bi bi-clock-history bullet"></i>
                                    <a href="#!" data-visual-title="Interest &amp; Late Fee Computation" data-visual-text="Automated 201(1A) interest &amp; late fee workings with timelines." data-visual-img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Interest
                                        &amp; Late Fee</a>
                                </div>
                                <div className="subitem"><i className="bi bi-envelope-exclamation bullet"></i>
                                    <a href="#!" data-visual-title="Notices &amp; Assessment Support" data-visual-text="Reply/draft for CPC-TDS and AO notices with documentation." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Notices
                                        &amp; Assessments</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="visual-card">
                    <img id="visualImg" className="visual-img" alt="Service preview" src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" />
                    <div className="visual-body">
                        <h5 id="visualTitle" className="visual-title mb-1">TAN &amp; Deductor Setup</h5>
                        <p id="visualText" className="visual-text mb-0">
                            TAN allotment, deductor registration on TRACES and end-to-end onboarding.
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

export default Tds;
