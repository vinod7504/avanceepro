import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Partnership = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/register-company">Start a Business</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Partnership Firm Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    Partnership Firm Registration Online:
                    Documents, Process &amp; Expert Support
                </h1>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Quick setup with <strong>Partnership Deed
                            drafting</strong> by experts.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Support for <strong>Firm PAN, TAN &amp; GST</strong>
                        (optional) post-registration.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Guidance on <strong>profit-sharing ratios, capital &amp;
                            bank account opening</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Affordable compliance path before moving to LLP or Pvt
                        Ltd as you scale.</li>
                </ul>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for Partnership Firm Registration</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Partnership Firm Registration Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Partnership Firm Registration" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Hyderabad 500081" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Proposed Firm Name</label>
                            <input type="text" className="form-control" name="Proposed Firm Name" placeholder="e.g. Sunrise Traders" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">No. of Partners</label>
                            <select className="form-select" name="Partners Count">
                                <option value="2" selected="">2</option>
                                <option value="3">3</option>
                                <option value="4+">4+</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Service Selected</label>
                            <input type="text" className="form-control" value="Partnership Firm Registration" readonly="" />
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

export default Partnership;
