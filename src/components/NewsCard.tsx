'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '@/lib/data';

interface NewsCardProps {
  newsItem: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, index }) => {
  /**
   * Format a plain calendar date without letting the reader's timezone
   * shift it.
   *
   * `new Date('2025-10-01')` parses as midnight UTC, but
   * `toLocaleDateString` renders in the local zone. On a server running
   * UTC that prints "October 1, 2025"; in any US timezone the same
   * instant is still the previous evening, so the browser prints
   * "September 30, 2025".
   *
   * Two bugs at once: the date is simply wrong for anyone west of UTC,
   * and the server and client HTML disagree, which React reports as
   * hydration error #418.
   *
   * Pinning the output zone to UTC matches how the value was parsed, so
   * what renders is the date that was written in the data.
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card card-hover h-full flex flex-col group"
    >
      {/* Source Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
          {newsItem.source}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {newsItem.title}
      </h3>

      {/* Excerpt */}
      <p className="text-muted text-sm leading-relaxed mb-4 flex-grow" style={{
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {newsItem.excerpt}
      </p>

      {/* Date and Link */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {formatDate(newsItem.date)}
          </span>
          <motion.a
            href={newsItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;

