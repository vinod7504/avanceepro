import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Contact = () => {
  return (
    <Layout>
      <div>
<header className="page-header">
        <div className="container pt-2">
            <h1>Contact Us</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </header>

    
    <section className="section">
        <div className="container">
            <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Get in touch and we'll get back to you as soon as we can. We look forward to hearing from you!</p>
            </div>

            
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.392049806048!2d77.646314174985!3d12.94972538736231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144a1a35f6e3%3A0x7e36b7f7e6e6b7f7!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689684567890!5m2!1sen!2sin" width="1000" height="1000" style={{ border: '0' }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="contact-info">
                        <h3>Registered Office</h3>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h5>Address</h5>
                                    <p>AvanceePro Business Services Private Limited,<br />
                                        No: 384 Second Floor<br />
                                        15th Cross, 5th Main Rd,<br />
                                        6th Sector, HSR Layout,<br />
                                        Bangalore-560 102</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h5>Phone</h5>
                                    <p>080 79665489<br />+91 9164456153</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <h5>Email</h5>
                                    <p>info@avanceepro.com</p>
                                </div>
                            </div>
                        </div>

                        <h4><div className="text-warning bold ">Business Hours</div></h4>
                        <p>Monday to Friday: 9:00 AM – 6:00 PM<br />
                            Saturday, Sunday: Closed</p>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="contact-form">
                        <h3 className="mb-4">Send us a Message</h3>
                        <p className="mb-4">Fields marked with an * are required</p>

                        <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label required">Name</label>
                                        <input type="text" id="name" className="form-control" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label required">Email</label>
                                        <input type="email" id="email" className="form-control" required="" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" id="subject" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label required">Message</label>
                                <textarea id="message" className="form-control" rows="5" required=""></textarea>
                            </div>

                            <div className="captcha-group">
                                <div className="form-group">
                                    <label htmlFor="captcha" className="form-label required">What is thirteen minus 6?</label>
                                    <input type="text" id="captcha" className="form-control" required="" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    
</div>
    </Layout>
  );
};

export default Contact;
