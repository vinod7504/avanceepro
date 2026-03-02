import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const GstFiling = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/tax-compliance">Tax &amp; Compliance</Link></li>
                <li className="breadcrumb-item active" aria-current="page">GST Return Filing</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">GST Return Filing: GSTR-1, GSTR-3B, Annual Return &amp; ITC
                    Reconciliation</h1>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Monthly/Quarterly <strong>GSTR-1 &amp; GSTR-3B</strong>
                        with due-date tracking.</li>
                    <li><i className="bi bi-check2-circle tick"></i><strong>2B-based ITC reconciliation</strong> to prevent
                        credit loss &amp; notices.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Support for <strong>Nil returns, Composition (CMP-08),
                            GSTR-9/9C</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Optional <strong>e-invoicing &amp; e-way bill</strong>
                        setup and advisory.</li>
                </ul>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get Help with GST Filing</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – GST Return Filing" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our GST team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="GST Return Filing" />
                        <input type="hidden" name="_next" value="" />
                        <div className="mb-3">
                            <label className="form-label">Business Name</label>
                            <input type="text" className="form-control" name="Business Name" placeholder="e.g. ABC Traders Pvt Ltd" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">GSTIN (15 characters)</label>
                            <input type="text" className="form-control" name="GSTIN" placeholder="22ABCDE1234F1Z5" pattern="[0-9A-Z]{15}" title="Enter 15-character GSTIN in UPPERCASE (0-9, A-Z)" required="" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Bengaluru 560102" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Return Type</label>
                            <select className="form-select" name="Return Type" required="">
                                <option value="" selected="" disabled="">Select return type</option>
                                <option>GSTR-1</option>
                                <option>GSTR-3B</option>
                                <option>Both (GSTR-1 &amp; GSTR-3B)</option>
                                <option>Composition (CMP-08)</option>
                                <option>Annual Return (GSTR-9)</option>
                                <option>Reconciliation (GSTR-9C)</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Return Period</label>
                            <input type="month" className="form-control" name="Return Period" required="" />
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

export default GstFiling;
