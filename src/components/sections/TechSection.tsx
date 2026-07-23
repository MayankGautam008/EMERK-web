import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { techCards } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

const categoryColors: Record<string, string> = {
  'Interaction Prediction': 'bg-purple-50 text-purple-600 border-purple-100',
  'Risk Scoring': 'bg-amber-50 text-amber-600 border-amber-100',
  'ADR Prediction': 'bg-red-50 text-red-600 border-red-100',
  'Medical Relationships': 'bg-blue-50 text-blue-600 border-blue-100',
  'Medical NLP': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Knowledge Retrieval': 'bg-cyan-50 text-cyan-600 border-cyan-100',
  'Explainable AI': 'bg-teal-50 text-teal-600 border-teal-100',
  'Privacy-Preserving AI': 'bg-indigo-50 text-indigo-600 border-indigo-100',
};

export function TechSection() {
  return (
    <Container id="technology" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Technology Stack"
        title="AI/ML Technologies & Algorithms"
        subtitle="EMERK leverages cutting-edge AI/ML research to deliver accurate, explainable, and privacy-preserving medication intelligence."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCards.map((tech, index) => {
          const IconComponent = iconMap[tech.icon] || Icons.Cpu;
          const categoryColor =
            categoryColors[tech.category] ||
            'bg-gray-50 text-gray-600 border-gray-100';

          return (
            <Card
              key={tech.name}
              delay={index * 0.08}
              className="p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                  <IconComponent className="w-6 h-6 text-navy-700" />
                </div>
              </div>

              <span
                className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold border mb-3 ${categoryColor}`}
              >
                {tech.category}
              </span>

              <h3 className="text-base font-bold text-navy-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {tech.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
