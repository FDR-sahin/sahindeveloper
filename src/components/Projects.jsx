import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaTimes,
  FaSearchPlus,
  FaLaptopCode,
} from 'react-icons/fa';

import uni from '../assets/university.jpeg';
import gocy from '../assets/grocity.png';
import burak from '../assets/burak.png';
import sahin from '../assets/sahinshop.png';
import webvibe from '../assets/webvibe.png';
import cafe from '../assets/cafe.png';
import businessideazoneImg from '../assets/businessideazone.png';
import widerbriefImg from '../assets/widerbrief.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // 🔥 Real-World Live Production Platforms
  const realWorldProjects = [
    {
      title: 'Business Idea Zone',
      subtitle: "Bangladesh's #1 Entrepreneurship & Sourcing Platform",
      category: 'Commercial Platform • Full-Stack Web App',
      url: 'https://www.businessideazone.com/',
      displayUrl: 'businessideazone.com',
      image: businessideazoneImg,
      description:
        "Contributed to engineering Bangladesh's leading verified platform for profitable business ideas, wholesale sourcing market directories, and realistic profit calculators across all 64 districts.",
      features: [
        'Instant Budget Calculator & dynamic margin filters',
        'Wholesale & retail price directory across 64 districts',
        'Community Q&A and AI-powered business advisor',
        'High-performance, mobile-responsive UI/UX architecture',
      ],
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL / MongoDB', 'Cloud Hosting'],
      badge: 'Live in Production',
      glowColor: 'from-emerald-500/20 via-primary/10 to-transparent',
    },
    {
      title: 'Wider Brief',
      subtitle: 'Independent Digital Broadsheet & News Portal',
      category: 'Media & Journalism • Production Web App',
      url: 'https://www.widerbrief.com/',
      displayUrl: 'widerbrief.com',
      image: widerbriefImg,
      description:
        'A full-featured digital broadsheet journalism and media portal delivering fast-breaking news, investigative reporting, digital e-paper, and live wire updates with high traffic concurrency.',
      features: [
        'Real-time breaking news ticker & categorized broadsheet feeds',
        'Bilingual interface (English & Bangla editions) + E-Paper',
        'Modern reader-first typography & instant responsiveness',
        'Optimized asset loading & SEO-driven architecture',
      ],
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'SEO Optimization', 'REST APIs'],
      badge: 'Live in Production',
      glowColor: 'from-primary/20 via-secondary/10 to-transparent',
    },
  ];

  // 📁 Other Key & Practice Projects
  const otherProjects = [
    {
      title: 'Full-Stack Web Application',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MySQL',
      description: 'Complete E-commerce project with admin panel',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://sahinshop.onrender.com',
      color: 'from-blue-500 to-purple-500',
      image: sahin,
    },
    {
      title: 'Full-Stack Web Application',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MySQL',
      description: 'Custom Web Experiences, Engineered to Perform.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://webvibe-eynr.onrender.com/',
      color: 'from-blue-500 to-purple-500',
      image: webvibe,
    },
    {
      title: 'Full-Stack Web Application',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB',
      description:
        'Working Continuing... A University Management System simplifies administrative operations, enhances academic management, and provides a seamless digital experience.',
      github: 'https://github.com/FDR-sahin',
      demo: '#',
      color: 'from-blue-500 to-purple-500',
      image: uni,
    },
    {
      title: 'Full-Stack Grocity Web Application',
      tech: 'HTML5, Tailwind CSS, JavaScript (ES6+), Firebase',
      description:
        'Developed an admin dashboard featuring secure login credentials, role-based user access, and dynamic analytics viewports. Optimized assets and CSS rendering paths.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://velvety-custard-6c08d5.netlify.app/',
      color: 'from-green-500 to-teal-500',
      image: gocy,
    },
    {
      title: 'Business Web Site',
      tech: 'React, Firebase, Express, Node.js, CSS3',
      description:
        'Collaborative task board with drag-and-drop functionality, real-time updates, and Firebase authentication for team collaboration.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://burakoil.netlify.app/',
      color: 'from-orange-500 to-red-500',
      image: burak,
    },
    {
      title: 'Business Web Site',
      tech: 'React, Firebase, Express, Node.js, CSS3',
      description:
        'Collaborative task board with drag-and-drop functionality, real-time updates, and Firebase authentication for team collaboration.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://dreamy-arithmetic-4809b9.netlify.app',
      color: 'from-orange-500 to-red-500',
      image: cafe,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary border border-primary/30 backdrop-blur-md mb-3 shadow-sm">
            <FaRocket className="text-secondary" />
            <span>Featured Portfolio Work</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Real-World & Key Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Explore live commercial platforms and full-stack web applications I have engineered and deployed.
          </p>
        </motion.div>

        {/* 🌟 1. FEATURED REAL-WORLD PRODUCTION PROJECTS */}
        <div className="space-y-12 mb-20">
          {realWorldProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-2xl group"
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.glowColor} rounded-full blur-3xl pointer-events-none -mr-24 -mt-24`}
              ></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"></div>

              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left / Right Alternating: Browser Window Mockup Frame */}
                <div className={`lg:col-span-6 flex flex-col items-center ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    onClick={() => setSelectedImage(project.image)}
                    className="w-full rounded-2xl overflow-hidden border border-white/15 bg-[#101024] shadow-2xl group/mockup cursor-pointer hover:border-primary/60 transition-all duration-300"
                    title="Click to view full screenshot"
                  >
                    {/* Modern Browser Chrome / Top Bar */}
                    <div className="bg-[#181832] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                      </div>

                      {/* Mockup URL Bar */}
                      <div className="bg-dark/80 text-gray-300 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 max-w-[240px] truncate shadow-inner">
                        <span className="text-emerald-400 text-[10px]">🔒</span>
                        <span className="truncate font-mono">{project.displayUrl}</span>
                      </div>

                      {/* Live Status Pill */}
                      <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative overflow-hidden bg-[#0d0d1a]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover group-hover/mockup:scale-[1.03] transition-transform duration-500"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                          <FaSearchPlus /> Click to View Full Screenshot
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-2.5 text-center flex items-center gap-1.5">
                    <span className="text-emerald-400">●</span> Live production screenshot of {project.title}
                  </p>
                </div>

                {/* Right / Left Alternating: Project Details & Story */}
                <div className={`lg:col-span-6 flex flex-col space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      {project.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights / Features */}
                  <div className="glass p-4 rounded-xl border border-white/5 space-y-2">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FaLaptopCode className="text-primary" /> Key Features & Contributions:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-primary mt-0.5 shrink-0 text-xs" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flower-hover btn-neon px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full flex items-center gap-2 relative z-10 text-sm md:text-base shadow-lg shadow-primary/20"
                    >
                      <FaGlobe className="text-sm" />
                      <span>Visit Live Website</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(project.image)}
                      className="px-6 py-3 border border-primary/40 text-gray-200 hover:text-white hover:border-primary font-semibold rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base glass cursor-pointer"
                    >
                      <FaSearchPlus className="text-primary text-sm" />
                      <span>Preview Screenshot</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🌟 2. OTHER KEY & PRACTICE PROJECTS */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Other Key & Personal Projects
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Additional web applications, e-commerce solutions, and full-stack development experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flower-hover glass rounded-2xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl rounded-[20px] overflow-hidden`}
                  >
                    <img
                      className="w-full h-full object-cover rounded-t-[20px] group-hover:scale-105 transition-transform duration-300"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-medium"
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-dark/95 p-4 rounded-2xl border border-white/20 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/80 transition-colors shadow-lg z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="w-full max-h-[80vh] overflow-y-auto rounded-xl border border-white/10">
                <img
                  src={selectedImage}
                  alt="Full Project Preview"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full flex items-center justify-between px-2 pt-3">
                <span className="text-xs md:text-sm text-gray-300 font-medium">
                  Real-World Production Project Screenshot
                </span>
                <span className="text-xs text-gray-400">
                  Press ESC or click outside to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;