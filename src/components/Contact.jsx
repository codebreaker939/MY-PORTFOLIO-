import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

// ⚠️ REPLACE THIS with your actual Google Apps Script Web App URL
const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // status: '' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      // no-cors returns opaque response, so we assume success
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'raianiket014@outlook.com',
      href: 'mailto:raianiket014@outlook.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 93593-70339',
      href: 'tel:+919359370339',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
    },
  ];

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aniketrai07',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/codebreaker939',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's create something amazing together</p>
      </motion.div>

      <div className="contact__grid">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="contact__info-title">Let's connect!</h3>
          <p className="contact__info-text">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out through any of the below channels.
          </p>

          <div className="contact__details">
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} className="contact__detail glass-card">
                <span className="contact__detail-icon">{info.icon}</span>
                <div>
                  <span className="contact__detail-label">{info.label}</span>
                  <span className="contact__detail-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact__socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                aria-label={social.name}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact__textarea"
              placeholder="Tell me about your project..."
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className={`contact__submit ${status === 'error' ? 'contact__submit--error' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="contact__spinner"></span> Sending...
              </>
            ) : status === 'sent' ? (
              <>
                <span>✅</span> Message Sent!
              </>
            ) : status === 'error' ? (
              <>
                <span>❌</span> Failed — Try Again
              </>
            ) : (
              <>
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
