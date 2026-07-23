import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { platformFeatures } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;
const LAUNCH_URL = 'https://adr-2.onrender.com';

const featureGradients = [
  'from-blue-500 to-indigo-500',
  'from-teal-500 to-emerald-500',
  'from-purple-500 to-violet-500',
  'from-amber-500 to-orange-500',
  'from-cyan-500 to-sky-500',
  'from-rose-500 to-pink-500',
  'from-navy-600 to-blue-600',
];

export function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Container id="features" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Platform Features"
        title="Core Platform Features"
        subtitle="Explore EMERK's comprehensive medication safety platform — built for patients, doctors, and healthcare institutions."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {platformFeatures.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] || Icons.Box;
          const isExpanded = expandedIndex === index;
          const gradient = featureGradients[index % featureGradients.length];

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                index === platformFeatures.length - 1 && platformFeatures.length % 3 === 1
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* App-like preview bar */}
              <div className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                {/* Mock browser dots */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {feature.details && (
                  <>
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Show less' : 'Learn more'}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                            {feature.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Button
          variant="cta"
          size="lg"
          href={LAUNCH_URL}
          icon={<ExternalLink className="w-5 h-5" />}
        >
          Launch EMERK Application
        </Button>
      </motion.div>
    </Container>
  );
}
