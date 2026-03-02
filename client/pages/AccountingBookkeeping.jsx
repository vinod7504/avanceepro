import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const AccountingBookkeeping = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/finance-outsourcing">Finance &amp; Outsourcing</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Accounting &amp; Bookkeeping</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    Accounting &amp; Bookkeeping: Clean Books, Monthly MIS &amp; Statutory Compliance
                </h1>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Day-to-day bookkeeping with <strong>bank, sales &amp;
                            purchase</strong> reconciliations.</li>
                    <li><i className="bi bi-check2-circle tick"></i><strong>Monthly MIS</strong> (P&amp;L, Balance Sheet,
                        Cash Flow) for informed decisions.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Compliance-ready ledgers for <strong>GST, TDS, and
                            Audit</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Catch-up/clean-up for backlogs &amp; year-end closing
                        support.</li>
                </ul>

                
                <div className="mt-4">
                    <div className="accordion" id="faqAcc">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
                                    What software do you support?
                                </button>
                            </h2>
                            <div id="a1" className="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faqAcc">
                                <div className="accordion-body">
                                    Tally, Zoho Books, QuickBooks (legacy), Busy, and custom Excel/Google Sheets
                                    templates.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-2">
                            <h2 className="accordion-header" id="q2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
                                    Can you do month-end closings and MIS?
                                </button>
                            </h2>
                            <div id="a2" className="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faqAcc">
                                <div className="accordion-body">
                                    Yes—monthly schedules, accruals, provisions, and MIS dashboards (P&amp;L, BS, CF,
                                    ratios).
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get Accounting &amp; Bookkeeping Support</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – Accounting &amp; Bookkeeping" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our accounting team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Accounting &amp; Bookkeeping" />
                        <input type="hidden" name="Source" value="Accounting &amp; Bookkeeping Page" />
                        <input type="hidden" name="_next" value="" />

                        <div className="mb-3">
                            <label className="form-label">Business Name</label>
                            <input type="text" className="form-control" name="Business Name" placeholder="e.g. ABC Traders Pvt Ltd" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" placeholder="you@business.com" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="Mobile Number" placeholder="10-digit mobile" pattern="[0-9]{10}" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City / Pincode</label>
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Hyderabad 500081" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Preferred Accounting Software</label>
                            <select className="form-select" name="Preferred Software" required="">
                                <option value="" selected="" disabled="">Select software</option>
                                <option>Tally</option>
                                <option>Zoho Books</option>
                                <option>QuickBooks</option>
                                <option>Busy</option>
                                <option>Excel / Google Sheets</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Frequency</label>
                            <select className="form-select" name="Frequency" required="">
                                <option value="" selected="" disabled="">Select frequency</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>One-time Clean-up</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Approx. Annual Turnover</label>
                            <select className="form-select" name="Turnover">
                                <option value="" selected="" disabled="">Select range (₹)</option>
                                <option>Below 20 Lakhs</option>
                                <option>20L – 1 Cr</option>
                                <option>1 Cr – 5 Cr</option>
                                <option>5 Cr – 25 Cr</option>
                                <option>25 Cr+</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Add-ons (optional)</label>
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="GST Filing" id="addon1" name="Add-ons" />
                                        <label className="form-check-label" htmlFor="addon1">GST Filing</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="TDS &amp; 26Q/24Q" id="addon2" name="Add-ons" />
                                        <label className="form-check-label" htmlFor="addon2">TDS (26Q/24Q)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Payroll &amp; PF/ESI" id="addon3" name="Add-ons" />
                                        <label className="form-check-label" htmlFor="addon3">Payroll &amp; PF/ESI</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Monthly MIS Dashboard" id="addon4" name="Add-ons" />
                                        <label className="form-check-label" htmlFor="addon4">Monthly MIS</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Anything specific we should know? (optional)</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="e.g., backlog months, multi-branch, inventory, project accounting, etc."></textarea>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <small className="text-muted">Get easy updates through <i className="bi bi-whatsapp text-success"></i> WhatsApp</small>
                            <label className="toggle ms-2">
                                <input type="checkbox" name="WhatsApp updates" value="Yes" checked="" />
                                <span className="knob"></span>
                                <span className="track"></span>
                            </label>
                        </div>

                        <button type="submit" className="apply-btn w-100">Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    </main>

    
    
</div>
    </Layout>
  );
};

export default AccountingBookkeeping;
