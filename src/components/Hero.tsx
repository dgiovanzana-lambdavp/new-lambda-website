'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-navy-blue overflow-hidden">
        {/* Local MP4 Background Video - Fullscreen */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <video
            className="absolute top-1/2 left-1/2 w-screen h-screen"
            style={{
              transform: 'translate(-50%, -50%)',
              minWidth: '100vw',
              minHeight: '100vh',
              width: '177.77vh',
              height: '56.25vw',
              objectFit: 'cover'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={encodeURI('/Defense+ v2.mp4')} type="video/mp4" />
          </video>
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-900/40 to-gray-950/80 z-10" />
        {/* Extra top cover to mask YouTube UI (title/watch-later) */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-black/70 to-transparent z-20" />
        <div className="absolute inset-0 tactical-grid opacity-20 z-10" />
        <div className="absolute inset-0 noise-texture opacity-10 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              Lambda Capital
            </h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Investing in mission-critical technology
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
          <Button href="/portfolio" variant="white" size="lg">
            View Our Portfolio
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
