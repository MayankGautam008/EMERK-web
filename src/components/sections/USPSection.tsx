import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { usps } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

const gradients = [
  'from-teal-500 to-cyan-500',
  'from-navy-600 to-blue-600',
  'from-violet-500 to-purple-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-orange-500',
  'from-cyan-500 to-sky-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-violet-500',
];

export function USPSection() {
  return (
    <Container id="usp" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Why EMERK"
        title="Unique Selling Propositions"
        subtitle="What makes EMERK fundamentally different from every existing medication safety solution in the market."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {usps.map((usp, index) => {
          const IconComponent = iconMap[usp.icon] || Icons.Sparkles;
          const gradient = gradients[index % gradients.length];

          return (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradient} shadow-lg`}
              >
                <IconComponent className="w-7 h-7 text-white" />
              </div>

              <h3 className="relative text-lg font-bold text-navy-900 mb-2">
                {usp.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
