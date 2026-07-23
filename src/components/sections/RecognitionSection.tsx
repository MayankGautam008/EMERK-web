import { motion } from 'framer-motion';
import { Award, Building } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function RecognitionSection() {
  return (
    <Container id="recognition" className="py-24 lg:py-32 bg-gray-50/50">
      <SectionHeading
        badge="Recognition"
        title="Recognition & Institutional Support"
        subtitle="EMERK's research and innovation have received appreciation from academic leadership and institutional bodies."
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                University Recognition
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                EMERK has received appreciation from university leadership for
                its innovative approach to medication safety using artificial
                intelligence. The project has been recognized for its potential
                to make a meaningful contribution to healthcare technology.
              </p>
              <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <Building className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-sm text-blue-700">
                  The project has been forwarded to the{' '}
                  <strong>IPR Cell</strong> for further consideration and
                  intellectual property evaluation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
