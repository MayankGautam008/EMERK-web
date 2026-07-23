import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { workflowSteps } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

export function WorkflowSection() {
  return (
    <Container id="workflow" className="py-24 lg:py-32">
      <SectionHeading
        badge="How It Works"
        title="EMERK Workflow — From Data to Decision"
        subtitle="A transparent, multi-stage AI pipeline that transforms raw medication data into actionable, explainable clinical intelligence."
      />

      {/* Desktop: Horizontal workflow */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-navy-200 to-teal-200" />

          <div className="grid grid-cols-8 gap-4">
            {workflowSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Icons.Circle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 mx-auto w-12 h-12 bg-white rounded-2xl border-2 border-teal-200 flex items-center justify-center shadow-md mb-4 group-hover:border-teal-400 transition-colors">
                    <IconComponent className="w-5 h-5 text-teal-600" />
                  </div>

                  {/* Step number */}
                  <div className="text-xs font-bold text-teal-500 mb-1">
                    Step {step.step}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-navy-900 mb-1 leading-tight">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Vertical workflow */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-teal-200 via-navy-200 to-teal-200" />

          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Icons.Circle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex items-start gap-5 pl-0"
                >
                  {/* Node */}
                  <div className="relative z-10 w-12 h-12 shrink-0 bg-white rounded-2xl border-2 border-teal-200 flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-teal-600" />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex-1">
                    <div className="text-xs font-bold text-teal-500 mb-1">
                      Step {step.step}
                    </div>
                    <h4 className="text-base font-bold text-navy-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
