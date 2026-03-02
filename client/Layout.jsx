import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const root = document.querySelector('.site-main');
        if (!root) {
            return undefined;
        }

        const targets = Array.from(
            root.querySelectorAll(
                'h1, h2, h3, h4, h5, h6, p, li, .btn, .card-link, .service-package-link, .our-service-link, .card, .service-package-card, .our-service-card, .tool-logo-card, .leadership-card, .why-choose-item'
            )
        );

        if (!targets.length) {
            return undefined;
        }

        const sectionCounter = new Map();
        targets.forEach((node, index) => {
            const block = node.closest('header, section, .service-detail, .page-header, .team-section') || root;
            const currentCount = sectionCounter.get(block) || 0;
            sectionCounter.set(block, currentCount + 1);

            node.classList.remove('text-fx-init', 'text-fx-in');
            node.dataset.textFxBound = 'true';

            const baseDelay = Math.min(currentCount * 65, 520);
            const waveDelay = (index % 6) * 22;
            node.style.setProperty('--text-fx-delay', `${baseDelay + waveDelay}ms`);
            node.classList.add('text-fx-init');
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('text-fx-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -7% 0px'
            }
        );

        targets.forEach((node) => observer.observe(node));

        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <>
            <div className="site-bg site-bg-gradient" aria-hidden="true"></div>
            <div className="site-bg site-bg-pattern" aria-hidden="true"></div>
            <div className="site-bg site-bg-orbs" aria-hidden="true"></div>
            <Navbar />
            <main className="site-main">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
