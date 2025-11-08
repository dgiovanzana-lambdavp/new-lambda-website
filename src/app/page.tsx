'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioCompanies, focusAreas } from '@/lib/data';
import Button from '@/components/Button';

export default function HomePage() {
  // Get first 6 portfolio companies for homepage preview
  const featuredCompanies = portfolioCompanies.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mission Statement */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Permanent, Patient <span className="text-foreground">Capital</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
          Lambda Capital is a permanent capital holding company. We take a patient approach and invest for the long term.
        </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
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

      {/* Focus Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-foreground">Focus Areas</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Lambda Capital invests in vertical market technology companies that strengthen our national security and core sectors of our economy. Our portfolio is purposefully concentrated, enabling us to provide deep expertise and strategic value to our portfolio companies.
            </p>
          </motion.div>

          {/* Focus area cards - layout inspired by the provided screenshot, using our colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="card card-hover text-left group"
              >
                {/* Icon */}
                <div className="mb-5">
                  <FocusIcon id={(area as any).id} />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                  {area.title}
                </h3>
                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                {/* Accent underline */}
                <div className="h-1 w-20 bg-accent rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio <span className="text-foreground">Companies</span>
            </h2>
            <Button href="/portfolio" variant="secondary" size="lg">
              View All Companies
            </Button>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {featuredCompanies.map((company, index) => (
              <div key={company.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm">
                <PortfolioCard company={company} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tactical-navy to-tactical-green">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the <span className="text-foreground">Future?</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Whether you're a founder with a breakthrough technology or an investor looking to support critical industries, 
              Lambda Capital would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Small inline icon set to replace emojis while keeping a clean, professional look
function FocusIcon({ id }: { id: string }) {
  const base = 'w-10 h-10 text-accent';
  switch (id) {
    case 'financial':
      // Building/Library (financial/vertical SaaS)
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M4.5 21V10m3 11V10m3 11V10m3 11V10m3 11V10M12 3l9 4.5H3L12 3z" />
        </svg>
      );
    case 'govtech':
      // Shield
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6a7 7 0 01-7 7 7 7 0 01-7-7V7l7-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.5l2 2 3.5-3.5" />
        </svg>
      );
    case 'compliance':
      // Clipboard check
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6m2 2h1a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 13l2 2 4-4" />
        </svg>
      );
    case 'niche':
    default:
      // Sparkles
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l2-4 2 4 2 4-4-2-4-2 2-4m10-8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
        </svg>
      );
  }
}
