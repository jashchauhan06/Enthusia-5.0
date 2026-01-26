const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="section-header">
                <span className="section-tag">SEC. 008</span>
                <h2 className="section-title">GET IN TOUCH</h2>
                <p className="section-subtitle">We'd love to hear from you</p>
            </div>

            <div className="contact-container">
                {/* Left Side - Contact Information */}
                <div className="contact-info">
                    <a href="https://maps.app.goo.gl/EH2gg2tGbdRieGFw7" target="_blank" rel="noopener noreferrer" className="contact-card contact-card-link">
                        <div className="contact-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div className="contact-details">
                            <h3>LOCATION</h3>
                            <p>Symbiosis Institute of Technology</p>
                            <p>Nagpur, Maharashtra, India</p>
                        </div>
                    </a>

                    <a href="mailto:enthusia@sitnagpur.siu.edu.in" className="contact-card contact-card-link">
                        <div className="contact-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m2 7 10 7 10-7" />
                            </svg>
                        </div>
                        <div className="contact-details">
                            <h3>EMAIL</h3>
                            <p>enthusia@sitnagpur.siu.edu.in</p>
                        </div>
                    </a>

                    <div className="contact-card">
                        <div className="contact-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div className="contact-details">
                            <h3>CONNECT</h3>
                            <p>Mahek Patel: +91 95297 83646</p>
                            <p>Aswin Binu: +91 73833 85322</p>
                            <p>Mrudang Wanjari: +91 93566 98558</p>
                            <p>Ayush Dwivedi: +91 84598 72072</p>
                            <p>AISHI DE: +91 70201 38239</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="contact-details">
                            <h3>WEBSITE RELATED QUERIES</h3>
                            <p>Jash Chauhan: +91 9595518881</p>
                            <p>Aswin Binu: +91 73833 85322</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form" id="contactForm" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contactName">YOUR NAME</label>
                                <input type="text" id="contactName" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactEmail">YOUR EMAIL</label>
                                <input type="email" id="contactEmail" name="email" placeholder="Email ID" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactSubject">SUBJECT</label>
                            <input type="text" id="contactSubject" name="subject" placeholder="Subject..." required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactMessage">YOUR MESSAGE</label>
                            <textarea id="contactMessage" name="message" rows="6" placeholder="Write your message here..." required></textarea>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            <span>SEND MESSAGE</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Upside Down particles */}
            <div className="contact-particles">
                <span className="c-particle"></span>
                <span className="c-particle"></span>
                <span className="c-particle"></span>
                <span className="c-particle"></span>
            </div>
        </section>
    );
};

export default Contact;
