import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer",
    company: "Cognizant",
    period: "Dec 2021 - Present",
    description: "Developed pixel-perfect, dynamic UIs from Figma using React.js. Improved page load speed by 30% via component optimization, lazy loading, and code-splitting. Architected scalable component architecture using React Hooks and Context/Redux. Deployed scalable React apps on Google Cloud Run and Azure, achieving 100% uptime.",
    tech: ["React.js", "JavaScript", "Context API", "Redux", "Google Cloud", "Azure"]
  },
  {
    role: "Bachelor of Engineering in IT",
    company: "Priyadarshini College of Engineering",
    period: "July 2017 - Aug 2021",
    description: "Completed comprehensive coursework in Information Technology. Developed a strong foundational understanding of computer science principles, database management (SQL, PostgreSQL), and software engineering methodologies.",
    tech: ["IT", "Algorithms", "Databases"]
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Experience & Education</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>My professional journey and academic background.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="glass-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', fontWeight: 500 }}>{exp.company}</h4>
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                {exp.period}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {exp.tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-primary)' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
