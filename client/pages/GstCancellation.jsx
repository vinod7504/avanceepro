import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const GstCancellation = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">GST Services</span></li>
                <li className="breadcrumb-item active" aria-current="page">GST Cancellation &amp; Revocation</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    GST Registration <span className="text-warning">Cancellation</span> &amp; <span className="text-warning">Revocation</span>
                </h1>

                <p className="mt-3 fs-5">
                    Close your GST registration cleanly or restore it after cancellation—end-to-end help with notices,
                    filings, and responses.
                </p>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Application &amp; supporting <strong>documentation
                            drafting</strong> (REG-16/REG-21 per case).</li>
                    <li><i className="bi bi-check2-circle tick"></i>Compliance review: <strong>pending returns, late fees,
                            liabilities</strong> &amp; reconciliations.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Reply to <strong>Show Cause Notices (SCN)</strong> &amp;
                        department queries.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Fast turnaround with <strong>transparent updates on each
                            step</strong>.</li>
                </ul>

                
                <div className="mt-4 p-3 border rounded-3 bg-light">
                    <div className="fw-semibold mb-2"><i className="bi bi-folder-check me-2"></i>Documents (may vary by case)
                    </div>
                    <ul className="mb-0">
                        <li>GSTIN certificate, Legal name &amp; Trade name details</li>
                        <li>Last filed GSTR-3B/1, Ledger summaries (cash/credit)</li>
                        <li>Reason note for Cancellation / Revocation</li>
                        <li>SCN/order copy (for revocation cases)</li>
                    </ul>
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Start GST Cancellation / Revocation</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New GST Cancellation/Revocation Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you! AvanceePro has received your GST request. Our GST expert will contact you shortly." />
                        <input type="hidden" name="Service" value="GST Cancellation/Revocation" />
                        <input type="hidden" name="_next" value="gst-cancellation-revocation.html?success=1" />

                        <div className="mb-3">
                            <label className="form-label">Request Type</label>
                            <select className="form-select" name="Request Type" required="">
                                <option value="" selected="" disabled="">Select one</option>
                                <option>Cancellation of GST Registration</option>
                                <option>Revocation of Cancellation</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">GSTIN</label>
                            <input type="text" className="form-control" name="GSTIN" placeholder="22AAAAA0000A1Z5" pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}" required="" />
                            <small className="text-muted">Format: 15 characters (e.g., 22AAAAA0000A1Z5)</small>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Legal / Trade Name</label>
                            <input type="text" className="form-control" name="Legal/Trade Name" placeholder="Your Registered Name" required="" />
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
                            <label className="form-label">Reason / Notes</label>
                            <textarea className="form-control" name="Reason" rows="3" placeholder="Briefly describe your case (e.g., business closed, non-operation, cancellation order received)…"></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Preferred Contact</label>
                            <select className="form-select" name="Preferred Contact">
                                <option>Phone</option>
                                <option>Email</option>
                                <option>WhatsApp</option>
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

    
    <div className="modal fade" id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
                <div className="modal-header bg-success text-white">
                    <h5 className="modal-title" id="successModalLabel">Success</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-5">
                    ✅ Thank you! We will contact you soon.
                </div>
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

export default GstCancellation;
