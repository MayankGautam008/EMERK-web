import { motion } from 'framer-motion';
import {
  WifiOff,
  Database,
  Cpu,
  Cloud,
  MapPin,
  ArrowRight,
  Shield,
  RefreshCw,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const offlineFeatures = [
  {
    icon: Shield,
    title: 'Critical Safety Checks Offline',
    description:
      'Core medication safety checks — drug interactions, contraindications, and dosage verification — work without internet connectivity.',
  },
  {
    icon: Database,
    title: 'Local Drug Database',
    description:
      'A complete medication database stored securely on-device, ensuring access to essential drug information anywhere.',
  },
  {
    icon: Cpu,
    title: 'Lightweight AI Models',
    description:
      'Optimized AI models running via ONNX Runtime Mobile / TensorFlow Lite for fast, offline-capable inference on mobile devices.',
  },
  {
    icon: Cloud,
    title: 'Secure Cloud Sync',
    description:
      'When internet is available, data syncs securely with the cloud for updates, analytics, and enhanced AI capabilities.',
  },
  {
    icon: MapPin,
    title: 'Rural & Low-Resource Ready',
    description:
      'Designed for reliability in areas with limited internet — rural clinics, field healthcare, and underserved communities.',
  },
];

export function OfflineSection() {
  return (
    <Container id="offline" className="py-24 lg:py-32">
      <SectionHeading
        badge="Architecture"
        title="Offline-First AI Architecture"
        subtitle="Critical medication safety should never depend on an internet connection. EMERK is built offline-first, ensuring reliable access to life-saving intelligence everywhere."
      />

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {offlineFeatures.map((feature, index) => (
          <Card key={feature.title} delay={index * 0.1} className="p-6 group">
            <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
              <feature.icon className="w-6 h-6 text-navy-700" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-12 overflow-hidden relative"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <h3 className="text-xl font-bold text-white mb-8 text-center relative z-10">
          Architecture Overview
        </h3>

        <div className="relative z-10">
          {/* Diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
            {/* Local Device */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 flex-1 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <WifiOff className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Local Device
                  </div>
                  <div className="text-xs text-gray-400">
                    Offline Capable
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  'Local Drug Database',
                  'ONNX/TFLite Models',
                  'Interaction Checker',
                  'Risk Scoring Engine',
                  'Encrypted Patient Data',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sync Arrow */}
            <div className="flex flex-col items-center gap-2 py-4 lg:py-0">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RefreshCw className="w-6 h-6 text-cyan-400 rotate-0 lg:rotate-0" />
              </motion.div>
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-cyan-400/50" />
              </div>
              <div className="text-[10px] text-cyan-400 font-medium">
                Secure Sync
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 flex-1 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    EMERK Cloud
                  </div>
                  <div className="text-xs text-gray-400">
                    Enhanced Intelligence
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  'Full AI Pipeline',
                  'Knowledge Graph (Neo4j)',
                  'LLM + RAG Engine',
                  'Pharmacovigilance DB',
                  'Analytics & Reporting',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
