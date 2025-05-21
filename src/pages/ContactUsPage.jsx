import React, { useState } from 'react';
import '../../css/ContactUsPage.css'; // <--- ADJUSTED PATH

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        yourName: '',
        yourEmail: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // To show success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    yourName: '',
                    yourEmail: '',
                    phoneNumber: '',
                    subject: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                setStatus(`Failed to send message: ${errorData.message || 'Server error'}`);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="contact-us-container">
            <header className="contact-us-header">
                <div className="overlay"></div>
                <div className="header-content">
                    <h1>Contact Us</h1>
                    <p className="breadcrumb">Home / Contact Us</p>
                </div>
            </header>

            <main className="contact-us-main">
                <div className="contact-info-section">
                    <div className="contact-item">
                        <span className="icon location-icon">📍</span>
                        <p>
                            HEAD OFFICE: THIKA ROAD MALL (TRM), 2ND FLOOR, TRM DRIVE, AFTER SAFARI PARK HOTEL, NAIROBI, KENYA.
                        </p>
                    </div>
                    <div className="contact-item">
                        <span className="icon phone-icon">📞</span>
                        <p>0726310490</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Get In touch</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="yourName">Your Name<span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="yourName"
                                    name="yourName"
                                    value={formData.yourName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yourEmail">Your email<span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="yourEmail"
                                    name="yourEmail"
                                    value={formData.yourEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="phoneNumber">Phone number<span className="required">*</span></label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="subject">Subject<span className="required">*</span></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="7"
                            ></textarea>
                        </div>
                        <button type="submit" className="send-message-button" disabled={status === 'Sending...'}>
                            {status === 'Sending...' ? 'Sending...' : 'SEND MESSAGE'}
                        </button>
                        {status && <p className={`form-status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactUsPage;