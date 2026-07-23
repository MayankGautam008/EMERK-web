import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { futureVisions } from '../../data/siteData';

const iconMap: Record<string, any> = Icons;

export function FutureVisionSection() {
  return (
    <section id="vision" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          badge="Future Vision"
          title="The Future of Medication Intelligence"
          subtitle="EMERK's roadmap extends toward autonomous AI agents, global networks, and deeply personalized medication safety — redefining how healthcare protects patients."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureVisions.map((vision, index) => {
            const IconComponent = iconMap[vision.icon] || Icons.Rocket;
            return (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {vision.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {vision.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
