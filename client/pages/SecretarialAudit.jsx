import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const SecretarialAudit = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/taxreturn">Tax Return &amp; Compliance</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Secretarial Audit</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    Secretarial Audit for Companies: Compliance Check &amp; Governance Review
                </h1>

                <p className="mt-3 fs-5 text-secondary">
                    Secretarial Audit is mandatory for listed companies and certain public/private companies under the
                    Companies Act, 2013.
                    It ensures that your company is compliant with all applicable corporate laws, rules, and
                    regulations.
                </p>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Conducted by a qualified Company Secretary (CS)</li>
                    <li><i className="bi bi-check2-circle tick"></i>Review of board processes, filings, registers, and
                        disclosures</li>
                    <li><i className="bi bi-check2-circle tick"></i>Verification of SEBI, FEMA, Labour, and other law
                        compliances</li>
                    <li><i className="bi bi-check2-circle tick"></i>Detailed report identifying gaps and corrective measures
                    </li>
                </ul>

                <div className="row g-3 mt-1">
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-journal-check"></i></div>
                                <h6 className="mb-0 fw-bold">Comprehensive Review</h6>
                            </div>
                            <p className="mb-0 text-secondary small">Checks across all corporate laws applicable to your
                                business.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-shield-lock"></i></div>
                                <h6 className="mb-0 fw-bold">Risk Mitigation</h6>
                            </div>
                            <p className="mb-0 text-secondary small">Identify risks early and take corrective actions to
                                avoid penalties.</p>
                        </div>
                    </div>
                </div>

                <div className="callout mt-4">
                    <strong><i className="bi bi-info-circle me-2"></i>Note:</strong>
                    Secretarial Audit is mandatory for companies with paid-up capital of ₹50 crore or turnover of ₹250
                    crore.
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Request Secretarial Audit Assistance</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Secretarial Audit Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Secretarial Audit" />
                        <input type="hidden" name="Source" value="Secretarial Audit Page" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Hyderabad 500001" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Company Type</label>
                            <select className="form-select" name="Company Type" required="">
                                <option value="" selected="" disabled="">Choose one…</option>
                                <option>Private Limited Company</option>
                                <option>Public Limited Company</option>
                                <option>Listed Company</option>
                                <option>Other</option>
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

    
    
</div>
    </Layout>
  );
};

export default SecretarialAudit;
