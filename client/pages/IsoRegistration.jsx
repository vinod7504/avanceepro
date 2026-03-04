import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const IsoRegistration = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Licenses</span></li>
                <li className="breadcrumb-item active" aria-current="page">ISO Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">ISO Registration &amp; Certification Support</h1>

                <p className="mt-3 fs-5 text-secondary">
                    We help businesses implement and certify ISO management systems end-to-end — from gap analysis and
                    documentation to internal audits and liaison with accredited certification bodies.
                </p>

                <div className="row g-3 mt-1">
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-journal-check"></i></div>
                                <h6 className="mb-0 fw-bold">Standards We Support</h6>
                            </div>
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>ISO 9001 (Quality Management)</li>
                                <li><i className="bi bi-check2-circle tick"></i>ISO 14001 (Environmental)</li>
                                <li><i className="bi bi-check2-circle tick"></i>ISO 27001 (Information Security)</li>
                                <li><i className="bi bi-check2-circle tick"></i>ISO 45001 (OH&amp;S)</li>
                                <li><i className="bi bi-check2-circle tick"></i>ISO 22000 (Food Safety)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-graph-up-arrow"></i></div>
                                <h6 className="mb-0 fw-bold">Benefits</h6>
                            </div>
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>Customer confidence &amp; market access</li>
                                <li><i className="bi bi-check2-circle tick"></i>Process standardization &amp; efficiency
                                </li>
                                <li><i className="bi bi-check2-circle tick"></i>Risk reduction &amp; compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5 className="mt-4 mb-2">Typical Certification Timeline</h5>
                <div className="timeline-step">
                    <div className="step-dot">1</div>
                    <div><strong>Gap Analysis</strong> — Assess current state and plan.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">2</div>
                    <div><strong>Documentation</strong> — Policies, SOPs, formats, records.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">3</div>
                    <div><strong>Implementation</strong> — Train, adopt, and generate evidence.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">4</div>
                    <div><strong>Internal Audit</strong> — Check readiness and fix gaps.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">5</div>
                    <div><strong>Stage 1 &amp; 2 Audit</strong> — Certification body audits and certification.</div>
                </div>

                <div className="callout mt-4">
                    <strong><i className="bi bi-info-circle me-2"></i>Note:</strong> We work with <em>accredited</em>
                    certification bodies only. Pricing and timelines vary by scope and company size.
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get ISO Registration Assistance</h5>
                    <form id="isoForm" action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New ISO Registration Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="ISO Registration" />
                        <input type="hidden" name="_next" value="" />
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
                            <label className="form-label">ISO Standard Interested</label>
                            <select className="form-select" name="ISO Standard" required="">
                                <option value="" selected="" disabled="">Choose one…</option>
                                <option>ISO 9001 – Quality Management</option>
                                <option>ISO 14001 – Environmental Management</option>
                                <option>ISO 27001 – Information Security</option>
                                <option>ISO 45001 – Occupational Health &amp; Safety</option>
                                <option>ISO 22000 – Food Safety</option>
                                <option>Others / Not sure</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Size</label>
                            <select className="form-select" name="Company Size" required="">
                                <option value="" selected="" disabled="">Select…</option>
                                <option>1–10 employees</option>
                                <option>11–50 employees</option>
                                <option>51–200 employees</option>
                                <option>200+ employees</option>
                            </select>
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

    <div className="modal fade" id="isoSuccessModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-success text-white">
                    <h5 className="modal-title">Request Received</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">✅ Thank you! Your ISO enquiry has been submitted. Our team will contact you
                    soon.</div>
                <div className="modal-footer">
                    <button type="button" id="isoOkBtn" className="btn btn-success">OK</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="loginSuccessModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-primary text-white">
                    <h5 className="modal-title">Thank You</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">✅ We’ve received your contact details. We’ll be in touch shortly.</div>
                <div className="modal-footer">
                    <button type="button" id="loginOkBtn" className="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
    </div>

    
</div>
    </Layout>
  );
};

export default IsoRegistration;
