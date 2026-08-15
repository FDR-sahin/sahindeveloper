import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="gradient-text font-semibold">Sahin Miah</span>. All rights reserved.
          </p>

          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;