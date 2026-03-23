import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">Aniket Rai</span>
              <span className="footer__logo-bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Quick Links</h4>
            <div className="footer__links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__links">
              <a href="https://linkedin.com/in/aniketrai07" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/codebreaker939" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:raianiket014@outlook.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Aniket Rai. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <span className="footer__heart">❤️</span> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
