import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about__grid">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about__avatar-wrapper">
            <div className="about__avatar-ring" />
            <div className="about__avatar">
              <span className="about__avatar-text">AR</span>
            </div>
            <div className="about__avatar-orbit">
              <div className="about__orbit-dot about__orbit-dot--1" />
              <div className="about__orbit-dot about__orbit-dot--2" />
              <div className="about__orbit-dot about__orbit-dot--3" />
            </div>
          </div>

          <div className="about__info-cards">
            <div className="about__info-card glass-card">
              <span className="about__info-icon">📍</span>
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Mumbai, India</span>
              </div>
            </div>
            <div className="about__info-card glass-card">
              <span className="about__info-icon">🎓</span>
              <div>
                <span className="about__info-label">Education</span>
                <span className="about__info-value">B.Tech CSE</span>
              </div>
            </div>
            <div className="about__info-card glass-card">
              <span className="about__info-icon">🏫</span>
              <div>
                <span className="about__info-label">Institute</span>
                <span className="about__info-value">ITM Skills University</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle" style={{ marginBottom: '24px' }}>A glimpse into who I am</p>

          <div className="about__text">
            <p>
              I'm an aspiring <strong>Software Developer</strong> and B.Tech student currently pursuing 
              Computer Science & Engineering at <strong>ITM Skills University</strong>. With hands-on experience in the 
              <strong> MERN stack</strong>, RESTful APIs, and database-driven applications, I love turning complex 
              problems into elegant digital solutions.
            </p>
            <p>
              My foundation in <strong>Data Structures, OOP, Networks, and Operating Systems</strong> combined 
              with a passion for <strong>AI/ML</strong> drives me to continuously evolve as a developer. I believe 
              in the power of team collaboration and building scalable, high-performance software.
            </p>
            <p>
              When I'm not coding, you'll find me leading teams at festivals like <strong>Mood Indigo (IIT Bombay)</strong> 
              or managing sports events — experiences that have shaped my leadership and time management skills.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__highlight">
              <div className="about__highlight-icon">⚡</div>
              <div>
                <h4>Quick Learner</h4>
                <p>Rapidly adapting to new technologies and frameworks</p>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">🤝</div>
              <div>
                <h4>Team Player</h4>
                <p>Proven leadership across multiple organizations</p>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">🎯</div>
              <div>
                <h4>Goal Oriented</h4>
                <p>Delivering results under tight deadlines</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
