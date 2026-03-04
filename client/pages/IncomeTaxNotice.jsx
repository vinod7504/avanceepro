import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const IncomeTaxNotice = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Tax Return &amp; Compliance</span></li>
                <li className="breadcrumb-item active" aria-current="page">Income Tax Notice</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">Income Tax Notice: Drafting, Replies &amp; Representation</h1>

                <p className="mt-3 fs-5 text-secondary">
                    Received a notice from the Income Tax Department? Our team analyses the notice, gathers evidence,
                    drafts a strong reply, and represents you through the e-proceedings portal to resolve the matter in
                    time.
                </p>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>143(1)</strong> intimations &amp;
                        adjustments</li>
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>139(9)</strong> defective return
                        responses</li>
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>142(1)</strong> questionnaire /
                        information calls</li>
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>143(2)</strong> scrutiny assessments
                    </li>
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>148</strong> (Income escaping) &amp;
                        <strong>148A</strong> replies</li>
                    <li><i className="bi bi-check2-circle tick"></i>Section <strong>156</strong> demand,
                        <strong>154</strong> rectification, <strong>245</strong> adjustment notices</li>
                    <li><i className="bi bi-check2-circle tick"></i>Notices under <strong>131 / 133(6)</strong> and other
                        summons</li>
                </ul>

                <div className="row g-3 mt-1">
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-stopwatch"></i></div>
                                <h6 className="mb-0 fw-bold">Time-bound Replies</h6>
                            </div>
                            <p className="mb-0 text-secondary small">We prioritise statutory timelines to avoid penalties or
                                adverse orders.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mini-card">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="ic"><i className="bi bi-file-earmark-text"></i></div>
                                <h6 className="mb-0 fw-bold">Strong Documentation</h6>
                            </div>
                            <p className="mb-0 text-secondary small">Working papers, reconciliations, and evidence compiled
                                for your case.</p>
                        </div>
                    </div>
                </div>

                <div className="callout mt-4">
                    <strong><i className="bi bi-info-circle me-2"></i>Tip:</strong>
                    Keep your <em>DIN</em> (Document Identification Number), PAN, Assessment Year, and AO details handy.
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Get Help with Your Income Tax Notice</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Income Tax Notice Lead" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="Income Tax Notice" />
                        <input type="hidden" name="Source" value="Income Tax Notice Page" />
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
                            <label className="form-label">Notice Type</label>
                            <select className="form-select" name="Notice Type" required="">
                                <option value="" selected="" disabled="">Choose one…</option>
                                <option>143(1) – Intimation</option>
                                <option>139(9) – Defective Return</option>
                                <option>142(1) – Inquiry / Questionnaire</option>
                                <option>143(2) – Scrutiny</option>
                                <option>148 / 148A – Reassessment</option>
                                <option>156 – Demand</option>
                                <option>154 – Rectification</option>
                                <option>245 – Adjustment against Refund</option>
                                <option>131 – Summons</option>
                                <option>133(6) – Information Requisition</option>
                                <option>Other / Not Sure</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">DIN (if available)</label>
                            <input type="text" className="form-control" name="DIN" placeholder="Document Identification Number (optional)" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Brief Details</label>
                            <textarea className="form-control" name="Brief Details" rows="3" placeholder="Add any context you wish to share…"></textarea>
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

export default IncomeTaxNotice;
