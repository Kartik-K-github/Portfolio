import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Fraud, Waste, and Abuse (FWA) Detection System",
    desc: "Built a React.js app to retrieve and categorize documents by date range with nested case-level data. Developed complex multi-level navigation and optimized performance with secure authentication.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
    tags: ["React.js", "Redux/Context API", "REST APIs", "Auth", "Bootstrap", "Google Cloud"],
  },
  {
    title: "Marketing Content Assistant — Healthcare Payers",
    desc: "Built a responsive React.js UI to manage healthcare documents, improving processing efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    tags: ["React.js", "Redux", "REST APIs", "Azure"],
  },
  {
    title: "Healthcare Document Information Extraction",
    desc: "Developed frontend for document extraction pipeline, boosting UX and throughput by 40%.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    tags: ["React.js", "Context API", "REST APIs", "Google Cloud"],
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}>
          Featured Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          A showcase of recent frontend architectures and implementations.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          perspective: '1000px'
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredIndex === index 
                ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                : '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Thumbnail Container */}
            <div
              style={{
                position: 'relative',
                height: '220px',
                width: '100%',
                overflow: 'hidden',
                background: proj.gradient
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Content Container */}
            <div
              style={{
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '0.8rem',
                fontWeight: '600',
                lineHeight: '1.4'
              }}>
                {proj.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  flex: 1,
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}
              >
                {proj.desc}
              </p>

              {/* Tags Container */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}
              >
                {proj.tags.map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.35rem 0.7rem',
                      background: 'rgba(124, 58, 237, 0.1)',
                      borderRadius: '4px',
                      color: 'var(--accent-purple)',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>


            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}