import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const AnnualCompliance = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Compliance Services</span></li>
                <li className="breadcrumb-item active" aria-current="page">Annual Compliance</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">Annual Compliance for Companies, LLPs &amp; Firms — ROC, ITR, GST,
                    TDS &amp; Audit</h1>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Secretarial filings: <strong>AOC-4, MGT-7/7A, DIR-3
                            KYC</strong> (companies).</li>
                    <li><i className="bi bi-check2-circle tick"></i>LLP filings: <strong>Form 11, Form 8</strong> with deed
                        compliance.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Tax: <strong>ITR, TDS returns, GST annual return
                            (GSTR-9/9C)</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Books, audit coordination &amp; <strong>due-date
                            tracking</strong> with timely reminders.</li>
                </ul>
                <div className="mt-3 p-3 border rounded-3 bg-light">
                    <div className="fw-semibold mb-2"><i className="bi bi-folder-check me-2"></i>Documents (indicative)</div>
                    <ul className="mb-0">
                        <li>MOA/AOA or LLP Deed / Partnership Deed</li>
                        <li>Financials: Trial balance, BS &amp; P&amp;L, ledgers, bank statements</li>
                        <li>GST/TDS challans &amp; returns, Form 26AS/AIS</li>
                        <li>Directors/Partners KYC &amp; DSC validity</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <div className="accordion" id="faq">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a1">What entities need annual ROC filing?</button>
                            </h2>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#faq">
                                <div className="accordion-body">All companies (Private/Public/Section-8) and LLPs registered
                                    in India must file annual returns with MCA irrespective of turnover or activity.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-2">
                            <h2 className="accordion-header" id="q2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2">Can you also handle GST/TDS/ITR end-to-end?</button>
                            </h2>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faq">
                                <div className="accordion-body">Yes, we cover bookkeeping, TDS returns, GST monthly/annual,
                                    ITR filing, 3CD/3CB audits and coordinate with statutory auditors.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Start Your Annual Compliance</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Annual Compliance Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our compliance team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Annual Compliance" />
                        <input type="hidden" name="_next" value="" />
                        <div className="mb-3">
                            <label className="form-label">Entity Type</label>
                            <select className="form-select" name="Entity Type" required="">
                                <option value="" selected="" disabled="">Select entity</option>
                                <option>Private Limited Company</option>
                                <option>LLP</option>
                                <option>Partnership Firm</option>
                                <option>Sole Proprietorship</option>
                                <option>Section 8 / NGO</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Financial Year</label>
                            <select className="form-select" name="Financial Year" required="">
                                <option value="" selected="" disabled="">Select FY</option>
                                <option>FY 2023-24</option>
                                <option>FY 2024-25</option>
                                <option>FY 2025-26</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" placeholder="you@company.com" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="Mobile Number" placeholder="10-digit mobile" pattern="[0-9]{10}" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City / Pincode</label>
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Bengaluru 560102" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Services Required</label>
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="ROC Annual Filings (AOC-4/MGT-7)" />
                                        <label className="form-check-label small">ROC Annual Filings (AOC-4/MGT-7)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="LLP Form 11 &amp; Form 8" />
                                        <label className="form-check-label small">LLP Form 11 &amp; Form 8</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="Income Tax Return (ITR)" />
                                        <label className="form-check-label small">Income Tax Return (ITR)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="TDS Returns (24Q/26Q)" />
                                        <label className="form-check-label small">TDS Returns (24Q/26Q)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="GST Annual (GSTR-9/9C)" />
                                        <label className="form-check-label small">GST Annual (GSTR-9/9C)</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="Bookkeeping &amp; MIS" />
                                        <label className="form-check-label small">Bookkeeping &amp; MIS</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="Services[]" value="Tax Audit / Statutory Audit" />
                                        <label className="form-check-label small">Tax Audit / Statutory Audit
                                            Coordination</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Turnover Range</label>
                            <select className="form-select" name="Turnover">
                                <option value="< 20L">&lt; ₹20 Lakh</option>
                                <option value="20L - 1Cr">₹20 Lakh – ₹1 Cr</option>
                                <option value="1Cr - 5Cr">₹1 Cr – ₹5 Cr</option>
                                <option value="> 5Cr">&gt; ₹5 Cr</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Notes (optional)</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="Tell us about pending filings, notices, or timelines…"></textarea>
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

    <div className="modal fade" id="successModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-success text-white">
                    <h5 className="modal-title">Success</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">✅ Thank you! We will contact you soon.</div>
                <div className="modal-footer">
                    <button type="button" id="successOkBtn" className="btn btn-success">OK</button>
                </div>
            </div>
        </div>
    </div>

    
</div>
    </Layout>
  );
};

export default AnnualCompliance;
