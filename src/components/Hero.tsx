'use client';

import React from 'react';

export type HeroVideoSource = {
  src: string;
  type: string;
};

export type HeroProps = {
  sources: HeroVideoSource[];
  poster?: string;
  children: React.ReactNode;
};

const Hero: React.FC<HeroProps> = ({ sources, poster, children }) => {
  return (
    <section className="hero-first-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-navy-blue overflow-hidden">
        {/* Local MP4 Background Video - Fullscreen */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
          >
            {sources.map((source) => (
              <source key={`${source.src}-${source.type}`} src={source.src} type={source.type} />
            ))}
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
      <div className="relative z-30 container-custom text-center">{children}</div>
    </section>
  );
};

export default Hero;