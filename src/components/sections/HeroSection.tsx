import { motion } from 'framer-motion';
import {
  ExternalLink,
  CalendarCheck,
  Cpu,
  WifiOff,
  Brain,
  Shield,
  Sparkles,
} from 'lucide-react';
import { Button } from '../ui/Button';

const LAUNCH_URL = 'https://adr-2.onrender.com';

const trustBadges = [
  { icon: Cpu, label: 'AI-Powered' },
  { icon: WifiOff, label: 'Offline-First' },
  { icon: Brain, label: 'Explainable AI' },
  { icon: Shield, label: 'Pharmacovigilance' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/30" />
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-teal-100/40 to-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-navy-100/20 to-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-50/20 to-cyan-50/20 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,27,61,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,27,61,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">
                AI-Powered Preventive Medication Intelligence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-[1.1] mb-6"
            >
              <span className="bg-gradient-to-r from-navy-800 via-navy-700 to-teal-600 bg-clip-text text-transparent">
                EMERK
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-navy-800">
                Medication Safety,
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-navy-700">
                Reimagined by AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-4 max-w-xl"
            >
              Identify, analyze, and predict medication-related risks before
              they become serious healthcare complications — with explainable,
              offline-capable AI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg font-semibold text-teal-600 tracking-wide mb-8"
            >
              Predict. Protect. Prevent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                href={LAUNCH_URL}
                icon={<ExternalLink className="w-5 h-5" />}
              >
                Launch EMERK Application
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<CalendarCheck className="w-5 h-5" />}
              >
                Book a Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm text-sm text-gray-600 font-medium"
                >
                  <badge.icon className="w-4 h-4 text-teal-500" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card - mimics dashboard */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-navy-900/10 border border-gray-100 p-8 relative overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-6 bg-gray-100 rounded-lg" />
                </div>

                {/* Mock dashboard content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Drugs Monitored', value: '52', color: 'from-teal-500 to-cyan-500' },
                      { label: 'ADR Reports', value: '347', color: 'from-navy-600 to-blue-500' },
                      { label: 'Interactions', value: '1,256', color: 'from-amber-500 to-orange-400' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Risk bars */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-sm font-semibold text-navy-800 mb-3">
                      Severity Breakdown
                    </div>
                    {[
                      { label: 'Mild', width: '45%', color: 'bg-blue-500' },
                      { label: 'Moderate', width: '47%', color: 'bg-amber-500' },
                      { label: 'Severe', width: '8%', color: 'bg-red-500' },
                    ].map((bar) => (
                      <div key={bar.label} className="mb-2 last:mb-0">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>{bar.label}</span>
                          <span>{bar.width}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: bar.width }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className={`h-full ${bar.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI insights */}
                  <div className="flex items-center gap-3 bg-teal-50 rounded-xl p-3 border border-teal-100">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-teal-800">
                        AI Safety Analysis Active
                      </div>
                      <div className="text-[11px] text-teal-600">
                        Real-time medication risk monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-800">Safe</div>
                    <div className="text-[10px] text-gray-400">No interactions</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-800">
                      Offline Ready
                    </div>
                    <div className="text-[10px] text-gray-400">
                      Local AI active
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
