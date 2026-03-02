import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


const Appeals = () => {
  return (
    <Layout>
      <div>
<section className="svc container py-5">
        <div className="title-wrap mb-4">
            <h2 className="mb-1">Appeals &amp; Assessments</h2>
            <p className="lead mb-0">Assistance with tax assessments and representation in income tax appeals.</p>
        </div>

        <div className="row g-4">
            
            <div className="col-lg-7">
                <div className="accordion" id="appealsAccordion">

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-notices" aria-expanded="true" aria-controls="cat-notices" data-visual-title="Pre-assessment &amp; Notices" data-visual-text="Drafting strong responses to 133(6), 142(1), 143(2) and CPC communications." data-visual-img="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-envelope-exclamation"></i></span>
                                Pre-assessment &amp; Notices
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-notices" className="collapse show" data-bs-parent="#appealsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-mailbox2 bullet"></i>
                                    <a href="#!" data-visual-title="143(1) Intimation – Response" data-visual-text="Review adjustments, file online response and seek rectification where needed." data-visual-img="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">143(1)
                                        Intimation – Response</a>
                                </div>
                                <div className="subitem"><i className="bi bi-journal-text bullet"></i>
                                    <a href="#!" data-visual-title="142(1) &amp; 143(2) – Scrutiny" data-visual-text="Collation of evidences, submissions and hearing support for scrutiny." data-visual-img="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">142(1)
                                        / 143(2) – Scrutiny Support</a>
                                </div>
                                <div className="subitem"><i className="bi bi-clipboard2-data bullet"></i>
                                    <a href="#!" data-visual-title="e-Proceedings (Faceless)" data-visual-text="Full support for notices and hearings on the faceless portal." data-visual-img="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Faceless
                                        e-Proceedings</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-assessment" aria-expanded="false" aria-controls="cat-assessment" data-visual-title="Assessments &amp; Re-assessment" data-visual-text="Representation in regular, best-judgment and re-assessment including 148A." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-balance-scale"></i></span>
                                Assessments &amp; Re-assessment
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-assessment" className="collapse" data-bs-parent="#appealsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-check2-square bullet"></i>
                                    <a href="#!" data-visual-title="Scrutiny Assessment – 143(3)" data-visual-text="End-to-end handling of scrutiny with detailed paper-book &amp; case law." data-visual-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">143(3)
                                        Scrutiny Assessment</a>
                                </div>
                                <div className="subitem"><i className="bi bi-exclamation-triangle bullet"></i>
                                    <a href="#!" data-visual-title="Best Judgment – 144" data-visual-text="Mitigate additions and restore opportunity through submissions." data-visual-img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">144
                                        Best-Judgment Assessment</a>
                                </div>
                                <div className="subitem"><i className="bi bi-arrow-repeat bullet"></i>
                                    <a href="#!" data-visual-title="Reassessment – 147 / 148A" data-visual-text="Challenge reasons recorded, reply to 148A(b) and represent u/s 147." data-visual-img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">147
                                        / 148A Re-assessment</a>
                                </div>
                                <div className="subitem"><i className="bi bi-shield-lock bullet"></i>
                                    <a href="#!" data-visual-title="Search / Seizure – 153A/153C" data-visual-text="Block assessment handling post search/survey with strategy." data-visual-img="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">153A
                                        / 153C (Search &amp; Survey)</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-appeals" aria-expanded="false" aria-controls="cat-appeals" data-visual-title="Appeals – JCIT(A), CIT(A), ITAT" data-visual-text="Drafting statements of facts/grounds, filing Form 35/36 and arguing appeals." data-visual-img="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-court"></i></span>
                                Appeals – Representation
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-appeals" className="collapse" data-bs-parent="#appealsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-journal-plus bullet"></i>
                                    <a href="#!" data-visual-title="Form 35 – Appeal to CIT(A) / JCIT(A)" data-visual-text="Prepare grounds, compile paper-book and e-file Form 35." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">CIT(A)
                                        / JCIT(A) Appeals</a>
                                </div>
                                <div className="subitem"><i className="bi bi-journal-richtext bullet"></i>
                                    <a href="#!" data-visual-title="Form 36 – Appeal to ITAT" data-visual-text="Draft pleadings, case-law notes and represent before the Tribunal." data-visual-img="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">ITAT
                                        Appeals</a>
                                </div>
                                <div className="subitem"><i className="bi bi-hammer bullet"></i>
                                    <a href="#!" data-visual-title="Stay of Demand – 220(6)" data-visual-text="Stay/instalment applications pending appeal; hearing representation." data-visual-img="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Stay
                                        / Instalment of Demand</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-remedies" aria-expanded="false" aria-controls="cat-remedies" data-visual-title="Post-assessment Remedies" data-visual-text="Rectification 154, Revision 264/263, refunds &amp; grievance redressal." data-visual-img="https://images.unsplash.com/photo-1581091014534-8987c1d2d7d5?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-tools"></i></span>
                                Post-assessment &amp; Remedies
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-remedies" className="collapse" data-bs-parent="#appealsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-pen bullet"></i>
                                    <a href="#!" data-visual-title="Rectification – Section 154" data-visual-text="Correct mistakes apparent from record and secure quick relief." data-visual-img="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Rectification
                                        u/s 154</a>
                                </div>
                                <div className="subitem"><i className="bi bi-arrow-repeat bullet"></i>
                                    <a href="#!" data-visual-title="Revision – 264 / 263" data-visual-text="Favorable revision u/s 264 and defence in 263 revisionary proceedings." data-visual-img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Revision
                                        u/s 264 / 263</a>
                                </div>
                                <div className="subitem"><i className="bi bi-cash-coin bullet"></i>
                                    <a href="#!" data-visual-title="Refunds &amp; 245 Adjustments" data-visual-text="Follow-up for pending refunds and challenge incorrect set-offs." data-visual-img="https://images.unsplash.com/photo-1554224155-1725f2fe4e9f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Refunds
                                        / 245 Adjustments</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cat-gap"></div>

                    
                    <div className="category-card">
                        <button className="category-head" type="button" data-bs-toggle="collapse" data-bs-target="#cat-penalty" aria-expanded="false" aria-controls="cat-penalty" data-visual-title="Penalty, Prosecution &amp; CPC-TDS" data-visual-text="Respond to penalty 270A/271, show-cause notices and CPC-TDS defaults." data-visual-img="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
                            <span className="category-left">
                                <span className="category-icon"><i className="bi bi-exclamation-octagon"></i></span>
                                Penalty, Prosecution &amp; CPC-TDS
                            </span>
                            <i className="bi bi-chevron-down chev"></i>
                        </button>

                        <div id="cat-penalty" className="collapse" data-bs-parent="#appealsAccordion">
                            <div className="sublist">
                                <div className="subitem"><i className="bi bi-flag bullet"></i>
                                    <a href="#!" data-visual-title="Penalty Proceedings – 270A/271" data-visual-text="Prepare replies, submissions and seek immunity/waiver where eligible." data-visual-img="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Penalty
                                        u/s 270A / 271</a>
                                </div>
                                <div className="subitem"><i className="bi bi-inboxes bullet"></i>
                                    <a href="#!" data-visual-title="Prosecution Notices" data-visual-text="Early engagement and defence strategy for prosecution show-cause." data-visual-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">Prosecution
                                        – Show-Cause</a>
                                </div>
                                <div className="subitem"><i className="bi bi-diagram-3 bullet"></i>
                                    <a href="#!" data-visual-title="CPC-TDS Defaults" data-visual-text="Resolve short deduction/late fee/interest via corrections and submissions." data-visual-img="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">CPC-TDS
                                        Defaults &amp; Corrections</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="visual-card">
                    <img id="visualImg" className="visual-img" alt="Service preview" src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" />
                    <div className="visual-body">
                        <h5 id="visualTitle" className="visual-title mb-1">Pre-assessment &amp; Notices</h5>
                        <p id="visualText" className="visual-text mb-0">
                            Drafting strong responses to 133(6), 142(1), 143(2) and CPC communications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    
    
    
    
    

    

</div>
    </Layout>
  );
};

export default Appeals;
