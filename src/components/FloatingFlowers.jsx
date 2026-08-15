import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // const flowerEmojis = ['🌸', '🌺', '🌻', '🌹', '🌷', '🌸', '🌼'];
    const flowerEmojis = [
  '⚡', // JavaScript (JS-এর হলুদ সংকেতের সাথে মানানসই)
  '🟢', // Node.js (সবুজ কালার সংকেত)
  '⚛️', // React (অ্যাটম বা পরমাণু আইকন)
  '🎨', // Tailwind CSS (স্টাইলিং/ডিজাইন)
  '🍃', // MongoDB (পাতার সিম্বল)
  '🚀', // Express.js (দ্রুত ব্যাকএন্ড ফ্রেমওয়ার্ক)
  '☕', // Java (কফির কাপ)
  '🐬'  // MySQL (ডলফিন লোগোর সাথে সামঞ্জস্যপূর্ণ)
];
    const newFlowers = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: flowerEmojis[i % flowerEmojis.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      rotate: Math.random() * 360,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute text-opacity-20"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: 'easeInOut',
          }}
        >
          {flower.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlowers;