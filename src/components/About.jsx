import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
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
      </div>
    </section>
  );
};

export default About;