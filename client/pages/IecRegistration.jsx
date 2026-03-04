import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const IecRegistration = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Trade Services</span></li>
                <li className="breadcrumb-item active" aria-current="page">IEC Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">IEC (Import Export Code) Registration — Fast, Online &amp; DGFT
                    Approved</h1>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>End-to-end application on <strong>DGFT portal</strong>
                        with e-sign.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Guidance on <strong>bank certificate/cancelled cheque,
                            address proof</strong> &amp; KYC.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Post-approval help with <strong>profile update &amp;
                            branch addition</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>PAN-based IEC &amp; instant downloadable
                        <strong>e-IEC</strong>.</li>
                </ul>
                <div className="mt-4 p-3 border rounded-3 bg-light">
                    <div className="fw-semibold mb-2"><i className="bi bi-folder-check me-2"></i>Documents (indicative)</div>
                    <ul className="mb-0">
                        <li>PAN (Individual/Entity) &amp; Aadhaar of applicant</li>
                        <li>Business address proof (electricity bill/rent agreement)</li>
                        <li>Bank certificate or cancelled cheque with IFSC</li>
                        <li>Entity proof (COI for company/LLP, partnership deed, etc.)</li>
                        <li>Photo of the applicant &amp; active mobile/email for OTP</li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for IEC Registration</h5>
                    <form id="iecForm" action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New IEC Registration Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our trade specialist will reach out to you shortly." />
                        <input type="hidden" name="Service" value="IEC Registration" />
                        <input type="hidden" name="_next" value="" />
                        <div className="mb-3">
                            <label className="form-label">Applicant Name</label>
                            <input type="text" className="form-control" name="Applicant Name" placeholder="As per PAN" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Entity Type</label>
                            <select className="form-select" name="Entity Type" required="">
                                <option value="" selected="" disabled="">Select entity</option>
                                <option>Individual/Sole Proprietor</option>
                                <option>Partnership Firm</option>
                                <option>LLP</option>
                                <option>Private Limited Company</option>
                                <option>One Person Company</option>
                                <option>Trust/NGO</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">PAN</label>
                            <input type="text" className="form-control uppercase" name="PAN" placeholder="AAAAA1234A" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required="" />
                            <small className="text-muted">Format: 10 characters (e.g., AAAAA1234A)</small>
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
                            <label className="form-label">Nature of Business</label>
                            <select className="form-select" name="Nature of Business" required="">
                                <option value="" selected="" disabled="">Select</option>
                                <option>Manufacturer Exporter</option>
                                <option>Merchant Exporter</option>
                                <option>Service Exporter</option>
                                <option>Importer</option>
                                <option>Importer &amp; Exporter</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Notes (optional)</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="Any specific request like branch code addition, RCMC, AD code, etc."></textarea>
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

    <div className="modal fade" id="iecSuccessModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-success text-white">
                    <h5 className="modal-title">Request Received</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">✅ Thank you! Your IEC enquiry has been submitted. Our team will contact you
                    soon.</div>
                <div className="modal-footer">
                    <button type="button" id="iecOkBtn" className="btn btn-success">OK</button>
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

export default IecRegistration;
