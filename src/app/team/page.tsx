'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '@/components/TeamCard';
import { teamMembers } from '@/lib/data';
import Button from '@/components/Button';

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              The Lambda Capital team combines deep technical expertise with operational and strategic experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Team Expertise
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Lambda Capital is a permanent capital holding company. We take a patient approach and invest for the long term.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">~4x</div>
                <div className="text-muted">Avg. ARR growth per company</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">$186M</div>
                <div className="text-muted">Invested<span className="text-xs block mt-1">*Career total</span></div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">$5B+</div>
                <div className="text-muted">Total transaction value<span className="text-xs block mt-1">*Career total</span></div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">400+</div>
                <div className="text-muted">Companies met per year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Work with Us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
