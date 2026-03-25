import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "Marketing Content Assistant",
    desc: "Built a responsive UI with React.js for healthcare payers to manage healthcare document data, improving processing efficiency by 40%.",
    image: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Healthcare Document Extraction",
    desc: "Developed a rapid frontend application in React.js to improve document handling, boosting overall UX and operational speed by 40%.",
    image: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    tags: ["React.js", "Redux", "Context API"]
  },
  {
    title: "Hospital Management System",
    desc: "Designed and implemented a highly secure dashboard for patient and medication tracking featuring robust role-based access control.",
    image: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
    tags: ["React.js", "Auth0", "Firebase", "Chart.js"]
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured Projects</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>A showcase of recent frontend architectures and implementations.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ height: '200px', background: proj.image, width: '100%', position: 'relative' }}></div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{proj.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {proj.tags.map((t, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--accent-purple)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}><Code size={16}/> Source</a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 500 }}><ExternalLink size={16}/> Live Preview</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
