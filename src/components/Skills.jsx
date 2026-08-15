import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiCplusplus,
  SiC,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5 & CSS3', icon: '🌐', color: '#E34F26' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'RESTful API Design', icon: '🔗', color: '#FF6B6B' },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase Auth & Firestore', icon: SiFirebase, color: '#FFCA28' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ],
    },
    {
      title: 'Languages & Tools',
      skills: [
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flower-hover glass p-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 bg-dark/50 p-3 rounded-xl"
                  >
                    <span className="text-2xl" style={{ color: skill.color }}>
                      {typeof skill.icon === 'function' ? (
                        <skill.icon />
                      ) : (
                        skill.icon
                      )}
                    </span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;