import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useCases } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

export function UseCasesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container id="use-cases" className="py-24 lg:py-32">
      <SectionHeading
        badge="Applications"
        title="Applications & Use Cases"
        subtitle="EMERK delivers value across the entire healthcare ecosystem — from individual patients to national health systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => {
          const IconComponent = iconMap[useCase.icon] || Icons.Users;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={useCase.userType}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-teal-600" />
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {useCase.userType}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {useCase.description}
              </p>

              {/* Benefits — revealed on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      {useCase.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-2 text-xs text-gray-500"
                        >
                          <ChevronRight className="w-3 h-3 text-teal-500 shrink-0 mt-0.5" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
