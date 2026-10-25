import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaTrophy,
  FaBolt,
  FaClock,
  FaUsers,
  FaExternalLinkAlt,
  FaSearchPlus,
  FaTerminal,
  FaCheckCircle,
  FaTimes,
  FaLaptopCode,
  FaRocket,
} from 'react-icons/fa';
import campusOsImg from '../assets/hackathon_campusos.png';

const Hackathon = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const sprintMetrics = [
    {
      icon: FaClock,
      label: 'Sprint Timeline',
      val: '48 Hours',
      desc: 'Rapid Zero-to-Production',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10',
    },
    {
      icon: FaTrophy,
      label: 'Hackathon Track',
      val: 'Campus Innovation',
      desc: 'Smart Student OS',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
    },
    {
      icon: FaUsers,
      label: 'My Role',
      val: 'Lead Full-Stack',
      desc: 'UI/UX & Core Architecture',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
    },
    {
      icon: FaRocket,
      label: 'Deployment',
      val: 'Live on Vercel',
      desc: 'Instant Global CDN',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="hackathon" className="py-24 relative overflow-hidden">
      {/* Background Cybernetic Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6c63ff12_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-primary/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-md mb-3 shadow-lg shadow-cyan-500/10">
            <FaTrophy className="text-amber-400 animate-bounce" />
            <span>Hackathon & Innovation Sprint</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Competitive <span className="bg-gradient-to-r from-cyan-400 via-primary to-secondary bg-clip-text text-transparent">Hackathon Experience</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            I actively participate in fast-paced hackathons—transforming complex campus and real-world problems into working, production-grade applications under high-pressure 48-hour sprints.
          </p>
        </motion.div>

        {/* ⚡ 4-Card Sprint Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {sprintMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-4 md:p-5 rounded-2xl glass ${metric.border} border bg-dark/60 relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 shadow-xl`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 font-medium">{metric.label}</span>
                <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center ${metric.color}`}>
                  <metric.icon className="text-sm" />
                </div>
              </div>
              <p className={`text-xl md:text-2xl font-bold text-white group-hover:${metric.color} transition-colors`}>
                {metric.val}
              </p>
              <p className="text-[11px] text-gray-400 mt-1 font-mono">{metric.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🛸 Main Cyber Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-primary/30 to-purple-900/30 shadow-2xl shadow-cyan-950/40"
        >
          <div className="bg-[#0b0d1e]/95 backdrop-blur-2xl rounded-[22px] p-6 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
                </div>
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <FaTerminal className="text-xs" />
                  sahin@hackathon:~/projects/campus-os$
                </span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 text-[11px]">
                  Sprint_ID: CU-HACKATHON-2026
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  STATUS: LIVE_DEPLOYED
                </span>
              </div>
            </div>

            {/* Content Body: Left Visual Showcase, Right Pitch & Specs */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Tech Preview Frame */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="w-full relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-2xl shadow-cyan-500/20 group cursor-pointer bg-dark/80"
                  title="Click to view full hackathon dashboard screenshot"
                >
                  {/* Cyber Corner HUD Accents */}
                  <span className="absolute top-2 left-2 z-20 text-[10px] font-mono text-cyan-400 font-bold">┌ CU_HUB ┐</span>
                  <span className="absolute bottom-2 right-2 z-20 text-[10px] font-mono text-cyan-400 font-bold">└ VERCEL ┘</span>

                  <img
                    src={campusOsImg}
                    alt="CampusOS City University Digital Hub Hackathon Project"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-20">
                    <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-cyan-600/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-cyan-400/50">
                      <FaSearchPlus /> View Full Dashboard UI
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-3 text-center flex items-center gap-1.5 font-mono">
                  <FaBolt className="text-cyan-400" /> City University Intra-University Hackathon Project
                </p>
              </div>

              {/* Right Column: Hackathon Story & Architecture */}
              <div className="lg:col-span-6 flex flex-col space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-mono text-cyan-400 font-semibold tracking-wider">
                  <FaBolt /> 48-Hour Rapid Prototyping
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  <span className="text-cyan-400">CampusOS:</span> City University Digital Operating Hub
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Engineered under intense 48-hour hackathon conditions to solve university-wide student friction—unifying scattered trimester deadlines, examination room allocations, emergency notices, and shuttle schedules into one centralized real-time dashboard.
                </p>

                {/* Key Problems Solved in Hackathon */}
                <div className="bg-dark/70 p-4 rounded-xl border border-cyan-500/20 space-y-2">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <FaLaptopCode className="text-cyan-400" /> Rapid Solutions Engineered:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0 text-xs" />
                      <span>Instant Trimester Exam Routine & Hall Locator</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-amber-400 mt-0.5 shrink-0 text-xs" />
                      <span>Immediate Priority Notice & Advising Alert Banners</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0 text-xs" />
                      <span>Instant Keyboard Campus Search (<kbd className="bg-white/10 px-1 py-0.5 rounded text-[10px]">Ctrl+K</kbd>)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-amber-400 mt-0.5 shrink-0 text-xs" />
                      <span>Transport schedules, club events & digital helpdesk</span>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {['React.js', 'Tailwind CSS', 'Vercel Serverless', 'Modular UI', 'Lucide Icons', 'Responsive OS'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Hackathon CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://hackathon-ashy-seven-32.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-primary to-secondary text-white font-semibold rounded-full flex items-center gap-2 text-sm md:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
                  >
                    <span>Launch Hackathon App</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base bg-cyan-950/30 cursor-pointer"
                  >
                    <FaSearchPlus className="text-cyan-400 text-sm" />
                    <span>Preview Screenshot</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Full Screenshot */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#0d1024] p-4 rounded-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/30 cursor-default"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 rounded-full bg-cyan-500 text-dark font-bold flex items-center justify-center hover:bg-cyan-400 transition-colors shadow-lg z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="w-full max-h-[80vh] overflow-y-auto rounded-xl border border-white/10">
                <img
                  src={campusOsImg}
                  alt="CampusOS Hackathon Project Full Screenshot"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full flex items-center justify-between px-2 pt-3 font-mono">
                <span className="text-xs md:text-sm text-cyan-300">
                  ⚡ CampusOS — 48-Hour Hackathon Project (City University Hub)
                </span>
                <a
                  href="https://hackathon-ashy-seven-32.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-cyan-400 hover:underline flex items-center gap-1.5"
                >
                  Open Live App <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hackathon;

