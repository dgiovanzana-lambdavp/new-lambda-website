'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import Button from '@/components/Button';
import { portfolioCompanies } from '@/lib/data';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(portfolioCompanies.map(company => company.category)))];
  
  // Filter companies based on selected category
  const filteredCompanies = selectedCategory === 'All' 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="text-foreground">Portfolio</span>
            </h1>
            
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-card-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-tactical-gray/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-muted">
              Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard company={company} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredCompanies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">No companies found</h3>
              <p className="text-muted">
                Try selecting a different category to see more companies.
              </p>
            </motion.div>
          )}
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
              Ready to <span className="text-foreground">partner</span> with us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="mailto:info@lambdavp.com" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/team" variant="secondary" size="lg">
                See Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

