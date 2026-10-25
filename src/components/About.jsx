import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaRocket,
  FaTimes,
  FaSearchPlus,
  FaBriefcase,
} from 'react-icons/fa';
import sahinPhoto from '../assets/babu.jpeg';
import welcomePoster from '../assets/regards_tech_welcome.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPosterOpen, setIsPosterOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsPosterOpen(false);
      }
    };

    if (isPosterOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isPosterOpen]);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Full Stack Developer with <span className="gradient-text">2+ Years</span> Experience
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              I am a <strong className="text-white">results-oriented Full Stack Web Developer</strong> with over 2 years of 
              experience constructing modern, responsive, and performance-optimized web applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Specialized in the <strong className="text-white">MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js), 
              <strong className="text-white"> Tailwind CSS</strong>, and <strong className="text-white">Firebase</strong>. 
              Strongly adept in computer science fundamentals, algorithm design, and structured problem-solving using 
              <strong className="text-white"> C, C++, Java, and Python</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I love building end-to-end solutions—from designing beautiful, mobile-first interfaces to developing 
              robust backend systems and managing both <strong className="text-white">NoSQL</strong> and 
              <strong className="text-white"> SQL databases</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass p-4 rounded-xl">
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-4">🎯 Core Strengths</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▸</span>
                    MERN Stack Expert
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">▸</span>
                    RESTful API Design & Security
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▸</span>
                    Firebase Auth & Firestore
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">▸</span>
                    MySQL Database Management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">▸</span>
                    Algorithm Design & Problem Solving
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">▸</span>
                    Git & GitHub Workflows
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🌟 Current Position / Latest Career Announcement Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20"
        >
          {/* Post Header Label */}
          <div className="flex flex-col items-center text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary border border-primary/30 backdrop-blur-md mb-3 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Career Update & Active Role
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Currently Working at <span className="gradient-text">Regards Tech</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
              Delighted to share an exciting milestone in my professional software engineering journey.
            </p>
          </div>

          {/* Social / Announcement Style Card */}
          <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            {/* Post Top Profile Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={sahinPhoto}
                    alt="Shahin Miah"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary shadow-lg"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-dark" title="Active"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-lg md:text-xl font-bold text-white">Shahin Miah</h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                      Author
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 flex items-center gap-2 flex-wrap mt-0.5">
                    <span className="text-primary font-medium">Website & App Developer</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Regards Tech</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.regardstech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                >
                  <FaBuilding className="text-primary" />
                  <span>regardstech.com</span>
                  <FaExternalLinkAlt className="text-xs text-gray-400" />
                </a>
              </div>
            </div>

            {/* Post Content Grid: Left Image, Right Story */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mt-8 relative z-10">
              {/* Left Column: Official Welcome Poster / Photo */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => setIsPosterOpen(true)}
                  className="group relative rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/80 transition-all duration-300 shadow-2xl cursor-pointer max-w-sm w-full bg-dark/60"
                  title="Click to view full size poster"
                >
                  <img
                    src={welcomePoster}
                    alt="Regards Tech Welcome Announcement for Shahin Miah"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-primary/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
                      <FaSearchPlus /> Click to View Full Image
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-dark/80 text-white border border-white/20 backdrop-blur-md shadow-md">
                      <FaBriefcase className="text-primary text-xs" />
                      Official Announcement
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2.5 text-center flex items-center gap-1.5">
                  <span>🎉</span> Official "Welcome to the Team" announcement from Regards Tech
                </p>
              </div>

              {/* Right Column: Narrative & Company Overview */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-secondary font-semibold">
                  <FaRocket className="text-secondary" />
                  <span>New Role Announcement</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Excited to join <span className="gradient-text">Regards Tech</span> as a Website & App Developer!
                </h4>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  I am thrilled to announce that I have joined{' '}
                  <a
                    href="https://www.regardstech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Regards Tech <FaExternalLinkAlt className="text-xs inline" />
                  </a>{' '}
                  as a <strong className="text-white">Website & App Developer</strong>! It is an amazing privilege to be part of a vibrant, innovative tech team where ideas turn into reality.
                </p>

                <div className="glass p-4 rounded-xl border border-white/5 space-y-2">
                  <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FaBuilding className="text-secondary" />
                    About Regards Tech:
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <strong className="text-gray-200">Regards Tech</strong> (
                    <a
                      href="https://www.regardstech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      regardstech.com
                    </a>
                    ) is a full-service technology solutions provider and digital agency based in Dhaka, Bangladesh. They specialize in modern web and mobile applications, bespoke SaaS platforms, creative UI/UX design, cybersecurity, and digital growth services that empower businesses to scale efficiently.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FaLaptopCode className="text-primary" />
                    What I Do & Focus Areas:
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-2.5 text-sm text-gray-300">
                    <div className="flex items-start gap-2 glass p-2.5 rounded-lg border border-white/5">
                      <FaCheckCircle className="text-primary mt-1 shrink-0 text-xs" />
                      <span>Modern, responsive Web & App frontend development</span>
                    </div>
                    <div className="flex items-start gap-2 glass p-2.5 rounded-lg border border-white/5">
                      <FaCheckCircle className="text-secondary mt-1 shrink-0 text-xs" />
                      <span>Full-stack web solutions using React, Node & APIs</span>
                    </div>
                    <div className="flex items-start gap-2 glass p-2.5 rounded-lg border border-white/5">
                      <FaCheckCircle className="text-primary mt-1 shrink-0 text-xs" />
                      <span>Performance tuning, UI/UX refinement & mobile responsiveness</span>
                    </div>
                    <div className="flex items-start gap-2 glass p-2.5 rounded-lg border border-white/5">
                      <FaCheckCircle className="text-secondary mt-1 shrink-0 text-xs" />
                      <span>Collaborating in fast-paced agile development cycles</span>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['#RegardsTech', '#WebsiteDeveloper', '#AppDeveloper', '#ReactJS', '#TailwindCSS', '#FullStack', '#NewChapter'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 hover:text-white border border-white/5 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.regardstech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flower-hover btn-neon px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full flex items-center gap-2 relative z-10 text-sm md:text-base shadow-lg shadow-primary/20"
                  >
                    <span>Visit Regards Tech</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPosterOpen(true)}
                    className="px-6 py-3 border border-primary/50 text-white hover:text-primary hover:border-primary font-semibold rounded-full transition-all duration-300 flex items-center gap-2 text-sm md:text-base glass cursor-pointer"
                  >
                    <FaSearchPlus className="text-primary text-sm" />
                    <span>View Welcome Poster</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Poster */}
      <AnimatePresence>
        {isPosterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPosterOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center bg-dark/90 p-4 rounded-2xl border border-white/20 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setIsPosterOpen(false)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/80 transition-colors shadow-lg z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img
                src={welcomePoster}
                alt="Regards Tech Welcome Announcement"
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />
              <div className="w-full flex items-center justify-between px-2 pt-3">
                <span className="text-xs md:text-sm text-gray-300 font-medium">
                  Regards Tech • Welcome Shahin Miah
                </span>
                <a
                  href="https://www.regardstech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-primary hover:underline flex items-center gap-1.5"
                >
                  Visit Website <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
