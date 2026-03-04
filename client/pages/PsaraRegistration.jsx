import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const PsaraRegistration = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Licenses</span></li>
                <li className="breadcrumb-item active" aria-current="page">PSARA Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">PSARA Registration (Private Security Agency License)</h1>
                <p className="mt-3 fs-5 text-secondary">Planning to run a Private Security Agency in India? The
                    <strong>PSARA license</strong> is mandatory under the Private Security Agencies (Regulation) Act. We
                    assist across states with documentation, police verification, training tie-ups, and filings until
                    you receive your license.</p>
                <div className="row g-3 mt-1">
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-stars"></i></div>
                                <h6 className="mb-0 fw-bold">Why Get PSARA?</h6>
                            </div>
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>Operate legally in chosen states</li>
                                <li><i className="bi bi-check2-circle tick"></i>Bid for corporate &amp; facility contracts</li>
                                <li><i className="bi bi-check2-circle tick"></i>Build client trust &amp; credibility</li>
                                <li><i className="bi bi-check2-circle tick"></i>Standardised training &amp; processes</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-card-checklist"></i></div>
                                <h6 className="mb-0 fw-bold">Basic Eligibility</h6>
                            </div>
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>Indian entity
                                    (Company/LLP/Partnership/Proprietor)</li>
                                <li><i className="bi bi-check2-circle tick"></i>Clean antecedents of owners/directors</li>
                                <li><i className="bi bi-check2-circle tick"></i>Office setup in the applying state</li>
                                <li><i className="bi bi-check2-circle tick"></i>Training MoU with a recognised institute
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h5 className="mt-4 mb-2">Documents Checklist (indicative)</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="mini-card">
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>Incorporation/Registration documents</li>
                                <li><i className="bi bi-check2-circle tick"></i>MOA/AOA or LLP/Partnership deed</li>
                                <li><i className="bi bi-check2-circle tick"></i>ID &amp; Address proofs of promoters</li>
                                <li><i className="bi bi-check2-circle tick"></i>Office address proof &amp; photos</li>
                                <li><i className="bi bi-check2-circle tick"></i>Affidavits &amp; Undertakings</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mini-card">
                            <ul className="list-unstyled bullet-points mb-0 small">
                                <li><i className="bi bi-check2-circle tick"></i>Police verification forms</li>
                                <li><i className="bi bi-check2-circle tick"></i>Training MoU &amp; syllabus</li>
                                <li><i className="bi bi-check2-circle tick"></i>Employee welfare policies</li>
                                <li><i className="bi bi-check2-circle tick"></i>Financial statements/bankers’ details</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h5 className="mt-4 mb-2">Typical Process Flow</h5>
                <div className="timeline-step">
                    <div className="step-dot">1</div>
                    <div><strong>Assessment &amp; State Mapping</strong> — Choose operating states and entity readiness.
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">2</div>
                    <div><strong>Training MoU</strong> — Tie-up with a recognised training institute.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">3</div>
                    <div><strong>Application &amp; Docs</strong> — Prepare affidavits, policies and forms; online/offline
                        filing.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">4</div>
                    <div><strong>Police Verification</strong> — Verification of promoters and premises.</div>
                </div>
                <div className="timeline-step">
                    <div className="step-dot">5</div>
                    <div><strong>License Grant</strong> — PSARA license issued by State Controlling Authority.</div>
                </div>
                <div className="callout mt-4">
                    <strong><i className="bi bi-info-circle me-2"></i>Note:</strong>
                    Requirements and timelines vary by state. If you plan to operate in multiple states, separate
                    licenses are needed.
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get PSARA Registration Assistance</h5>
                    <form id="psaraForm" action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New PSARA Registration Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="PSARA Registration" />
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
                            <label className="form-label">Entity Type</label>
                            <select className="form-select" name="Entity Type" required="">
                                <option value="" selected="" disabled="">Select…</option>
                                <option>Private Limited Company</option>
                                <option>LLP</option>
                                <option>Partnership Firm</option>
                                <option>Sole Proprietorship</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Operating States (Planned)</label>
                            <input type="text" className="form-control" name="Operating States" placeholder="e.g. Karnataka, Tamil Nadu" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Have Training MoU?</label>
                            <select className="form-select" name="Training MoU">
                                <option>Yes</option>
                                <option selected="">No / Need Help</option>
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

    <div className="modal fade" id="psaraSuccessModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-success text-white">
                    <h5 className="modal-title">Request Received</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">✅ Thank you! Your PSARA enquiry has been submitted. Our team will contact
                    you soon.</div>
                <div className="modal-footer">
                    <button type="button" id="psaraOkBtn" className="btn btn-success">OK</button>
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

export default PsaraRegistration;
