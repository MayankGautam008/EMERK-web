import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

const LAUNCH_URL = 'https://adr-2.onrender.com';

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10">
            Get Started
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Build a Safer
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Healthcare Future?
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Join hospitals, pharmaceutical companies, and healthcare
            institutions in building a world where every medication comes with
            proactive risk awareness — not reactive treatment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              href={LAUNCH_URL}
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Launch EMERK Application
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="mailto:contact@emerk.in"
              icon={<Mail className="w-5 h-5" />}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
