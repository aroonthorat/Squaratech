import React, { useEffect, useRef } from 'react';

const LightningBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h;
    let sparks = [];
    const maxSparks = 60;
    
    // Mouse state
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      moved: false
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moved = true;
      
      // Burst sparks on mouse movement
      if (Math.random() > 0.3) {
        sparks.push(createSpark(mouse.x, mouse.y));
        if (sparks.length > maxSparks) {
          sparks.shift();
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const createSpark = (x, y) => {
      return {
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 8, // chaotic electric scattered speed
        vy: (Math.random() - 0.5) * 8,
        life: 1,
        color: Math.random() > 0.5 ? '#00ff88' : '#00e5ff' // green or blue
      };
    };

    const drawLine = (p1, p2, opacity, color) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      // Lightning zig-zag effect
      const midX = (p1.x + p2.x) / 2 + (Math.random() - 0.5) * 15;
      const midY = (p1.y + p2.y) / 2 + (Math.random() - 0.5) * 15;
      ctx.lineTo(midX, midY);
      ctx.lineTo(p2.x, p2.y);
      
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity * 0.8;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < sparks.length; i++) {
        let p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.03; // decay rate
        
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.random() * 2 + 1, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.fill();
        }
      }
      
      sparks = sparks.filter(p => p.life > 0);
      ctx.globalAlpha = 1;

      if (mouse.moved) {
        for (let i = 0; i < sparks.length; i++) {
          let distMouse = Math.hypot(sparks[i].x - mouse.x, sparks[i].y - mouse.y);
          if (distMouse < 200) {
            drawLine(mouse, sparks[i], sparks[i].life, sparks[i].color);
          }
          
          for (let j = i + 1; j < sparks.length; j++) {
            let distSparks = Math.hypot(sparks[i].x - sparks[j].x, sparks[i].y - sparks[j].y);
            if (distSparks < 100) {
              drawLine(sparks[i], sparks[j], sparks[i].life * sparks[j].life, sparks[i].color);
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
};

export default LightningBackground;
