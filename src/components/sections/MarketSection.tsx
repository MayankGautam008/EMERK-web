import { motion } from 'framer-motion';
import {
  Heart,
  Stethoscope,
  Building2,
  Store,
  FlaskConical,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Factory,
  TrendingUp,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const targetClients = [
  { icon: Heart, label: 'Patients' },
  { icon: Stethoscope, label: 'Doctors' },
  { icon: Building2, label: 'Hospitals' },
  { icon: Store, label: 'Pharmacies' },
  { icon: FlaskConical, label: 'Pharma Companies' },
  { icon: Landmark, label: 'Government' },
  { icon: ShieldCheck, label: 'Insurance' },
  { icon: GraduationCap, label: 'Research' },
  { icon: Factory, label: 'Healthcare Orgs' },
];

export function MarketSection() {
  return (
    <Container id="market" className="py-24 lg:py-32">
      <SectionHeading
        badge="Market Opportunity"
        title="Potential Clients & Market Opportunity"
        subtitle="Preventive medication intelligence is a rapidly growing need across every segment of the global healthcare ecosystem."
      />

      {/* Client grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-4 mb-16">
        {targetClients.map((client, index) => (
          <motion.div
            key={client.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-navy-50 to-teal-50 rounded-xl flex items-center justify-center mb-3">
              <client.icon className="w-6 h-6 text-navy-700" />
            </div>
            <span className="text-xs font-semibold text-navy-800">
              {client.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Market Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-teal-100"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              A Growing Global Need
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The global clinical decision support system market is projected to
                grow significantly in the coming years, driven by increasing
                medication complexity, aging populations, and the rise of
                polypharmacy.
              </p>
              <p>
                In India alone, the healthcare IT market is expanding rapidly, with
                growing demand for AI-powered solutions that can address medication
                safety challenges at scale — from urban hospitals to rural health
                centers.
              </p>
              <p>
                EMERK is positioned at the intersection of AI innovation and
                healthcare's most critical need: preventing medication-related harm
                before it occurs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, label: 'Rapid Market Growth', desc: 'CDSS market expanding globally' },
              { icon: Heart, label: 'Patient Safety', desc: 'Rising demand for preventive tools' },
              { icon: Landmark, label: 'Government Push', desc: 'Digital health initiatives growing' },
              { icon: FlaskConical, label: 'Pharma Need', desc: 'Post-market surveillance gaps' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 border border-teal-100/50"
              >
                <item.icon className="w-6 h-6 text-teal-600 mb-2" />
                <div className="text-sm font-bold text-navy-900">{item.label}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
