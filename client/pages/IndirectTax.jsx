import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const IndirectTax = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/taxreturn">Tax Return &amp; Compliance</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Indirect Tax Services</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">Indirect Tax Services: E-Way Bill, E-Invoicing, LUT, Refunds &amp;
                    Advisory</h1>
                <p className="mt-3 fs-5 text-secondary">Stay compliant and reduce risk across your indirect tax operations.
                    From e-invoicing enablement and e-way bill workflows to LUT for exports and GST refund claims, our
                    experts manage the process end-to-end.</p>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>E-Invoicing onboarding (IRP), API/portal setup &amp;
                        SOPs.</li>
                    <li><i className="bi bi-check2-circle tick"></i>E-Way Bill registration, user creation &amp; movement
                        controls.</li>
                    <li><i className="bi bi-check2-circle tick"></i>LUT/Bond for exports without IGST; renewals &amp;
                        documentation.</li>
                    <li><i className="bi bi-check2-circle tick"></i>GST Refunds: exports, inverted duty structure &amp;
                        excess cash ledger.</li>
                    <li><i className="bi bi-check2-circle tick"></i>HSN/SAC classification review &amp; indirect tax
                        advisory.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Notice/letter replies under indirect tax with
                        representations.</li>
                </ul>
                <div className="callout mt-4">
                    <strong><i className="bi bi-info-circle me-2"></i>Need GST filings too?</strong> We also handle
                    monthly/quarterly GST returns, reconciliations and annual filings.
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get Help with Indirect Taxes</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Indirect Tax Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Indirect Tax Services" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Bengaluru 560001" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Area of Assistance</label>
                            <select className="form-select" name="Area of Assistance" required="">
                                <option value="" selected="" disabled="">Choose one…</option>
                                <option>E-Invoicing Enablement</option>
                                <option>E-Way Bill Setup</option>
                                <option>LUT / Bond for Exports</option>
                                <option>GST Refund (Exports / Inverted Duty)</option>
                                <option>Classification / Advisory</option>
                                <option>Notice / Reply Support</option>
                                <option>Other Indirect Tax Help</option>
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

export default IndirectTax;
