import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        // Re-initialize Bootstrap dropdowns on navigation if needed
        const dropdowns = document.querySelectorAll('.nav-item.dropdown');
        dropdowns.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                if (window.innerWidth >= 992) {
                    const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
                    if (toggle && !toggle.classList.contains('show')) {
                        // @ts-ignore
                        const dropdown = window.bootstrap?.Dropdown.getOrCreateInstance(toggle);
                        dropdown?.show();
                    }
                }
            });
            item.addEventListener('mouseleave', function () {
                if (window.innerWidth >= 992) {
                    const toggle = this.querySelector('[data-bs-toggle="dropdown"]');
                    if (toggle && toggle.classList.contains('show')) {
                        // @ts-ignore
                        const dropdown = window.bootstrap?.Dropdown.getOrCreateInstance(toggle);
                        dropdown?.hide();
                    }
                }
            });
        });
    }, [location.pathname]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <img
                            src="https://lh3.googleusercontent.com/proxy/MmGB62IcN8nj21vkkrOK-nDYosNtZTL4h7pHAjU-seJxPRZR4yF5jEBaLIgxs_K6DQrri3jhjf1KEuTRbvCimATH4Cj-ErebeVnIC_x_nhafGlJbEkMUnBTubqdSqFk7lQFXLhV0Zeo"
                            alt="AvanceePro"
                            style={{ height: '38px' }}
                        />
                        <span className="d-none d-sm-inline"></span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                        aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                            <li className="nav-item me-lg-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info d-flex align-items-center">
                                        Consult an Expert
                                    </button>
                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Talk to Consultant</a></li>
                                        <li><a className="dropdown-item" href="#">Talk to Chartered Accountant</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item ms-lg-2">
                                <button type="button" className="btn btn-outline-light" data-bs-toggle="offcanvas"
                                    data-bs-target="#loginSlider">
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="loginSlider" aria-labelledby="loginSliderLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="loginSliderLabel">Login or Create an Account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form action="https://formsubmit.co/services@avanceepro.in" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I’ll get back to you soon." />

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="Enter email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input name="phone" type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
                        </div>

                        <button type="submit" className="btn btn-warning w-100" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Navbar;
