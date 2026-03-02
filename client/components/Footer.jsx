import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h5>AvanceePro</h5>
                        <p className="mt-3">Providing end-to-end Accounting, Taxation, and Business Services for companies of all sizes.</p>
                        <div className="mt-4">
                            <a href="https://www.linkedin.com/in/avancee-pro-51001bbb/" className="text-white me-3"><i className="fab fa-linkedin-in fs-5"></i></a>
                            <a href="https://wa.me/919164453153" target="_blank" rel="noreferrer" className="text-white me-3">
                                <i className="bi bi-whatsapp fs-5"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-4 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                        <h5>Services</h5>
                        <ul>
                            <li><Link to="/accounting-bookkeeping">Accounting & Bookkeeping</Link></li>
                            <li><Link to="/Taxreturn">Tax Return & Compliance</Link></li>
                            <li><Link to="/tds">TDS/Withholding Tax</Link></li>
                            <li><Link to="/appeals">Appeals & Assessments</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <h5>Contact</h5>
                        <ul className="footer-contact">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>No: 384, 2nd Floor, 15th Cross, 5th Main Rd, 6th Sector, HSR Layout, Bangalore - 560102, India</span>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <span>8035171029, +91 9164456153</span>
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@avanceepro.com" target="_blank" rel="noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                    info@avanceepro.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2026 AvanceePro Business Services Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
