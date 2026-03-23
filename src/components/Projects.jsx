import { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Indeed Clone',
    subtitle: 'Job Portal Web Application',
    description:
      'A full-stack job portal built for employers and job seekers with comprehensive features for modern recruitment.',
    features: [
      'Job posting, application tracking, and interview scheduling',
      'Backend powered by Node.js, Express.js, and MongoDB',
      'Scalable and ATS-friendly UI design',
      'Full-stack MERN implementation',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    color: '#6c63ff',
    icon: '💼',
    links: {
      github: 'https://github.com/codebreaker939',
    },
  },
  {
    title: 'SRE',
    subtitle: 'Solutions to your Electrical needs',
    description:
      'A dynamic web application for a Electrical Enterprise, built with modular architecture and optimized performance.',
    features: [
      'Modular architecture for scalability',
      'Frontend-backend integration',
      'Performance optimization',
      'Responsive and user-friendly design',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    color: '#00d4ff',
    icon: '🌿',
    links: {
      github: 'https://github.com/codebreaker939',
    },
  },
];

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card glass-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card__glow" style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }} />
      
      <div className="project-card__header">
        <div className="project-card__icon" style={{ background: `${project.color}20`, color: project.color }}>
          <span>{project.icon}</span>
        </div>
        <div className="project-card__links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <span className="project-card__subtitle" style={{ color: project.color }}>{project.subtitle}</span>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__features">
          {project.features.map((feature, i) => (
            <li key={i}>
              <span className="project-card__feature-dot" style={{ background: project.color }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag" style={{ borderColor: `${project.color}30` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="project-card__shine"
        animate={{
          x: isHovered ? '200%' : '-100%',
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built with passion</p>
      </motion.div>

      <div className="projects__grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
