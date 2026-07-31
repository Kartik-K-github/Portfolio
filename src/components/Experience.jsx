import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer",
    company: "Cognizant",
    period: "Dec 2021 - Present",
    bullets: [
      "Built and maintained full-stack features for production GenAI healthcare products, connecting React.js frontends to Python/FastAPI backends and implementing role-based access control (RBAC) for secure access.",
      "Built RAG (Retrieval-Augmented Generation) pipelines, integrating LLMs with MongoDB as a vector database and embeddings to ground responses in domain-specific healthcare data.",
      "Integrated LLMs into product features using prompt engineering, leveraging GitHub Copilot and Claude Code to accelerate development velocity.",
      "Developed pixel-perfect, responsive UIs from Figma using React.js, HTML5, CSS3, Bootstrap, and Tailwind CSS, building reusable components with Hooks, Context API, and Redux Toolkit — cutting design-to-development cycle by 25%.",
      "Designed and built RESTful APIs and backend services using Python and FastAPI, modeling PostgreSQL schemas and optimizing queries.",
      "Improved application performance by 30% through lazy loading, code splitting, memoization, and bundle optimization.",
      "Implemented secure authentication and authorization using JWT and Auth0 across frontend and backend.",
      "Deployed React apps on Google Cloud Run and Azure via automated GitHub Actions CI/CD pipelines, reducing deployment time by 40%.",
      "Refactored legacy codebases and implemented unit testing, reducing user-reported issues by 35%.",
      "Mentored 3 junior developers, reducing onboarding time by 50%."
    ],
    tech: ["React.js", "Python", "FastAPI", "LLMs", "RAG", "MongoDB", "PostgreSQL", "Redux Toolkit", "Tailwind CSS", "JWT / Auth0", "GCP", "Azure", "GitHub Actions"]
  },
  {
    role: "Bachelor of Engineering in IT",
    company: "Priyadarshini College of Engineering",
    period: "July 2017 - Aug 2021",
    bullets: [
      "Completed comprehensive coursework in Information Technology, covering core computer science principles and software engineering methodologies."
    ],
    tech: ["SQL", "PostgreSQL", "Algorithms", "Databases"]
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
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
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