'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioCompany } from '@/lib/data';

interface PortfolioCardProps {
  company: PortfolioCompany;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ company, index }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Defense Tech': 'bg-accent text-accent-foreground',
      'Financial Markets': 'bg-accent text-accent-foreground',
      'AI': 'bg-accent text-accent-foreground',
      'Aerospace': 'bg-accent text-accent-foreground',
      'Cybersecurity': 'bg-accent text-accent-foreground',
    };
    return colors[category as keyof typeof colors] || 'bg-accent text-accent-foreground';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="card card-hover h-full">
        {/* Logo - Removed as requested */}

        {/* Company Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {company.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Category Tag */}
        <div className="flex justify-center mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(company.category)}`}
          >
            {company.category}
          </span>
        </div>


        {/* Learn More Button */}
        <div className="mt-auto">
          <motion.a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2 px-4 border border-card-foreground text-card-foreground rounded-lg hover:bg-card-foreground hover:text-card transition-all duration-300 font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
