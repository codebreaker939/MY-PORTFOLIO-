import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'languages', label: 'Languages' },
  { id: 'tools', label: 'Tools' },
  { id: 'core', label: 'Core CS' },
  { id: 'soft', label: 'Soft Skills' },
];

const skills = [
  // Frontend
  { name: 'React.js', level: 85, category: 'frontend', icon: '⚛️', color: '#61dafb' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: '🟨', color: '#f7df1e' },
  { name: 'HTML5', level: 92, category: 'frontend', icon: '🌐', color: '#e34f26' },
  { name: 'CSS3', level: 88, category: 'frontend', icon: '🎨', color: '#1572b6' },
  // Backend
  { name: 'Node.js', level: 80, category: 'backend', icon: '🟢', color: '#339933' },
  { name: 'Express.js', level: 78, category: 'backend', icon: '⚡', color: '#68a063' },
  { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃', color: '#47a248' },
  { name: 'MySQL', level: 70, category: 'backend', icon: '🐬', color: '#4479a1' },
  { name: 'REST APIs', level: 82, category: 'backend', icon: '🔗', color: '#00d4ff' },
  // Languages
  { name: 'Python', level: 70, category: 'languages', icon: '🐍', color: '#3776ab' },
  { name: 'Java', level: 65, category: 'languages', icon: '☕', color: '#ed8b00' },
  // Tools
  { name: 'Git', level: 82, category: 'tools', icon: '🔀', color: '#f05032' },
  { name: 'GitHub', level: 80, category: 'tools', icon: '🐙', color: '#ffffff' },
  { name: 'VS Code', level: 90, category: 'tools', icon: '📝', color: '#007acc' },
  { name: 'Postman', level: 78, category: 'tools', icon: '📮', color: '#ff6c37' },
  { name: 'Figma', level: 60, category: 'tools', icon: '✏️', color: '#a259ff' },
  // Core CS
  { name: 'DSA', level: 75, category: 'core', icon: '🧮', color: '#6c63ff' },
  { name: 'OOP', level: 80, category: 'core', icon: '🔧', color: '#00d4ff' },
  { name: 'Networks', level: 70, category: 'core', icon: '🌐', color: '#ff6b9d' },
  { name: 'OS', level: 68, category: 'core', icon: '💻', color: '#ffa726' },
  // Soft Skills
  { name: 'Leadership', level: 90, category: 'soft', icon: '🎯', color: '#6c63ff' },
  { name: 'Problem Solving', level: 85, category: 'soft', icon: '🧩', color: '#00d4ff' },
  { name: 'Time Mgmt', level: 82, category: 'soft', icon: '⏰', color: '#ff6b9d' },
  { name: 'Communication', level: 88, category: 'soft', icon: '💬', color: '#ffa726' },
];

function CircularProgress({ level, color, size = 72 }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="skill-circle" viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="4"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.35em"
        fill={color}
        fontSize="13"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="600"
      >
        {level}%
      </text>
    </svg>
  );
}

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      layout
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="skill-card__glow" style={{ background: `${skill.color}08` }} />
      <CircularProgress level={skill.level} color={skill.color} />
      <div className="skill-card__info">
        <span className="skill-card__icon">{skill.icon}</span>
        <span className="skill-card__name">{skill.name}</span>
      </div>
      <div className="skill-card__bar-track">
        <motion.div
          className="skill-card__bar-fill"
          style={{ background: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const stats = [
    { label: 'Technologies', value: skills.filter(s => ['frontend', 'backend', 'languages'].includes(s.category)).length },
    { label: 'Tools Mastered', value: skills.filter(s => s.category === 'tools').length },
    { label: 'Core Subjects', value: skills.filter(s => s.category === 'core').length },
    { label: 'Avg. Proficiency', value: `${Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length)}%` },
  ];

  return (
    <section id="skills" className="skills section">
      <motion.div
        className="skills__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies, tools, and competencies I bring to the table</p>
      </motion.div>

      {/* Stats Banner */}
      <motion.div
        className="skills__stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="skills__stat">
            <span className="skills__stat-value">{stat.value}</span>
            <span className="skills__stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        className="skills__tabs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`skills__tab ${activeCategory === cat.id ? 'skills__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <motion.div className="skills__tab-indicator" layoutId="tab-indicator" />
            )}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="skills__grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MERN Stack Highlight */}
      <motion.div
        className="skills__mern glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="skills__mern-title">
          <span className="gradient-text">MERN Stack</span> Developer
        </h3>
        <div className="skills__mern-stack">
          {[
            { letter: 'M', name: 'MongoDB', color: '#47a248', desc: 'NoSQL Database' },
            { letter: 'E', name: 'Express.js', color: '#68a063', desc: 'Backend Framework' },
            { letter: 'R', name: 'React.js', color: '#61dafb', desc: 'Frontend Library' },
            { letter: 'N', name: 'Node.js', color: '#339933', desc: 'Runtime Environment' },
          ].map((tech, i) => (
            <motion.div
              key={tech.letter}
              className="skills__mern-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="skills__mern-letter" style={{ color: tech.color, borderColor: `${tech.color}40` }}>
                {tech.letter}
              </div>
              <span className="skills__mern-name">{tech.name}</span>
              <span className="skills__mern-desc">{tech.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
