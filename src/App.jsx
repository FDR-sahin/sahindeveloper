import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import FloatingFlowers from './components/FloatingFlowers';
import WaveDivider from './components/WaveDivider';

function App() {
  useEffect(() => {
    // পার্টিকেল ইফেক্ট (আগের মতো)
    const createParticles = () => {
      const body = document.body;
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        body.appendChild(particle);
      }
    };
    createParticles();
  }, []);

  return (
    <div className="min-h-screen bg-dark relative">
      {/* ব্যাকগ্রাউন্ড ফুল */}
      <FloatingFlowers />
      
      {/* মাউস ট্রেইল (পাপড়ি) */}
      <MouseTrail />

      {/* কন্টেন্ট */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider />
        <Skills />
        <WaveDivider />
        <Experience />
        <WaveDivider />
        <Projects />
        <WaveDivider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;