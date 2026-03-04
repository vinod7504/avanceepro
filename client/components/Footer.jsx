import React from 'react';
import { Link } from 'react-router-dom';

const FOOTER_LOGO_URL =
  'https://lh3.googleusercontent.com/proxy/MmGB62IcN8nj21vkkrOK-nDYosNtZTL4h7pHAjU-seJxPRZR4yF5jEBaLIgxs_K6DQrri3jhjf1KEuTRbvCimATH4Cj-ErebeVnIC_x_nhafGlJbEkMUnBTubqdSqFk7lQFXLhV0Zeo';

const Footer = () => {
  return (
    <footer className="footer footer-modern">
      <div className="container">
        <div className="footer-brand-row">
          <Link to="/" className="footer-brand-link" aria-label="AvanceePro home">
            <img src={FOOTER_LOGO_URL} alt="AvanceePro logo" className="footer-brand-logo" />
          </Link>
          <p>Providing end-to-end Accounting, Taxation, and Business Services for companies of all sizes.</p>
        </div>

        <div className="row g-4 footer-modern-grid">
          <div className="col-lg col-md-6">
            <h5>Contact</h5>
            <ul className="footer-modern-list footer-contact-modern">
              <li>
                <span className="footer-badge-icon"><i className="bi bi-telephone-fill"></i></span>
                <div className="footer-contact-content">
                  <a className="footer-contact-link" href="tel:+918079665489">080 79665489</a>
                  <a className="footer-contact-link" href="tel:+919164456153">+91 9164456153</a>
                </div>
              </li>
              <li>
                <span className="footer-badge-icon"><i className="bi bi-geo-alt-fill"></i></span>
                <address className="footer-contact-address">
                  No: 384, 2nd Floor, 15th Cross, 5th Main Rd,
                  <br />
                  6th Sector, HSR Layout, Bangalore - 560102
                </address>
              </li>
              <li>
                <span className="footer-badge-icon"><i className="bi bi-envelope-fill"></i></span>
                <a className="footer-contact-link" href="mailto:info@avanceepro.com">info@avanceepro.com</a>
              </li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Navigate</h5>
            <ul className="footer-modern-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Solution</h5>
            <ul className="footer-modern-list">
              <li><Link to="/accounting-bookkeeping">Accounting &amp; Bookkeeping</Link></li>
              <li><Link to="/Taxreturn">Tax Return &amp; Compliance</Link></li>
              <li><Link to="/tds">TDS/Withholding Tax</Link></li>
              <li><Link to="/appeals">Appeals &amp; Assessments</Link></li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Discover</h5>
            <ul className="footer-modern-list">
              <li><Link to="/private-limited">Company Registration</Link></li>
              <li><Link to="/gst-registration">GST Registration</Link></li>
              <li><Link to="/annual-compliance">Annual Compliance</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Follow Us</h5>
            <ul className="footer-modern-list">
              <li>
                <a href="https://www.linkedin.com/in/avancee-pro-51001bbb/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://wa.me/919164453153" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@avanceepro.com">Email</a>
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
