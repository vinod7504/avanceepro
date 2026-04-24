import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const FOOTER_LOGO_URL =
  'http://www.avanceepro.com/wp-content/uploads/2018/12/cropped-cropped-logo-768x249.png';

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="footer footer-modern">
      <div className="container">
        <motion.div
          className="footer-brand-row"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link to="/" className="footer-brand-link" aria-label="AvanceePro home">
            <img src={FOOTER_LOGO_URL} alt="AvanceePro logo" className="footer-brand-logo" />
            <span>AvanceePro</span>
          </Link>
          <p>
            Premium accounting, taxation, and compliance support for growth-focused businesses in
            India and global markets.
          </p>
          <a
            href="https://wa.me/919164453153?text=Hello%20AvanceePro%2C%20I%20need%20assistance%20with%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="footer-cta-btn"
          >
            Book Consultation
          </a>
        </motion.div>

        <div className="row g-4 footer-modern-grid">
          <div className="col-lg col-md-6">
            <h5>Contact</h5>
            <ul className="footer-modern-list footer-contact-modern">
              <li>
                <span className="footer-badge-icon">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <div className="footer-contact-content">
                  <a className="footer-contact-link" href="tel:+918079665489">
                    080 79665489
                  </a>
                  <a className="footer-contact-link" href="tel:+919164456153">
                    +91 9164456153
                  </a>
                </div>
              </li>
              <li>
                <span className="footer-badge-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <address className="footer-contact-address">
                  No: 384, 2nd Floor, 15th Cross, 5th Main Rd,
                  <br />
                  6th Sector, HSR Layout, Bangalore - 560102
                </address>
              </li>
              <li>
                <span className="footer-badge-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <a className="footer-contact-link" href="mailto:info@avanceepro.com">
                  info@avanceepro.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Navigate</h5>
            <ul className="footer-modern-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Solutions</h5>
            <ul className="footer-modern-list">
              <li>
                <Link to="/accounting-bookkeeping">Accounting &amp; Bookkeeping</Link>
              </li>
              <li>
                <Link to="/Taxreturn">Tax Return &amp; Compliance</Link>
              </li>
              <li>
                <Link to="/tds">TDS/Withholding Tax</Link>
              </li>
              <li>
                <Link to="/appeals">Appeals &amp; Assessments</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg col-md-6">
            <h5>Explore</h5>
            <ul className="footer-modern-list">
              <li>
                <Link to="/private-limited">Company Registration</Link>
              </li>
              <li>
                <Link to="/gst-registration">GST Registration</Link>
              </li>
              <li>
                <Link to="/annual-compliance">Annual Compliance</Link>
              </li>
              <li>
                <Link to="/contact">Get in Touch</Link>
              </li>
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
                <a
                  href="https://wa.me/919164453153?text=Hello%20AvanceePro%2C%20I%20need%20assistance%20with%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                >
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
