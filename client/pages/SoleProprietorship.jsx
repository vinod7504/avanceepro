import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const SoleProprietorship = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/register-business">Start a Business</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Sole Proprietorship Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">Sole Proprietorship Registration: Quick, Affordable &amp;
                    Compliant Setup</h1>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i><strong>Fast setup:</strong> Get your business ready in
                        <strong>1–3 working days</strong> (subject to portals).</li>
                    <li><i className="bi bi-check2-circle tick"></i>Best for freelancers, traders, and small
                        shops—<strong>lowest compliance</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Support for <strong>Udyam (MSME), GST</strong> (if
                        applicable), and Current Account opening.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Guidance on <strong>tax, invoicing, and
                            licences</strong> (trade, FSSAI, Shop &amp; Establishment).</li>
                </ul>
                <div className="mt-4">
                    <h4 className="h5 fw-bold">Documents Required</h4>
                    <ul className="mt-2">
                        <li>PAN &amp; Aadhaar of proprietor</li>
                        <li>Recent passport photo &amp; email/phone</li>
                        <li>Business address proof (rent agreement/utility bill/NOC)</li>
                        <li>Bank details for current account (if available)</li>
                    </ul>
                </div>
                <div className="mt-3">
                    <h4 className="h5 fw-bold">Process (Simple Steps)</h4>
                    <ol className="mt-2">
                        <li>Share details &amp; documents via this form</li>
                        <li>We file for Udyam; assist with GST if required</li>
                        <li>Get certificates &amp; open a Current Account</li>
                    </ol>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for Sole Proprietorship</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Sole Proprietorship Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Sole Proprietorship Registration" />
                        <input type="hidden" name="_next" value="" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Hyderabad 500001" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Business/Nature of Work</label>
                            <input type="text" className="form-control" name="Business Type" placeholder="e.g. Online seller / Consultancy / Retail shop" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service Selected</label>
                            <input type="text" className="form-control" value="Sole Proprietorship Registration" readonly="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <small className="text-muted">Get updates via <i className="bi bi-whatsapp text-success"></i>
                                WhatsApp</small>
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

export default SoleProprietorship;
