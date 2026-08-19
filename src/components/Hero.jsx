import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          background: 'rgba(5b, 130, 246, 0.1)', 
          padding: '0.5rem 1rem', 
          borderRadius: '50px', 
          color: 'var(--accent-blue)', 
          fontWeight: 600, 
          fontSize: '0.875rem', 
          marginBottom: '2rem',
          border: '1px solid rgba(59, 130, 246, 0.2)'
        }}
      >
        Software Engineer @ Cognizant
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '4.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}
      >
        Hi, I'm <span className="text-gradient">Kartik</span> <br/> Full-Stack GenAI Engineer
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem' }}
      >
        Full-Stack Software Engineer with 4+ years of experience shipping production GenAI healthcare products end-to-end — RAG pipelines and LLM integration on Python/FastAPI backends, paired with React.js frontends. Experienced across retrieval, chunking, hybrid search, reranking, and multimodal RAG, plus REST API design, authentication & security, and performance optimization, deploying to GCP and Azure via automated CI/CD.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', gap: '1rem' }}
      >
        <a href="#projects" className="glass-panel" style={{ padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>
          <Code2 size={20} /> View Work
        </a>
        <a href="/Resume_Kartik_Kurhewar.pdf" download="Resume_Kartik_Kurhewar.pdf" className="glass-panel" style={{ padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>
          <Download size={20} /> Resume
        </a>
        <a href="#contact" className="glass-panel" style={{ padding: '1rem 2.5rem', display: 'inline-block', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', background: 'var(--accent-blue)', borderColor: 'transparent' }}>
          Get In Touch
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ display: 'flex', gap: '4rem', marginTop: '6rem', color: 'var(--text-muted)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>4+</h3>
          <p>Years Experience</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>30%</h3>
          <p>Faster Page Loads</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>35%</h3>
          <p>Fewer User Issues</p>
        </div>
      </motion.div>
    </section>
  );
}