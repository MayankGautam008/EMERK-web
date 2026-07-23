import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { comparisonData } from '../../data/siteData';

const columns = [
  { key: 'drugCheckers', label: 'Drug Checkers' },
  { key: 'adrDatabases', label: 'ADR Databases' },
  { key: 'cdss', label: 'CDSS' },
  { key: 'ehrAlerts', label: 'EHR Alerts' },
  { key: 'chatbots', label: 'Chatbots' },
  { key: 'emerk', label: 'EMERK' },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-500" />;
  if (value === false) return <X className="w-5 h-5 text-gray-300" />;
  return <Minus className="w-5 h-5 text-gray-400" />;
}

export function MarketGapsSection() {
  return (
    <Container id="market-gaps" className="py-24 lg:py-32">
      <SectionHeading
        badge="Market Analysis"
        title="Existing Solutions & Market Gaps"
        subtitle="Current tools solve individual problems in isolation. No existing platform provides unified, explainable, personalized medication intelligence."
      />

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto -mx-4 sm:mx-0"
      >
        <div className="min-w-[800px] px-4 sm:px-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
              <div className="p-4 text-sm font-semibold text-navy-900">
                Capability
              </div>
              {columns.map((col) => (
                <div
                  key={col.key}
                  className={`p-4 text-sm font-semibold text-center ${
                    col.key === 'emerk'
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-gray-600'
                  }`}
                >
                  {col.label}
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonData.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-7 ${
                  idx < comparisonData.length - 1
                    ? 'border-b border-gray-50'
                    : ''
                } hover:bg-gray-50/50 transition-colors`}
              >
                <div className="p-4 text-sm font-medium text-navy-800">
                  {row.feature}
                </div>
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className={`p-4 flex items-center justify-center ${
                      col.key === 'emerk' ? 'bg-teal-50/50' : ''
                    }`}
                  >
                    <CellIcon
                      value={row[col.key as keyof typeof row] as boolean | string}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gap Highlights */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {[
          {
            title: 'Isolated Risk Analysis',
            desc: 'Existing tools check one risk type at a time — missing cumulative medication dangers.',
          },
          {
            title: 'Limited Personalization',
            desc: 'Generic drug data without patient-specific context leads to incomplete safety checks.',
          },
          {
            title: 'Poor Explainability',
            desc: 'Black-box alerts without evidence-backed reasoning erode clinical trust.',
          },
          {
            title: 'No Unified Intelligence',
            desc: 'Fragmented tools force clinicians to juggle multiple platforms for complete risk views.',
          },
        ].map((gap, i) => (
          <motion.div
            key={gap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-red-50 border border-red-100 rounded-xl p-5"
          >
            <h4 className="text-sm font-bold text-red-700 mb-2">{gap.title}</h4>
            <p className="text-sm text-red-600/70 leading-relaxed">{gap.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
