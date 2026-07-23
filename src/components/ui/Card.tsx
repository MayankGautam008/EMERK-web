import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  delay?: number;
}

export function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={
        hover
          ? { y: -6, boxShadow: '0 20px 40px -12px rgba(15, 27, 61, 0.15)' }
          : undefined
      }
      className={`
        bg-white rounded-2xl border border-gray-100 
        shadow-sm transition-all duration-300
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
