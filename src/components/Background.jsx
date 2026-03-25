import React, { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    // Adjust density based on screen size
    const particleCount = Math.floor((width * height) / 15000);
    
    // Antigravity vibrant theme colors
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'];

    let mouse = { x: width / 2, y: height / 2, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        const maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = (forceDirectionX * force * this.density);
        let directionY = (forceDirectionY * force * this.density);

        if (distance < mouse.radius) {
          // Anti-gravity repel effect
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Slowly return to base
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Fluid scroll interpolation (Lerp)
      let scrollVelocity = (targetScrollY - currentScrollY) * 0.05;
      currentScrollY += scrollVelocity;

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // Apply buttery smooth parallax drifting
        if (Math.abs(scrollVelocity) > 0.05) {
          const parallaxOffset = scrollVelocity * (p.size * 0.4);
          p.y -= parallaxOffset;
          p.baseY -= parallaxOffset;

          // Wrap around safely
          if (p.y > height + 50) {
            p.y = -50;
            p.baseY = -50;
          } else if (p.y < -50) {
            p.y = height + 50;
            p.baseY = height + 50;
          }
        }

        particles[i].update();
        particles[i].draw();
        
        // Connect particles for network effect
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            let opacity = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -3,
        pointerEvents: 'none',
        opacity: 0.9
      }}
    />
  );
}
