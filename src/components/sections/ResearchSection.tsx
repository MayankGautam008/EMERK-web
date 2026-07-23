import { motion } from 'framer-motion';
import { Check, Clock, Circle } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { researchMilestones } from '../../data/siteData';

const statusConfig = {
  completed: {
    icon: Check,
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    badge: 'bg-green-50 text-green-700 border-green-100',
    label: 'Completed',
  },
  'in-progress': {
    icon: Clock,
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    label: 'In Progress',
  },
  upcoming: {
    icon: Circle,
    color: 'bg-gray-300',
    borderColor: 'border-gray-300',
    badge: 'bg-gray-50 text-gray-600 border-gray-100',
    label: 'Upcoming',
  },
};

export function ResearchSection() {
  return (
    <Container id="research" className="py-24 lg:py-32">
      <SectionHeading
        badge="Research & IP"
        title="Research & Patent Roadmap"
        subtitle="EMERK is built on a foundation of rigorous research, with a clear roadmap for academic publications and intellectual property protection."
      />

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-amber-300 to-gray-200 transform md:-translate-x-0.5" />

        <div className="space-y-12">
          {researchMilestones.map((milestone, index) => {
            const config = statusConfig[milestone.status];
            const StatusIcon = config.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${config.color} flex items-center justify-center shadow-lg`}
                  >
                    <StatusIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                    isLeft ? '' : 'md:ml-auto'
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-navy-900">
                        {milestone.year} {milestone.quarter}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${config.badge}`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Research topics callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 bg-navy-50 border border-navy-100 rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold text-navy-900 mb-3">
          10+ Planned Research Papers
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Covering knowledge graph optimization, real-world evidence mining,
          multi-modal patient risk modeling, explainable clinical AI, and
          autonomous medication safety agents — positioning EMERK at the
          forefront of healthcare AI research.
        </p>
      </motion.div>
    </Container>
  );
}
