import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import uni from "../assets/university.jpeg"
import gocy from "../assets/grocity.png"
import burak from "../assets/burak.png"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Full-Stack Web Application',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB',
      description:
        'A University Management System simplifies administrative operations, enhances academic management, and provides a seamless digital experience for students, faculty, and staff',
      github: 'https://github.com/FDR-sahin',
      demo: '#',
      color: 'from-blue-500 to-purple-500',
      image:uni
    },
    {
      title: 'Full-Stack Grocity Web Application',
      tech: 'HTML5, Tailwind CSS, JavaScript (ES6+), Firebase',
      description:
        'Developed an admin dashboard featuring secure login credentials, role-based user access, and dynamic analytics viewports. Optimized assets and CSS rendering paths to achieve seamless responsiveness across all screen dimensions.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://velvety-custard-6c08d5.netlify.app/',
      color: 'from-green-500 to-teal-500',
      image:gocy
    },
    {
      title: 'Business Web Site',
      tech: 'React, Firebase, Express, Node.js, CSS3',
      description:
        'Collaborative task board with drag-and-drop functionality, real-time updates, and Firebase authentication for team collaboration.',
      github: 'https://github.com/FDR-sahin',
      demo: 'https://burakoil.netlify.app/',
      color: 'from-orange-500 to-red-500',
      image:burak
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flower-hover glass rounded-2xl overflow-hidden group"
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl rounded-[20px]`}
              >
                <img className='w-full h-full object-cover rounded-t-[20px]' src={project.image} alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;