import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Llp = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Start a Business</span></li>
                <li className="breadcrumb-item active" aria-current="page">LLP Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    Limited Liability Partnership Registration Made Easy: Online Process, Documents &amp; Expert Support
                </h1>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Quick incorporation in <strong>3–7 business
                            days</strong> (subject to govt. processing).</li>
                    <li><i className="bi bi-check2-circle tick"></i><strong>DPIN &amp; DSC</strong> for partners, name
                        reservation and FiLLiP filing included.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Drafting &amp; registration of a robust <strong>LLP
                            Agreement</strong> tailored to your needs.</li>
                    <li><i className="bi bi-check2-circle tick"></i><strong>PAN/TAN</strong> and optional <strong>GST
                            registration</strong> support.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Lower compliance than companies with the benefit of
                        <strong>limited liability</strong>.
                    </li>
                </ul>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for LLP Registration</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New LLP Registration Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="LLP Registration" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Pune 411001" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Service Selected</label>
                            <input type="text" className="form-control" value="LLP Registration" readonly="" />
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

export default Llp;
