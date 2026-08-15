import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import sahin from "../assets/babu.jpeg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* টেক্সট কন্টেন্ট */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-lg font-semibold mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Sahin Miah</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 font-light mb-6"
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              Passionate, results-oriented Full Stack Developer with{" "}
              <span className="text-primary font-semibold">2+ years</span> of
              experience. Specialized in{" "}
              <span className="text-primary font-semibold">MERN Stack</span>,
              Tailwind CSS, and Firebase.
            </motion.p>

            {/* বাটন */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flower-hover btn-neon px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full relative z-10"
              >
                Hire Me 🌸
              </motion.a>

              {/* ✅ রিজিউম ডাউনলোড বাটন */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sahin_Miah_Resume_v2.pdf"
                download="Sahin_Miah_Resume_v2.pdf"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* সোশ্যাল আইকন */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: FaGithub, link: "https://github.com/FDR-sahin" },
                { icon: FaLinkedin, link: "#" },
                { icon: FaEnvelope, link: "mailto:sahin.dev1067@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* প্রোফাইল ইমেজ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className=" lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className=" w-64 h-64 md:w-80 md:h-80 rounded-full glass flex items-center justify-center overflow-hidden border-4 border-primary/30 "
              >
                <div className=" w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl">
                  <img className="" src={sahin} alt="" />
                </div>
              </motion.div>

              {/* ফ্লোটিং এলিমেন্ট */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
