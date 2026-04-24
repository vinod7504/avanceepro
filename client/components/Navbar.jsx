import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const NAVBAR_SYMBOL_URL =
  'https://www.avanceepro.com/wp-content/uploads/2018/12/cropped-cropped-logo-768x249.png';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
];

const isActiveRoute = (pathname, route) => {
  if (route === '/') {
    return pathname === '/';
  }

  return pathname === route || pathname.startsWith(`${route}/`);
};

const Navbar = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const navElement = document.querySelector('.site-navbar');
    const collapseElement = document.getElementById('mainNav');

    if (!navElement) {
      return undefined;
    }

    const setNavbarOffset = () => {
      const navHeight = navElement.offsetHeight;
      document.documentElement.style.setProperty('--navbar-offset', `${navHeight}px`);
    };

    setNavbarOffset();

    const onResize = () => {
      setNavbarOffset();
    };

    const onCollapseTransition = () => {
      setNavbarOffset();
      window.setTimeout(setNavbarOffset, 220);
    };

    window.addEventListener('resize', onResize);
    collapseElement?.addEventListener('show.bs.collapse', onCollapseTransition);
    collapseElement?.addEventListener('shown.bs.collapse', onCollapseTransition);
    collapseElement?.addEventListener('hide.bs.collapse', onCollapseTransition);
    collapseElement?.addEventListener('hidden.bs.collapse', onCollapseTransition);

    return () => {
      window.removeEventListener('resize', onResize);
      collapseElement?.removeEventListener('show.bs.collapse', onCollapseTransition);
      collapseElement?.removeEventListener('shown.bs.collapse', onCollapseTransition);
      collapseElement?.removeEventListener('hide.bs.collapse', onCollapseTransition);
      collapseElement?.removeEventListener('hidden.bs.collapse', onCollapseTransition);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top site-navbar">
        <div className="container nav-shell">
          <Link className="navbar-brand nav-brand" to="/" aria-label="AvanceePro home">
            <img src={NAVBAR_SYMBOL_URL} alt="AvanceePro logo" className="navbar-symbol" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse main-nav-panel" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center nav-links-wrap">
              {NAV_ITEMS.map((item) => {
                const active = isActiveRoute(location.pathname, item.to);

                return (
                  <li className="nav-item" key={item.to}>
                    <Link className={`nav-link nav-link-modern ${active ? 'active' : ''}`} to={item.to}>
                      {item.label}
                      {active && (
                        <motion.span
                          className="nav-link-glow"
                          layoutId="nav-active-pill"
                          transition={{ duration: 0.24, ease: 'easeOut' }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item dropdown nav-consult-dropdown">
                <button
                  type="button"
                  className="btn nav-consult-btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consult an Expert
                </button>
                <ul className="dropdown-menu dropdown-menu-end nav-dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://wa.me/919164453153?text=Hello%20AvanceePro%2C%20I%20need%20assistance%20with%20your%20services."
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Consultation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="tel:+919164456153">
                      Talk to Chartered Accountant
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="btn nav-login-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#loginSlider"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="loginSlider" aria-labelledby="loginSliderLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="loginSliderLabel">
            Login or Create an Account
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <motion.form
            action="https://formsubmit.co/services@avanceepro.in"
            method="POST"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting me! I’ll get back to you soon."
            />

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100"
              style={{ color: 'var(--brand-ink)', fontWeight: '700' }}
            >
              Login
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
