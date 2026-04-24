import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const AVANCEEPRO_SYMBOL_URL =
  'http://www.avanceepro.com/wp-content/uploads/2018/12/cropped-cropped-logo-768x249.png';

const Contact = () => {
  return (
    <Layout>
      <div>
        <section className="section contact-banner-wrap pb-4">
          <div className="container">
            <div className="contact-hero-banner">
              <div className="contact-hero-content">
                <h1>Contact Us for Business Assistance</h1>
                <p>
                  Experienced professionals ready to support your taxation, accounting,
                  and compliance needs.
                </p>
                <div className="contact-hero-actions">
                  <Link to="/services" className="contact-pill-btn">Our Areas of Service</Link>
                  <a href="#contactFormPanel" className="contact-inline-link">
                    Get in touch <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="contact-hero-media" aria-hidden="true">
                <img
                  src={AVANCEEPRO_SYMBOL_URL}
                  alt="Avanceepro logo"
                  className="contact-hero-logo"
                />
                <img
                  src={AVANCEEPRO_SYMBOL_URL}
                  alt="Avanceepro symbol"
                  className="contact-hero-symbol-mobile"
                />
                <span className="contact-hero-brand-mobile">Avanceepro</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-2 contact-main-section">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="contact-info-panel h-100">
                  <h2>Registered Office</h2>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><i className="bi bi-geo-alt-fill"></i></span>
                    <p>
                      AvanceePro Business Services Private Limited,<br />
                      No: 384 Second Floor, 15th Cross, 5th Main Rd,<br />
                      6th Sector, HSR Layout, Bangalore-560102
                    </p>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><i className="bi bi-telephone-fill"></i></span>
                    <p>080 79665489<br />+91 9164456153</p>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><i className="bi bi-envelope-fill"></i></span>
                    <p>
                      <a href="mailto:info@avanceepro.com">info@avanceepro.com</a>
                    </p>
                  </div>
                  <div className="contact-hours">
                    <h3>Business Hours</h3>
                    <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday, Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div id="contactFormPanel" className="contact-form-panel h-100">
                  <h2>Send us a Message</h2>
                  <p>Share your requirement and our team will contact you quickly.</p>

                  <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                    <input type="hidden" name="_source" value="Contact Page" />
                    <input type="hidden" name="_subject" value="New Contact Message" />

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="contactName" className="form-label">Name *</label>
                        <input
                          type="text"
                          id="contactName"
                          name="Name"
                          className="form-control"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contactEmail" className="form-label">Email *</label>
                        <input
                          type="email"
                          id="contactEmail"
                          name="Email"
                          className="form-control"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contactPhone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="contactPhone"
                          name="Phone Number"
                          className="form-control"
                          placeholder="10 digit mobile"
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contactSubject" className="form-label">Subject</label>
                        <input
                          type="text"
                          id="contactSubject"
                          name="Subject"
                          className="form-control"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="contactMessage" className="form-label">Message *</label>
                        <textarea
                          id="contactMessage"
                          name="Message"
                          className="form-control"
                          rows="5"
                          placeholder="Write your query here..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Send Message</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="contact-map contact-map-card mt-4">
              <iframe
                title="AvanceePro Location"
                src="https://www.google.com/maps?q=No%20384,%2015th%20Cross,%205th%20Main%20Rd,%206th%20Sector,%20HSR%20Layout,%20Bangalore%20560102&output=embed"
                width="100%"
                height="420"
                className="contact-map-frame"
                style={{ border: '0' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
