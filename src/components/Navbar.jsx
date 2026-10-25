import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // স্ক্রল ফাংশন (মোবাইল ও ডেস্কটপের জন্য)
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 70;
        const elementPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Hackathon",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-dark/80 backdrop-blur-sm py-3"
      }`}
      style={{ top: 0, left: 0, right: 0 }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* লোগো */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          Sahin.dev
        </motion.a>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ scale: 1.1, color: "#6C63FF" }}
              onClick={() => handleNavClick(link.toLowerCase())}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer bg-transparent border-none text-sm lg:text-base"
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* ✅ মোবাইল মেনু বাটন */}
        <button
          className="md:hidden text-white text-2xl z-50 relative p-2.5 rounded-xl glass hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg shadow-primary/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{ backgroundColor: "rgba(10, 10, 26, 0.7)" }}
        >
          {isOpen ? <FaTimes className="text-primary" /> : <FaBars />}
        </button>
      </div>

      {/* মোবাইল ড্রপডাউন */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass"
        style={{ backgroundColor: "rgba(10, 10, 26, 0.95)" }}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link.toLowerCase())}
              className="text-gray-300 hover:text-white hover:bg-primary/20 transition-all duration-300 font-medium text-lg cursor-pointer bg-transparent border-none w-full text-center py-3 rounded-xl"
            >
              {link}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
