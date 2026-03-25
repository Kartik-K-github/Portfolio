import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Code, MessageSquare, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("kartikkurhewar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:kartikkurhewar@gmail.com";
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Build Together</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
          Feel free to reach out if you have a project in mind, need a skilled React developer, or just want to connect!
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '1rem' }}>+91-8830556394</p>
      </motion.div>

      <motion.a 
        href="mailto:kartikkurhewar@gmail.com"
        onClick={handleEmailClick}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel"
        style={{ padding: '1.5rem 4rem', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
      >
        {copied ? <Check color="#10b981" /> : <Mail />} 
        {copied ? "Copied!" : "Email Me"}
      </motion.a>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '6rem' }}>
        <a href="https://linkedin.com/in/kartik-kurhewar-101a" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Briefcase size={24}/> LinkedIn
        </a>
      </div>
    </section>
  );
}
