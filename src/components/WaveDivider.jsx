import React from 'react';

const WaveDivider = ({ color = 'from-primary/20 to-secondary/20' }) => {
  return (
    <div className="relative w-full overflow-hidden h-20 md:h-32">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6C63FF', stopOpacity: 0.15 }} />
            <stop offset="50%" style={{ stopColor: '#FF6584', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#6C63FF', stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,30 C300,100 600,0 900,60 C1050,90 1150,40 1200,30 L1200,120 L0,120 Z"
          fill="url(#waveGrad)"
          className="animate-wave"
        />
        <path
          d="M0,50 C200,10 500,80 800,30 C1000,0 1100,50 1200,40 L1200,120 L0,120 Z"
          fill="url(#waveGrad)"
          className="animate-wave"
          style={{ animationDelay: '2s', opacity: 0.6 }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;