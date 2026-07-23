import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { problemCards } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

export function ProblemSection() {
  return (
    <Container id="problem" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="The Challenge"
        title="The Problem We Are Solving"
        subtitle="Medication safety failures are among the leading causes of preventable harm in healthcare. The current ecosystem lacks a unified, intelligent approach to medication risk management."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {problemCards.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Icons.AlertCircle;
          return (
            <Card
              key={card.title}
              delay={index * 0.08}
              className="p-6 group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <IconComponent className="w-6 h-6 text-red-500" />
              </div>
              {card.stat && (
                <div className="text-2xl font-bold text-navy-900 mb-1">
                  {card.stat}
                </div>
              )}
              {card.statLabel && (
                <div className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">
                  {card.statLabel}
                </div>
              )}
              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Bottom impact statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 md:p-12 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          The Healthcare System Needs a Unified Solution
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Globally, adverse drug events result in millions of hospitalizations
          annually. In India alone, medication safety awareness remains critically
          low among patients and even many practitioners. The cost — human and
          financial — is staggering.
        </p>
      </motion.div>
    </Container>
  );
}
