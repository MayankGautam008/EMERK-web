import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            light
              ? 'bg-white/10 text-white/90 border border-white/20'
              : 'bg-teal-50 text-teal-700 border border-teal-100'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
