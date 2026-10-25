import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Website & App Developer',
      company: 'Regards Tech (regardstech.com)',
      period: '2024 – Present',
      icon: FaBriefcase,
      description: [
        'Developing high-performance, responsive web applications and mobile-friendly digital interfaces.',
        'Collaborating with cross-functional engineering teams to build custom SaaS solutions and client web portals.',
        'Translating design wireframes and UI/UX prototypes into pixel-perfect, accessible, and optimized interactive code.',
        'Utilizing React.js, modern JavaScript ecosystems, and API integrations to deliver scalable digital experiences.',
      ],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Freelance / Independent Web Development Projects',
      period: '2024 – Present',
      icon: FaBriefcase,
      description: [
        'Engineered, tested, and deployed end-to-end full-stack web applications using React.js for interactive frontend rendering and Node.js/Express.js for robust backend execution.',
        'Designed mobile-first, high-performance user interfaces using Tailwind CSS and modern CSS grid/flex layout techniques.',
        'Integrated MongoDB and Firebase for dynamic data persistence, secure OAuth authentication, and real-time database query processing.',
        'Utilized Git & GitHub for version control, structured commit tracking, and seamless repository hosting.',
      ],
    },
    {
      title: 'Problem Solver & Algorithm Enthusiast',
      company: 'Competitive Programming & DSA Practice',
      period: '2023 – Present',
      icon: FaCode,
      description: [
        'Strong foundation in Data Structures & Algorithms using C, C++, Java, and Python.',
        'Solved 150+ coding problems on LeetCode & Codeforces.',
        'Applied algorithmic thinking to optimize web application performance.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* টাইমলাইন লাইন */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* আইকন */}
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary text-2xl z-10 border-2 border-primary/30">
                  <exp.icon />
                </div>

                {/* কন্টেন্ট */}
                <div className="flex-1 glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-primary font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
