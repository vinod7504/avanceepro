import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const FORM_SELECTOR = 'form[action*="formsubmit.co/services@avanceepro.in"]';
const BRAND_SYMBOL_URL =
    'https://www.avanceepro.com/wp-content/uploads/2018/12/cropped-cropped-logo-768x249.png';
const ADVICE_SESSION_KEY = 'avp_advice_shown';

const buildApiUrl = (path) => {
    const base = String(import.meta.env.VITE_API_BASE || '').trim();

    if (!base) {
        return path;
    }

    return `${base.replace(/\/+$/, '')}${path}`;
};

const FORM_API_URL = buildApiUrl('/api/forms/submit');

const setFormFeedback = (form, type, message) => {
    let feedback = form.querySelector('.form-server-feedback');

    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'form-server-feedback';
        form.prepend(feedback);
    }

    feedback.classList.remove('is-info', 'is-success', 'is-error');
    feedback.classList.add(`is-${type}`);
    feedback.textContent = message;
};

const toggleFormButtons = (form, disabled) => {
    const submitControls = form.querySelectorAll('button[type="submit"], input[type="submit"]');

    submitControls.forEach((node) => {
        if (disabled) {
            node.dataset.originalLabel = node.tagName === 'INPUT' ? node.value : node.textContent;
            if (node.tagName === 'INPUT') {
                node.value = 'Sending...';
            } else {
                node.textContent = 'Sending...';
            }
        } else if (node.dataset.originalLabel) {
            if (node.tagName === 'INPUT') {
                node.value = node.dataset.originalLabel;
            } else {
                node.textContent = node.dataset.originalLabel;
            }
            delete node.dataset.originalLabel;
        }

        node.disabled = disabled;
    });
};

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const [showAdviceModal, setShowAdviceModal] = useState(false);
    const [adviceStatus, setAdviceStatus] = useState('idle');
    const [adviceMessage, setAdviceMessage] = useState('');
    const [showChatWidget, setShowChatWidget] = useState(false);
    const [chatStatus, setChatStatus] = useState('idle');
    const [chatMessage, setChatMessage] = useState('');
    const [chatFields, setChatFields] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [showPageLoader, setShowPageLoader] = useState(() => {
        if (typeof document === 'undefined') {
            return true;
        }

        if (document.readyState !== 'complete') {
            return true;
        }

        return Boolean(document.fonts && document.fonts.status !== 'loaded');
    });
    const timeoutRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        const hideLoaderWhenReady = async () => {
            if (document.readyState !== 'complete') {
                await new Promise((resolve) => {
                    window.addEventListener('load', resolve, { once: true });
                });
            }

            if (document.fonts && typeof document.fonts.ready?.then === 'function') {
                try {
                    await document.fonts.ready;
                } catch (_error) {
                    // Font readiness should not block rendering on failure.
                }
            }

            if (!cancelled) {
                setShowPageLoader(false);
            }
        };

        hideLoaderWhenReady();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        try {
            const hasShown = window.sessionStorage.getItem(ADVICE_SESSION_KEY) === '1';

            if (!hasShown) {
                setShowAdviceModal(true);
                window.sessionStorage.setItem(ADVICE_SESSION_KEY, '1');
            }
        } catch (_error) {
            if (!window.__AVP_ADVICE_OPENED__) {
                setShowAdviceModal(true);
                window.__AVP_ADVICE_OPENED__ = true;
            }
        }
    }, []);

    useEffect(() => {
        if (showAdviceModal) {
            document.body.classList.add('advice-modal-open');
        } else {
            document.body.classList.remove('advice-modal-open');
        }

        return () => {
            document.body.classList.remove('advice-modal-open');
        };
    }, [showAdviceModal]);

    useEffect(() => {
        const handleFormSubmit = async (event) => {
            const form = event.target;

            if (!(form instanceof HTMLFormElement)) {
                return;
            }

            if (!form.matches(FORM_SELECTOR)) {
                return;
            }

            event.preventDefault();

            if (form.dataset.isSubmitting === '1') {
                return;
            }

            form.dataset.isSubmitting = '1';
            toggleFormButtons(form, true);
            setFormFeedback(form, 'info', 'Sending your request...');

            try {
                const payload = new FormData(form);
                if (!payload.get('_source')) {
                    payload.append('_source', 'Website Form');
                }
                payload.set('_page', window.location.pathname);

                const response = await fetch(FORM_API_URL, {
                    method: 'POST',
                    body: payload
                });
                const result = await response.json().catch(() => ({}));

                if (!response.ok || !result.ok) {
                    throw new Error(result.message || 'Unable to submit form right now.');
                }

                setFormFeedback(form, 'success', result.message || 'Thanks, we will contact you within 24 hours.');
                form.reset();
            } catch (error) {
                setFormFeedback(
                    form,
                    'error',
                    error.message || 'Unable to submit form right now. Please try again.'
                );
            } finally {
                form.dataset.isSubmitting = '0';
                toggleFormButtons(form, false);
            }
        };

        document.addEventListener('submit', handleFormSubmit, true);

        return () => {
            document.removeEventListener('submit', handleFormSubmit, true);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const closeAdviceModal = () => {
        setShowAdviceModal(false);
        setAdviceStatus('idle');
        setAdviceMessage('');
    };

    const toggleChatWidget = () => {
        setShowChatWidget((prev) => !prev);
        setChatStatus('idle');
        setChatMessage('');
    };

    const closeChatWidget = () => {
        setShowChatWidget(false);
        setChatStatus('idle');
        setChatMessage('');
    };

    const handleChatFieldChange = (event) => {
        const { name, value } = event.target;
        setChatFields((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdviceSubmit = async (event) => {
        event.preventDefault();

        if (adviceStatus === 'submitting') {
            return;
        }

        const form = event.currentTarget;
        const payload = new FormData(form);
        payload.append('_source', 'Get Advice Popup');
        payload.append('_subject', 'New Get Advice Request');
        payload.append('_page', window.location.pathname);

        setAdviceStatus('submitting');
        setAdviceMessage('Sending your request...');

        try {
            const response = await fetch(FORM_API_URL, {
                method: 'POST',
                body: payload
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok || !result.ok) {
                throw new Error(result.message || 'Unable to send request right now.');
            }

            setAdviceStatus('success');
            setAdviceMessage('Thanks, we will contact you within 24 hours.');

            timeoutRef.current = setTimeout(() => {
                setShowAdviceModal(false);
                navigate('/');
            }, 2000);
        } catch (error) {
            setAdviceStatus('error');
            setAdviceMessage(error.message || 'Unable to send request right now. Please try again.');
        }
    };

    const handleChatSubmit = async (event) => {
        event.preventDefault();

        if (chatStatus === 'submitting') {
            return;
        }

        const payload = new FormData();
        payload.append('Name', chatFields.name.trim());
        payload.append('Phone Number', chatFields.phone.trim());
        payload.append('Email', chatFields.email.trim());
        payload.append('Message', chatFields.message.trim());
        payload.append('_source', 'Floating Chat Widget');
        payload.append('_subject', 'New Chat Enquiry');
        payload.append('_page', window.location.pathname);

        setChatStatus('submitting');
        setChatMessage('Sending your message...');

        try {
            const response = await fetch(FORM_API_URL, {
                method: 'POST',
                body: payload
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok || !result.ok) {
                throw new Error(result.message || 'Unable to send your message right now.');
            }

            setChatStatus('success');
            setChatMessage(result.message || 'Thanks, we will contact you within 24 hours.');
            setChatFields({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setChatStatus('error');
            setChatMessage(error.message || 'Unable to send your message right now.');
        }
    };

    return (
        <>
            {showPageLoader && (
                <div className="page-loader" role="status" aria-live="polite">
                    <div className="page-loader-card">
                        <div className="page-loader-symbol-wrap">
                            <img src={BRAND_SYMBOL_URL} alt="AvanceePro symbol" className="page-loader-symbol" />
                        </div>
                        <p className="page-loader-brand">Avanceepro</p>
                        <div className="page-loader-track" aria-hidden="true">
                            <span className="page-loader-fill"></span>
                        </div>
                    </div>
                </div>
            )}
            <div className="site-bg site-bg-gradient" aria-hidden="true"></div>
            <div className="site-bg site-bg-glow" aria-hidden="true"></div>
            <div className="site-bg site-bg-grid" aria-hidden="true"></div>
            {showAdviceModal && (
                <div className="advice-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="advice-modal-title">
                    <div className="advice-modal-card">
                        <button
                            type="button"
                            className="advice-close-btn"
                            onClick={closeAdviceModal}
                            aria-label="Close advice form"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                        <h2 id="advice-modal-title">Get an Advice</h2>
                        <p>Share your details and our team will reach you quickly.</p>

                        <form onSubmit={handleAdviceSubmit} className="advice-form">
                            <div className="mb-3">
                                <label htmlFor="adviceName" className="form-label">Name</label>
                                <input
                                    id="adviceName"
                                    name="Name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="advicePhone" className="form-label">Phone Number</label>
                                <input
                                    id="advicePhone"
                                    name="Phone Number"
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adviceEmail" className="form-label">Email</label>
                                <input
                                    id="adviceEmail"
                                    name="Email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adviceMessage" className="form-label">Message (Optional)</label>
                                <textarea
                                    id="adviceMessage"
                                    name="Message"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Tell us what you need"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={adviceStatus === 'submitting' || adviceStatus === 'success'}
                            >
                                {adviceStatus === 'submitting' ? 'Sending...' : 'Submit'}
                            </button>

                            {adviceMessage && (
                                <p className={`advice-form-feedback mt-3 mb-0 ${adviceStatus}`}>
                                    {adviceMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}
            <button
                type="button"
                className={`floating-chat-toggle ${showChatWidget ? 'is-open' : ''}`}
                onClick={toggleChatWidget}
                aria-label="Open chat form"
            >
                <i className="bi bi-chat-dots-fill"></i>
                <span>Chat</span>
            </button>
            {showChatWidget && (
                <aside className="floating-chat-box" role="dialog" aria-labelledby="floating-chat-title">
                    <div className="floating-chat-head">
                        <h2 id="floating-chat-title">Chat With Us</h2>
                        <button type="button" className="floating-chat-close" onClick={closeChatWidget} aria-label="Close chat">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <p className="floating-chat-copy">Share your details and we will email you back quickly.</p>

                    <form onSubmit={handleChatSubmit} className="floating-chat-form">
                        <div className="mb-2">
                            <label htmlFor="chatName" className="form-label">Name</label>
                            <input
                                id="chatName"
                                name="name"
                                type="text"
                                className="form-control"
                                value={chatFields.name}
                                onChange={handleChatFieldChange}
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="chatPhone" className="form-label">Phone Number</label>
                            <input
                                id="chatPhone"
                                name="phone"
                                type="tel"
                                className="form-control"
                                value={chatFields.phone}
                                onChange={handleChatFieldChange}
                                placeholder="10 digit phone"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="chatEmail" className="form-label">Email</label>
                            <input
                                id="chatEmail"
                                name="email"
                                type="email"
                                className="form-control"
                                value={chatFields.email}
                                onChange={handleChatFieldChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="chatMessage" className="form-label">Message</label>
                            <textarea
                                id="chatMessage"
                                name="message"
                                className="form-control"
                                rows="3"
                                value={chatFields.message}
                                onChange={handleChatFieldChange}
                                placeholder="Type your requirement"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={chatStatus === 'submitting'}
                        >
                            {chatStatus === 'submitting' ? 'Sending...' : 'Submit'}
                        </button>

                        {chatMessage && (
                            <p className={`floating-chat-feedback ${chatStatus}`}>{chatMessage}</p>
                        )}
                    </form>
                </aside>
            )}
            <Navbar />
            <main className="site-main">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
