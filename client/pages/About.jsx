import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const About = () => {
  return (
    <Layout>
      <div>
<header className="page-header">
        <div className="container pt-2">
            <h1>About Us</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </header>

    
    <section className="section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h2 className="mb-4">Our Journey</h2>
                    <p className="lead">AvanceePro Business Services Pvt Ltd is a leading Business Process Outsourcing Services company based in Bangalore.</p>
                    <p>AvanceePro was started by professionals having rich experience in Accounting and Taxation services for small, medium and large industries and corporate. We are committed to providing comprehensive financial solutions that help businesses thrive in today's competitive landscape.</p>
                    <p>With a team of highly qualified professionals and a client-centric approach, we have established ourselves as a trusted partner for businesses seeking reliable financial services and compliance solutions.</p>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="AvanceePro Team" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Our Professional Team</h5>
                            <p className="card-text">Committed to excellence in financial services since 2010</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section bg-light">
        <div className="container">
            <div className="section-title">
                <h2>Our Core Values</h2>
                <p>Guiding principles that define who we are and how we operate</p>
            </div>
            
            <div className="values-container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="value-card">
                            <div className="value-icon text-center">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="text-center mb-3">Vision</h3>
                            <p className="text-center">To be the most trusted and respected professional services company recognized by our clients for delivering excellence.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="value-card">
                            <div className="value-icon text-center">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="text-center mb-3">Mission</h3>
                            <p className="text-center">To serve our clients by providing the highest quality professional services that address their business issues. We attract, recruit, and retain the most knowledgeable and passionate professionals, and we provide a collaborative culture that enables them to thrive professionally and personally.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-title">
                <h2>Leadership Team</h2>
                <p>Meet the experts guiding AvanceePro to excellence in financial services</p>
            </div>
            
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="team-member">
                        
                        <h4>Prabhakara Rao G</h4>
                        <span className="position">Director</span>
                        <p>Founder with over fifteen years' experience in Core Accounting, Auditing and Taxation Services. He ensures AvanceePro delivers reliability, quality, and value.</p>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="team-member">
                        
                        <h4>Vijaya Lakshmi H V</h4>
                        <span className="position">Co-Director</span>
                        <p>Co-founder with a Commerce degree. She ensures AvanceePro services include reliability, quality, and value for clients.</p>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="team-member">
                        
                        <h4>Datha Prasad</h4>
                        <span className="position">Chartered Accountant</span>
                        <p>Fellow Member of ICAI with ten years of professional experience in auditing, accounting, taxation, and representing clients before statutory authorities.</p>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="team-member">
                        
                        <h4>Sunil R K</h4>
                        <span className="position">Chartered Accountant</span>
                        <p>Fellow member of ICAI with over 10 years of experience in Indian, Australian and US Accounting, Auditing &amp; Taxation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    
</div>
    </Layout>
  );
};

export default About;
