import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const COUNTRIES = [
  {
    name: 'India',
    path: '/india',
    flag: 'https://flagcdn.com/w320/in.png',
    description: 'Registrations, GST, compliance, and advisory tailored for Indian businesses.'
  },
  {
    name: 'Australia',
    path: '/australia',
    flag: 'https://flagcdn.com/w320/au.png',
    description: 'Accounting, payroll, and tax support aligned with Australian regulations.'
  },
  {
    name: 'USA',
    path: '/usa',
    flag: 'https://flagcdn.com/w320/us.png',
    description: 'US-focused bookkeeping, tax workflows, and financial reporting solutions.'
  }
];

const SOLUTIONS = [
  {
    icon: 'bi bi-journal-bookmark-fill',
    title: 'Accounting Services',
    points: [
      'Monthly bookkeeping',
      'Financial statement preparation',
      'Accounts payable and receivable',
      'Bank reconciliations'
    ]
  },
  {
    icon: 'bi bi-calculator-fill',
    title: 'Taxation Services',
    points: [
      'Income tax preparation',
      'GST filing and compliance',
      'Tax planning and strategy',
      'International tax services'
    ]
  },
  {
    icon: 'bi bi-briefcase-fill',
    title: 'Business Consulting',
    points: [
      'Financial analysis',
      'Business process optimization',
      'Compliance advisory',
      'Strategic planning'
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      <section className="section global-services-page pt-4">
        <div className="container">
          <div className="global-services-header">
            <h1>Our Global Services</h1>
            <p>Professional financial solutions for businesses worldwide</p>
          </div>

          <div className="global-country-section">
            <h2>Country-Specific Services</h2>
            <p>Select a country to explore our specialized services</p>

            <div className="row g-4 mt-1">
              {COUNTRIES.map((country) => (
                <div className="col-md-6 col-xl-4" key={country.name}>
                  <Link to={country.path} className="global-country-card">
                    <img src={country.flag} alt={`${country.name} flag`} loading="lazy" />
                    <div className="global-country-card-body">
                      <h3>{country.name}</h3>
                      <p>{country.description}</p>
                    </div>
                    <span className="global-country-arrow">
                      Explore <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="global-services-cta text-center mt-5">
            <h3>Comprehensive Financial Solutions</h3>
            <p>We provide end-to-end services tailored to your business needs.</p>
            <a
              href="https://wa.me/919164453153?text=Hello%20AvanceePro%2C%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-whatsapp"></i> Contact Us Today
            </a>
          </div>

          <div className="row g-4 mt-3">
            {SOLUTIONS.map((solution) => (
              <div className="col-lg-4" key={solution.title}>
                <article className="global-solution-card h-100">
                  <div className="global-solution-icon">
                    <i className={solution.icon}></i>
                  </div>
                  <h4>{solution.title}</h4>
                  <ul>
                    {solution.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
