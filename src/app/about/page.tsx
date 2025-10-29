'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { focusAreas, values } from '@/lib/data';
import Button from '@/components/Button';

export default function AboutPage() {
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
              About Lambda Capital
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Lambda Capital is a venture capital firm dedicated to investing in the next generation of defense technology companies. 
              Our mission is to strengthen national security through strategic investments in breakthrough technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Investment Thesis
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Lambda Capital believes the future of national security depends on technological superiority. 
              Our investment strategy focuses on four critical domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card card-hover text-center group"
              >
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-900 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Approach
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We take a hands-on approach to building companies that matter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Partnership
              </h3>
              <p className="text-lg text-gray-900 leading-relaxed mb-6">
                Lambda Capital doesndoesn'tapos;t just provide capital – we offer deep industry expertise, strategic guidance, 
                and access to our network of defense contractors, government agencies, and technology leaders.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed mb-8">
                Our team has decades of combined experience in defense technology, military operations, 
                and venture capital, giving us unique insights into what it takes to build successful companies in this space.
              </p>
              <Button href="/team" variant="primary" size="lg">
                Meet Our Team
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">50+</div>
                <div className="text-gray-900">Years Combined Experience</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-bright-green mb-2">100+</div>
                <div className="text-gray-900">Industry Connections</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-tactical-orange mb-2">24/7</div>
                <div className="text-gray-900">Support Available</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">10+</div>
                <div className="text-gray-900">Years Average Partnership</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              The principles that guide every decision Lambda Capital makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card card-hover group"
              >
                <h3 className="text-2xl font-semibold text-card-foreground mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-900 leading-relaxed text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with <span className="text-white">Us?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              If you're building the next generation of defense technology, Lambda Capital wants to hear from you. 
              Let's discuss how we can help accelerate your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Start a Conversation
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
