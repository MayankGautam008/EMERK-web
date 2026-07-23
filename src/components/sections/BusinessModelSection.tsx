import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { businessModels } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

export function BusinessModelSection() {
  return (
    <Container id="business" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Business Model"
        title="Revenue Model & Strategy"
        subtitle="A diversified, scalable revenue model designed for sustainable growth across multiple healthcare market segments."
      />

      {/* Revenue streams */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {businessModels.map((model, index) => {
          const IconComponent = iconMap[model.icon] || Icons.DollarSign;
          return (
            <Card key={model.title} delay={index * 0.08} className="p-6 group">
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                <IconComponent className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {model.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {model.description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Revenue Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12"
      >
        <h3 className="text-xl font-bold text-navy-900 mb-8 text-center">
          Revenue Flow
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {[
            { label: 'Healthcare Clients', sub: 'Hospitals, Clinics, Pharma' },
            { label: 'EMERK Platform', sub: 'SaaS + API + Analytics' },
            { label: 'Revenue Streams', sub: 'Subscriptions, Licenses, Services' },
            { label: 'Reinvestment', sub: 'R&D, AI, Growth' },
          ].map((node, i) => (
            <div key={node.label} className="flex items-center gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-xl p-4 border border-gray-100 text-center min-w-[140px]">
                <div className="text-sm font-bold text-navy-900">{node.label}</div>
                <div className="text-xs text-gray-500 mt-1">{node.sub}</div>
              </div>
              {i < 3 && (
                <ArrowRight className="w-5 h-5 text-teal-400 shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
