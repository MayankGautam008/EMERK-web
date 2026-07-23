import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { solutionFeatures } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

const gradients = [
  'from-teal-500 to-cyan-500',
  'from-navy-600 to-blue-500',
  'from-emerald-500 to-teal-500',
  'from-indigo-500 to-blue-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
  'from-cyan-500 to-sky-500',
  'from-rose-500 to-pink-500',
];

export function SolutionSection() {
  return (
    <Container id="solution" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Our Solution"
        title="EMERK's Proposed Solution"
        subtitle="A unified AI-powered medication safety ecosystem that combines multiple risk analysis capabilities into a single, intelligent, explainable platform."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutionFeatures.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] || Icons.Zap;
          return (
            <Card
              key={feature.title}
              delay={index * 0.08}
              className="p-6 group relative overflow-hidden"
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradients[index % gradients.length]} shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
