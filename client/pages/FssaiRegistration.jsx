import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const FssaiRegistration = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Licenses &amp; Registrations</span></li>
                <li className="breadcrumb-item active" aria-current="page">FSSAI Registration / License</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    FSSAI Registration &amp; License: Basic, State &amp; Central – End-to-End Support
                </h1>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Guidance on <strong>Basic / State / Central</strong>
                        license selection.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Application, inspections (if any) &amp;
                        <strong>renewals</strong> handled by experts.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Help with <strong>Food Category &amp; Product List</strong>,
                        label &amp; premise details.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Fast processing with accurate documentation to avoid
                        queries.</li>
                </ul>

                <hr className="my-4" />

                
                <h5 className="mb-2">Quick document checklist</h5>
                <div className="mb-3">
                    <span className="doc-chip"><i className="bi bi-file-earmark-text me-1"></i>Business PAN</span>
                    <span className="doc-chip"><i className="bi bi-person-badge me-1"></i>Promoter ID &amp; Address</span>
                    <span className="doc-chip"><i className="bi bi-geo-alt me-1"></i>Premises Proof / NOC</span>
                    <span className="doc-chip"><i className="bi bi-receipt me-1"></i>Entity Certificate (e.g., GST/Udyam)</span>
                    <span className="doc-chip"><i className="bi bi-basket3 me-1"></i>Food Category / Product List</span>
                    <span className="doc-chip"><i className="bi bi-journal-text me-1"></i>Layout / Utility Bills (if
                        asked)</span>
                </div>

                
                <div className="mt-3">
                    <div className="accordion" id="faqAcc">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="q1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
                                    Which license should I choose—Basic, State or Central?
                                </button>
                            </h2>
                            <div id="a1" className="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faqAcc">
                                <div className="accordion-body">
                                    <strong>Basic</strong> (turnover ≤ ₹12L for petty FBOs), <strong>State</strong>
                                    (turnover up to ₹20 Cr or as per category),
                                    <strong>Central</strong> (turnover above State limits, import/export, or specific
                                    categories).
                                    We assess your business and advise appropriately.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-2">
                            <h2 className="accordion-header" id="q2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
                                    How long is the license valid?
                                </button>
                            </h2>
                            <div id="a2" className="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faqAcc">
                                <div className="accordion-body">
                                    1–5 years. We also handle timely renewals so you stay compliant.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for FSSAI Registration / License</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – FSSAI Registration/License" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro! Our licensing team will reach out to you shortly." />
                        <input type="hidden" name="Service" value="FSSAI Registration / License" />
                        <input type="hidden" name="Source" value="FSSAI Registration Page" />
                        <input type="hidden" name="_next" value="" />

                        <div className="mb-3">
                            <label className="form-label">Business / Brand Name</label>
                            <input type="text" className="form-control" name="Business Name" placeholder="e.g. FreshBite Foods" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Applicant Name</label>
                            <input type="text" className="form-control" name="Applicant Name" placeholder="As per ID proof" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" placeholder="you@business.com" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="Mobile Number" placeholder="10-digit mobile" pattern="[0-9]{10}" required="" />
                        </div>

                        <div className="row g-2">
                            <div className="col-7">
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" name="City" placeholder="e.g. Bengaluru" required="" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <input type="text" className="form-control" name="State" placeholder="e.g. Karnataka" required="" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Nature of Business</label>
                            <select className="form-select" name="Nature of Business" required="">
                                <option value="" selected="" disabled="">Select</option>
                                <option>Manufacturer</option>
                                <option>Trader / Distributor</option>
                                <option>Retailer</option>
                                <option>Restaurant / Cloud Kitchen</option>
                                <option>Transporter / Warehouse</option>
                                <option>Importer / Exporter</option>
                                <option>E-commerce / Online Seller</option>
                                <option>Other FBO</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Estimated Annual Turnover</label>
                            <select className="form-select" name="Turnover" required="">
                                <option value="" selected="" disabled="">Select range (₹)</option>
                                <option>Up to 12 Lakhs</option>
                                <option>12L – 1 Cr</option>
                                <option>1 Cr – 20 Cr</option>
                                <option>20 Cr – 50 Cr</option>
                                <option>50 Cr+</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">License Type Needed</label>
                            <select className="form-select" name="License Type" required="">
                                <option value="" selected="" disabled="">Select</option>
                                <option>Basic Registration</option>
                                <option>State License</option>
                                <option>Central License</option>
                                <option>Not sure – need guidance</option>
                            </select>
                        </div>

                        <div className="row g-2">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Preferred Validity</label>
                                    <select className="form-select" name="Validity">
                                        <option value="" selected="" disabled="">Select years</option>
                                        <option>1 Year</option>
                                        <option>2 Years</option>
                                        <option>3 Years</option>
                                        <option>4 Years</option>
                                        <option>5 Years</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Multiple Locations?</label>
                                    <select className="form-select" name="Multi Location">
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Food Category / Products (brief)</label>
                            <input type="text" className="form-control" name="Food Category" placeholder="e.g., bakery, dairy, snacks, beverages" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Any notes for us? (optional)</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="Premise status (owned/rented), cold storage, labels, import/export etc."></textarea>
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

export default FssaiRegistration;
