import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    title: 'Team Lead',
    company: 'Sports Club, ITM Skill University',
    period: 'Aug 2025 – Present',
    description: [
      'Led and coordinated teams during Sports events',
      'Managed task allocation, communication, and execution under deadlines',
    ],
    icon: '🏅',
    color: '#6c63ff',
  },
  {
    title: 'Business Development Intern',
    company: 'Budbiz Cabs',
    period: 'Sept 2025 – Nov 2025',
    description: [
      'Assisted in client acquisition and business expansion strategies',
      'Conducted market research and supported partnerships',
    ],
    icon: '💼',
    color: '#00d4ff',
  },
  {
    title: 'Squad Lead',
    company: 'Mood Indigo, IIT Bombay',
    period: 'Aug 2024 – Jan 2025',
    description: [
      "Led and coordinated teams during one of Asia's largest college festivals",
      'Managed task allocation, communication, and execution under deadlines',
    ],
    icon: '🎭',
    color: '#ff6b9d',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>
      </motion.div>

      <div className="timeline">
        <div className="timeline__line" />
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`timeline__item ${idx % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="timeline__dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }}>
              <span>{exp.icon}</span>
            </div>
            <div className="timeline__card glass-card">
              <div className="timeline__card-header">
                <span className="timeline__period" style={{ color: exp.color }}>{exp.period}</span>
                <h3 className="timeline__title">{exp.title}</h3>
                <span className="timeline__company">{exp.company}</span>
              </div>
              <ul className="timeline__list">
                {exp.description.map((desc, i) => (
                  <li key={i}>
                    <span className="timeline__bullet" style={{ background: exp.color }} />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
