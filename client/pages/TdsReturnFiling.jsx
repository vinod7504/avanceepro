import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const TdsReturnFiling = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Tax Compliance</span></li>
                <li className="breadcrumb-item active" aria-current="page">TDS Return Filing</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">TDS Return Filing: 24Q, 26Q, 27Q, 27EQ with Challan &amp; Deductee
                    Validation</h1>

                <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="feature-chip"><i className="bi bi-file-spreadsheet"></i> FVU Generation</span>
                    <span className="feature-chip"><i className="bi bi-shield-check"></i> PAN/TAN Validation</span>
                    <span className="feature-chip"><i className="bi bi-cloud-upload"></i> Portal Upload &amp;
                        Acknowledgement</span>
                </div>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Original &amp; Correction returns; Justification report
                        handling.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Traces challan-deductee mapping, BIN validation &amp;
                        CSI checks.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Form-wise support: <strong>24Q (Salary), 26Q (Domestic),
                            27Q (Non-resident), 27EQ (TCS)</strong>.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Late fee/interest computation and <strong>notice
                            resolution</strong>.</li>
                </ul>

                <div className="mt-4">
                    <h4 className="h5 fw-bold">Documents Required</h4>
                    <ul className="mt-2">
                        <li>TAN, Organisation Name &amp; Address</li>
                        <li>Deductee details (Name, PAN, section, amount, TDS)</li>
                        <li>Challan details (BSR, Date, CIN, Amount) &amp; CSI file</li>
                        <li>Salary sheets (for 24Q) / Vendor registers (for 26Q)</li>
                        <li>Any previous FVU/acknowledgement (for corrections)</li>
                    </ul>
                </div>

                <div className="mt-3">
                    <h4 className="h5 fw-bold">Our Process</h4>
                    <ol className="mt-2">
                        <li>Collect data &amp; challans, validate PAN/TAN</li>
                        <li>Prepare RPU, generate FVU &amp; fix errors</li>
                        <li>Upload on portal &amp; share acknowledgement</li>
                    </ol>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Start Your TDS Return</h5>
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – TDS Return Filing" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro regarding TDS Return Filing. Our team will reach out shortly." />
                        <input type="hidden" name="Service" value="TDS Return Filing" />
                        <input type="hidden" name="Source" value="TDS Return Filing Page" />
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
                            <input type="text" className="form-control" name="City/Pincode" placeholder="e.g. Hyderabad 500001" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">TAN</label>
                            <input type="text" className="form-control" name="TAN" placeholder="BLRA12345B" pattern="[A-Z]{4}[0-9]{5}[A-Z]{1}" style={{ textTransform: 'uppercase' }} required="" />
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Financial Year</label>
                                <input type="text" className="form-control" name="Financial Year" placeholder="2025-26" pattern="[0-9]{4}-[0-9]{2}" required="" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Quarter</label>
                                <select className="form-select" name="Quarter" required="">
                                    <option value="" selected="" disabled="">Select quarter</option>
                                    <option>Q1 (Apr–Jun)</option>
                                    <option>Q2 (Jul–Sep)</option>
                                    <option>Q3 (Oct–Dec)</option>
                                    <option>Q4 (Jan–Mar)</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Form Type</label>
                                <select className="form-select" name="Form Type" required="">
                                    <option value="" selected="" disabled="">Select</option>
                                    <option>24Q (Salary)</option>
                                    <option>26Q (Domestic)</option>
                                    <option>27Q (Non-resident)</option>
                                    <option>27EQ (TCS)</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Return Type</label>
                                <select className="form-select" name="Return Type" required="">
                                    <option value="" selected="" disabled="">Select</option>
                                    <option>Original</option>
                                    <option>Correction</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">No. of Deductees</label>
                                <input type="number" className="form-control" name="Deductees" min="1" placeholder="e.g. 12" required="" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Total TDS Deposited (₹)</label>
                                <input type="number" className="form-control" name="Total TDS" min="0" step="0.01" placeholder="e.g. 15420.00" required="" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Upload Data (Excel/CSV/RPU) &amp; CSI</label>
                            <input type="file" className="form-control" name="Data Files" accept=".xls,.xlsx,.csv,.txt,.zip,.7z,.rar" multiple="" required="" />
                            <small className="text-muted">You may upload multiple files (Challan/BSR/CSI, deductee sheet,
                                prior FVU/ack).</small>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Notes / Specific Requests</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="Any additions: late fee/interest calc, correction category, etc."></textarea>
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

                        <button type="submit" className="apply-btn w-100">File My TDS Return</button>
                    </form>

                    <div className="small text-muted mt-3">
                        <i className="bi bi-info-circle me-1"></i>
                        Timelines depend on data completeness and portal availability.
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
                <div className="modal-body fs-5">✅ Thank you! We’ve received your request and will contact you soon.</div>
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

export default TdsReturnFiling;
