import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 400); 
      mouseY.set(e.clientY - 400);
    };
    
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2 - 400);
      mouseY.set(window.innerHeight / 2 - 400);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="app-container">
      <Background />
      <motion.div 
        className="bg-glow"
        style={{
          x: springX,
          y: springY,
          top: 0,
          left: 0
        }}
      />
      
      <nav className="liquid-glass-nav">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>
          Kartik<span style={{ color: 'var(--accent-purple)' }}>.</span>dev
        </div>
        <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-secondary)', alignItems: 'center' }}>
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</a>
          <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Experience</a>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Work</a>
          <a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Contact</a>
        </div>
      </nav>


      <main className="container">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
        <p>Built with React & Vite. Designed with inspiration from top agencies.</p>
        <p>&copy; {new Date().getFullYear()} Kartik. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
