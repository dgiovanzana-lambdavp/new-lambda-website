'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function AboutPage() {
  const taglines = [
    'We buy and build profitable niche software businesses.',
    'We provide flexible capital and operator-first execution.',
    'We move quickly. We prefer clarity over noise.',
  ];

  const whatWeLookFor = [
    'Vertical software and recurring-revenue businesses.',
    'Clear product-market fit in a definable niche.',
    'Predictable cash flow or a visible path to it.',
    'Teams willing to hand off day-to-day or partner on growth.',
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/50" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm md:text-base">
                Lambda Capital
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-12 text-foreground">
              We Buy & Build
              <br />
              <span className="text-gradient bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Profitable Businesses
              </span>
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed">
              {taglines.map((tagline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p>{tagline}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do - Creative Card Design */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                1
              </motion.div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  What we do
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-muted leading-relaxed">
                  We deploy patient, pragmatic capital across companies and situations where others overcomplicate the deal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-muted leading-relaxed">
                  We work with founders who want an honest buyer and with teams who need a partner that can operate and scale revenue.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-muted leading-relaxed">
                  We invest across structures and stages. The details depend on the opportunity.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we look for - Visual List Design */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                2
              </motion.div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  What we look for
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {whatWeLookFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold group-hover:bg-accent group-hover:text-white transition-colors mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed pt-1">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-lg text-muted mb-6">
                If your company roughly fits the above, reach out.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How we partner - Side by side */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                3
              </motion.div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  How we partner
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  We tailor the deal to the company. Sometimes we lead operations. Sometimes we back the founder.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  We prefer agreements that align incentives and simplify execution. We are operationally capable and expect to work with management, not around it.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Permanent capital - Feature Highlight */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                4
              </motion.div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  Permanent capital and long-term ownership
                </h2>
              </div>
            </div>

            <div className="card p-8 md:p-12 bg-gradient-to-br from-accent/5 to-background border-2 border-accent/20">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">30+</div>
                  <div className="text-muted">Years holding capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">∞</div>
                  <div className="text-muted">No forced exit timing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted">Focus on durable value</div>
                </div>
              </div>

              <div className="space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  We are a permanent capital holding company. We can hold and steward businesses for decades when that best serves owners and customers.
                </p>
                <p>
                  No forced exit timing. No selling pressure. That lets us focus on durable cash flow, margin expansion, and repeatable operational improvements.
                </p>
                <p>
                  We take a long view that is inspired by long-term owners who have kept excellent companies for 30+ years.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track record - Split Design */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                5
              </motion.div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  Track record and approach
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-8 border-l-4 border-accent"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">We buy to operate</h3>
                <p className="text-lg text-muted leading-relaxed">
                  We focus on profitable outcomes and repeatable operational improvements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card p-8 border-l-4 border-accent"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Efficiency over complexity</h3>
                <p className="text-lg text-muted leading-relaxed">
                  We keep capital efficiency high and complexity low. We value durable margins more than flashy growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-secondary/30 to-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to connect?
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Explore our portfolio or get in touch to discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/portfolio" variant="primary" size="lg">
                View Our Portfolio
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal / compliance note */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-muted">Legal / compliance note</span>
            </div>
            <p className="text-base text-muted leading-relaxed">
              This site is for informational purposes only and not an offer to sell or solicitation to buy securities. We work with accredited and institutional counterparties when required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
