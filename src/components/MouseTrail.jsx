import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseTrail = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // নতুন পার্টিকেল তৈরি
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: `hsl(${Math.random() * 60 + 280}, 80%, 60%)`, // পাপড়ির রং
        life: 1,
      };
      
      setParticles((prev) => [...prev, newParticle].slice(-30)); // সর্বোচ্চ ৩০টি
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // পার্টিকেল লাইফ টাইম কমে
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 0.02 }))
          .filter((p) => p.life > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: p.x,
            y: p.y,
            scale: 0,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            x: p.x + (Math.random() - 0.5) * 80,
            y: p.y + (Math.random() - 0.5) * 80 - 20,
            scale: 1,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color}, transparent)`,
            boxShadow: `0 0 20px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;