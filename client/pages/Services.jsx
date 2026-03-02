import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Services = () => {
  return (
    <Layout>
      <div>
<div className="hero">
        <div className="container pt-5">
            <h1 className="display-4 fw-bold">Our Global Services</h1>
            <p className="lead">Professional financial solutions for businesses worldwide</p>
        </div>
    </div>

    
    <div className="container">
        <div className="service-container">
            <div className="text-center mb-5">
                <h2>Country-Specific Services</h2>
                <p className="lead">Select a country to explore our specialized services</p>
            </div>
            
            <div className="flags-section">
                <div className="flags-container">
                    <div className="flag-card" onclick="location.href='india.html'">
                        <img src="data:image/png;base64,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" width="200px" />
                        <h3 className="flag-title">India</h3>
                    </div>
                    
                    <div className="flag-card" onclick="location.href='australia.html'">
                        <img src="data:image/png;base64,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
" width="200px" height="130px" />

                        <h3 className="flag-title">Australia</h3>
                    </div>
                    
                    <div className="flag-card" onclick="location.href='usa.html'">
                        <img src="data:image/png;base64,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" width="200px" />
                        <h3 className="flag-title ">USA</h3>
                        
                    </div>
                </div>
            </div>
            
            
            
            <div className="text-center mt-5">
                <h3>Comprehensive Financial Solutions</h3>
                <p className="lead">We provide end-to-end services tailored to your business needs</p>
                <a href="https://wa.me/919164453153" target="_blank"><button className="btn-contact">
                            <i className="bi bi-whatsapp fs-5"></i> Contact us Today
                        </button></a>
            </div>
        </div>
        
        <div className="row mt-4">
            <div className="col-lg-4 mb-4">
                <div className="service-card">
                    <i className="fas fa-book service-icon"></i>
                    <h3>Accounting Services</h3>
                    <p>Comprehensive bookkeeping and financial reporting for businesses of all sizes.</p>
                    <ul className="text-start">
                        <li>Monthly bookkeeping</li>
                        <li>Financial statement preparation</li>
                        <li>Accounts payable/receivable</li>
                        <li>Bank reconciliations</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="service-card">
                    <i className="fas fa-calculator service-icon"></i>
                    <h3>Taxation Services</h3>
                    <p>Expert tax preparation and compliance services for individuals and businesses.</p>
                    <ul className="text-start">
                        <li>Income tax preparation</li>
                        <li>GST filing and compliance</li>
                        <li>Tax planning and strategy</li>
                        <li>International tax services</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="service-card">
                    <i className="fas fa-handshake service-icon"></i>
                    <h3>Business Consulting</h3>
                    <p>Strategic guidance to help your business grow and thrive in competitive markets.</p>
                    <ul className="text-start">
                        <li>Financial analysis</li>
                        <li>Business process optimization</li>
                        <li>Compliance advisory</li>
                        <li>Strategic planning</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    
    
</div>
    </Layout>
  );
};

export default Services;
