import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "Fraud, Waste, and Abuse (FWA) Detection System",
    desc: "Built a React.js app to retrieve and categorize documents by date range with nested case-level data. Developed complex multi-level navigation and optimized performance with secure authentication.",
    image: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
    tags: ["React.js", "Redux/Context API", "REST APIs", "Auth", "Bootstrap", "Google Cloud"],
  },
  {
    title: "Marketing Content Assistant — Healthcare Payers",
    desc: "Built a responsive React.js UI to manage healthcare documents, improving processing efficiency by 40%.",
    image: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    tags: ["React.js", "Redux", "REST APIs", "Azure"],
  },
  {
    title: "Healthcare Document Information Extraction",
    desc: "Developed frontend for document extraction pipeline, boosting UX and throughput by 40%.",
    image: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    tags: ["React.js", "Context API", "REST APIs", "Google Cloud"],
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
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Featured Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          A showcase of recent frontend architectures and implementations.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}
      >
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                height: '200px',
                background: proj.image,
                width: '100%'
              }}
            />

            <div
              style={{
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                {proj.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  flex: 1
                }}
              >
                {proj.desc}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem'
                }}
              >
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      color: 'var(--accent-purple)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}