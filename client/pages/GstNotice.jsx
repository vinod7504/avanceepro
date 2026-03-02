import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const GstNotice = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/gst-services">GST Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Reply to GST Notice</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">Reply to GST Notice: Drafting, Filing &amp; Hearing Assistance
                </h1>
                <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="notice-chip"><i className="bi bi-file-text"></i> SCN &amp; Demand Replies</span>
                    <span className="notice-chip"><i className="bi bi-shield-check"></i> Legal Grounds &amp;
                        Documentation</span>
                    <span className="notice-chip"><i className="bi bi-cloud-upload"></i> Online Filing on GST Portal</span>
                </div>
                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i><strong>End-to-end assistance</strong> for ASMT-10,
                        DRC-01/01A, DRC-06, DRC-07 etc.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Thorough analysis, <strong>reconciliations</strong>, and
                        defence with case references.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Filing reply on portal within due date; <strong>PH
                            (personal hearing)</strong> support.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Focus on minimizing
                        <strong>tax/interest/penalty</strong> exposure.</li>
                </ul>

                <div className="mt-4">
                    <h4 className="h5 fw-bold">Documents Required</h4>
                    <ul className="mt-2">
                        <li>Copy of notice (PDF) &amp; annexures</li>
                        <li>GSTIN &amp; legal name</li>
                        <li>Filed returns (GSTR-1/3B), ledgers, 2A/2B</li>
                        <li>Sales/Purchase registers, E-way bills</li>
                        <li>Reconciliation statements &amp; working papers</li>
                    </ul>
                </div>

                <div className="mt-3">
                    <h4 className="h5 fw-bold">Our Process</h4>
                    <ol className="mt-2">
                        <li>Share notice details &amp; upload the PDF</li>
                        <li>Expert call to understand facts &amp; prepare strategy</li>
                        <li>Reconciliation, computations &amp; draft reply</li>
                        <li>Filing on portal and PH assistance (if scheduled)</li>
                    </ol>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Start Your GST Notice Reply</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – Reply to GST Notice" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro about your GST Notice. Our team will review the details and reach out shortly." />
                        <input type="hidden" name="Service" value="Reply to GST Notice" />
                        <input type="hidden" name="Source" value="GST Notice Reply Page" />
                        <input type="hidden" name="Priority" id="priorityField" value="Normal" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Bengaluru 560102" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">GSTIN</label>
                            <input type="text" className="form-control uppercase" name="GSTIN" placeholder="22ABCDE1234F1Z5" pattern="[0-9A-Z]{15}" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Notice Type</label>
                            <select className="form-select" name="Notice Type" required="">
                                <option value="" selected="" disabled="">Select</option>
                                <option>ASMT-10 (Return discrepancy)</option>
                                <option>DRC-01 / SCN</option>
                                <option>DRC-01A (Intimation)</option>
                                <option>DRC-06 (Reply to SCN)</option>
                                <option>DRC-07 (Summary of order)</option>
                                <option>DRC-09 (Recovery)</option>
                                <option>Other / Not sure</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Notice Number</label>
                            <input type="text" className="form-control" name="Notice Number" placeholder="e.g. ZA070922XXXXXX" required="" />
                        </div>
                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Notice Date</label>
                                <input type="date" className="form-control" name="Notice Date" required="" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Due Date to Respond</label>
                                <input type="date" className="form-control" name="Due Date" id="dueDate" required="" />
                                <small id="dueMsg" className="text-muted"></small>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload Notice (PDF/Image)</label>
                            <input type="file" className="form-control" name="Notice Attachment" accept="application/pdf,image/*" required="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Key Points / Issue Summary</label>
                            <textarea className="form-control" name="Issue Summary" rows="3" placeholder="Briefly describe the issue mentioned in the notice"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service Selected</label>
                            <input type="text" className="form-control" value="Reply to GST Notice" readonly="" />
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
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <small className="text-muted">Mark as <span className="fw-semibold">Urgent</span></small>
                            <label className="toggle ms-2" id="priorityToggle">
                                <input type="checkbox" />
                                <span className="knob"></span>
                                <span className="track"></span>
                            </label>
                        </div>
                        <button type="submit" className="apply-btn w-100">Get Expert Help</button>
                    </form>
                    <div className="small text-muted mt-3">
                        <i className="bi bi-info-circle me-1"></i> Note: Timelines depend on portal availability and
                        department schedules.
                    </div>
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

export default GstNotice;
