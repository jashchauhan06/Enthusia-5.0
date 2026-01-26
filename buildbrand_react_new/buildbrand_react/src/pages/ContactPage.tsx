import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppearTitle from '@/components/AppearTitle'
import Button from '@/components/Button'
import './ContactPage.scss'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className="contact-page">
            <Link to="/" className="back-home-button">
                Back to BuildBrand
            </Link>

            <section className="contact-hero">
                <h1>
                    <AppearTitle>GET IN TOUCH</AppearTitle>
                </h1>
                <p className="subtitle">
                    Have questions about Build Brand? We're here to help.
                </p>
            </section>

            <section className="contact-content">
                <div className="content-wrapper">
                    <div className="contact-info">
                        <div className="info-block">
                            <h3>EMAIL US</h3>
                            <a href="enthusia@sitnagpur.siu.edu.in">
                                enthusia@sitnagpur.siu.edu.in
                            </a>
                        </div>
                        <div className="info-block">
                            <h3>CALL US</h3>
                            <a href="tel:+918468898424" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <span>Jivesh Chawla</span>
                                <span>+91 84688 98424</span>
                            </a>
                        </div>
                        <div className="info-block">
                            <h3>Location</h3>
                            <a
                                href="https://maps.app.goo.gl/HLRS6jHNj5psPPoVA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Symbiosis Institute of Technology<br />
                                Nagpur, Maharashtra
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us more..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" arrow={true} className="submit-button">
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    )
}
