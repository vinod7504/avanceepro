import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const LiquorLicense = () => {
  return (
    <Layout>
      <div>
<main className="container py-4 py-lg-5">
        
        <nav aria-label="breadcrumb" className="mb-3 crumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><span className="breadcrumb-disabled">Licenses</span></li>
                <li className="breadcrumb-item active" aria-current="page">Liquor License Registration</li>
            </ol>
        </nav>

        <div className="row g-4 g-lg-5 align-items-start">
            
            <div className="col-lg-7 left-wrap">
                <h1 className="display-5 hero-title mt-2">
                    Liquor License Registration: State Excise Application, NOCs &amp; Compliance
                </h1>

                <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="chip"><i className="bi bi-clipboard2-check"></i> State Excise Portal Filing</span>
                    <span className="chip"><i className="bi bi-building"></i> Fire, Police &amp; Municipal NOC</span>
                    <span className="chip"><i className="bi bi-file-earmark-text"></i> Floor Plan &amp; Site Inspection</span>
                </div>

                <ul className="list-unstyled bullet-points mt-3 fs-5">
                    <li><i className="bi bi-check2-circle tick"></i>Guidance on license category (on-premise/off-premise,
                        FL/CL/Beer/Wine).</li>
                    <li><i className="bi bi-check2-circle tick"></i>End-to-end support: eligibility, documents, fees &amp;
                        inspection readiness.</li>
                    <li><i className="bi bi-check2-circle tick"></i>Assistance with trade license, FSSAI (if serving food) &amp;
                        signage permits.</li>
                </ul>

                <div className="mt-4">
                    <h4 className="h5 fw-bold">Documents Required (Indicative)</h4>
                    <ul className="mt-2">
                        <li>Owner KYC (PAN, Aadhaar) &amp; entity proof (GST/PAN/CIN/Partnership/LLP)</li>
                        <li>Premises proof (sale deed/rent agreement) &amp; recent electricity bill</li>
                        <li>Municipal trade license application/registration</li>
                        <li>Fire NOC request, Police verification, local body NOC</li>
                        <li>Site plan/floor layout, photographs, seating capacity details</li>
                        <li>FSSAI (if applicable), parking &amp; neighborhood consent (if required by state)</li>
                    </ul>
                </div>

                <div className="mt-3">
                    <h4 className="h5 fw-bold">Process</h4>
                    <ol className="mt-2">
                        <li>Feasibility check &amp; category selection</li>
                        <li>Document preparation &amp; state portal filing</li>
                        <li>Inspections &amp; NOC coordination</li>
                        <li>Fee payment &amp; license issuance follow-ups</li>
                    </ol>
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="apply-card">
                    <h5 className="mb-3">Apply for Liquor License</h5>

                    
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST" enctype="multipart/form-data">
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Lead – Liquor License Registration" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting AvanceePro about Liquor License Registration. Our team will reach out shortly." />
                        <input type="hidden" name="Service" value="Liquor License Registration" />
                        <input type="hidden" name="Source" value="Liquor License Registration Page" />
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

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">State</label>
                                <select className="form-select" name="State" required="">
                                    <option value="" selected="" disabled="">Select state</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Telangana</option>
                                    <option>Karnataka</option>
                                    <option>Tamil Nadu</option>
                                    <option>Kerala</option>
                                    <option>Maharashtra</option>
                                    <option>Delhi</option>
                                    <option>Haryana</option>
                                    <option>Punjab</option>
                                    <option>Gujarat</option>
                                    <option>Rajasthan</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Uttar Pradesh</option>
                                    <option>West Bengal</option>
                                    <option>Odisha</option>
                                    <option>Bihar</option>
                                    <option>Jharkhand</option>
                                    <option>Chhattisgarh</option>
                                    <option>Assam</option>
                                    <option>Goa</option>
                                    <option>Uttarakhand</option>
                                    <option>Himachal Pradesh</option>
                                    <option>J&amp;K</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">City / District</label>
                                <input type="text" className="form-control" name="City/District" placeholder="e.g. Hyderabad / Rangareddy" required="" />
                            </div>
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Business Type</label>
                                <select className="form-select" name="Business Type" required="">
                                    <option value="" selected="" disabled="">Select</option>
                                    <option>Restaurant</option>
                                    <option>Bar</option>
                                    <option>Club</option>
                                    <option>Hotel</option>
                                    <option>Retail Wine Shop</option>
                                    <option>Microbrewery</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">License Category</label>
                                <select className="form-select" name="License Category" required="">
                                    <option value="" selected="" disabled="">Select</option>
                                    <option>On-Premise (Bar/Club/Restaurant)</option>
                                    <option>Off-Premise (Retail/Takeaway)</option>
                                    <option>Beer/Wine Only</option>
                                    <option>Temporary/Event Permit</option>
                                    <option>Other / Not Sure</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Proposed Trade Name</label>
                            <input type="text" className="form-control" name="Trade Name" placeholder="e.g. The Oak Lounge" required="" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Premises Address</label>
                            <input type="text" className="form-control" name="Premises Address" placeholder="Full address with pincode" required="" />
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Carpet Area (sq.ft.)</label>
                                <input type="number" className="form-control" name="Carpet Area" min="100" placeholder="e.g. 1800" required="" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Seating Capacity</label>
                                <input type="number" className="form-control" name="Seating Capacity" min="0" placeholder="e.g. 80" />
                            </div>
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Entity PAN</label>
                                <input type="text" className="form-control" name="PAN" placeholder="ABCDE1234F" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" style={{ textTransform: 'uppercase' }} required="" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">GSTIN (if any)</label>
                                <input type="text" className="form-control" name="GSTIN" placeholder="22ABCDE1234F1Z5" pattern="[0-9A-Z]{15}" style={{ textTransform: 'uppercase' }} />
                            </div>
                        </div>

                        <div className="row g-2 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Target Opening Date</label>
                                <input type="date" className="form-control" name="Target Opening Date" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Existing Liquor License?</label>
                                <select className="form-select" name="Existing License">
                                    <option>No</option>
                                    <option>Yes (renewal/transfer)</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Upload Documents (ZIP/PDF/Images)</label>
                            <input type="file" className="form-control" name="Attachments" accept=".pdf,.jpg,.jpeg,.png,.zip,.rar" multiple="" />
                            <small className="text-muted">
                                Suggested: KYC, premises ownership/rent deed, electricity bill, site/floor plan,
                                photographs,
                                NOC drafts, company proofs.
                            </small>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Notes / Specific Requests</label>
                            <textarea className="form-control" name="Notes" rows="3" placeholder="Any nearby schools/temples, parking, music/live performance, terrace use, etc."></textarea>
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

                        <button type="submit" className="apply-btn w-100">Start My Application</button>
                    </form>

                    <div className="small text-muted mt-3">
                        <i className="bi bi-info-circle me-1"></i>
                        Note: Requirements &amp; fees vary by State Excise rules and local bodies (municipality, police,
                        fire).
                    </div>
                </div>
            </div>
        </div>
    </main>

    
    
</div>
    </Layout>
  );
};

export default LiquorLicense;
