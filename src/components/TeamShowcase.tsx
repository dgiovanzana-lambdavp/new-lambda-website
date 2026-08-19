'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/lib/data';

function SocialLinks({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-5 pt-2">
      {member.email && (
        <motion.a
          href={`mailto:${member.email}`}
          className="text-text-muted hover:text-brand-red transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Email ${member.name}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.a>
      )}
      {member.linkedin && (
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-brand-red transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${member.name} on LinkedIn`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      )}
      {member.twitter && (
        <motion.a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-brand-red transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${member.name} on X`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </motion.a>
      )}
    </div>
  );
}

export default function TeamShowcase({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65 }}
      className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24 lg:py-28 border-b border-gray-200/80 last:border-b-0"
    >
      <div className={`w-full ${reverse ? 'md:order-2' : ''}`}>
        <div className="relative mx-auto aspect-[4/5] max-w-md md:max-w-none rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-tactical-gray/30">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-red/90">
              <span className="text-white font-bold text-4xl md:text-5xl">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className={`flex flex-col justify-center ${reverse ? 'md:order-1' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
        <div className="mb-6">
          <p className="text-xl text-brand-red font-semibold">{member.title}</p>
          {member.subtitle && (
            <p className="text-lg text-text-secondary mt-1">{member.subtitle}</p>
          )}
        </div>
        <div className="prose prose-lg max-w-none">
          {member.bio ? (
            <p className="text-text-secondary leading-relaxed whitespace-pre-line text-base md:text-lg">
              {member.bio}
            </p>
          ) : null}
        </div>
        <SocialLinks member={member} />
      </div>
    </motion.article>
  );
}
