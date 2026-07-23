import { motion } from 'framer-motion';
import { Link2, MessageCircle, User } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { teamMembers } from '../../data/siteData';

const memberColors = [
  'from-navy-600 to-blue-600',
  'from-teal-500 to-cyan-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
];

export function TeamSection() {
  return (
    <Container id="team" className="py-24 lg:py-32">
      <SectionHeading
        badge="Our Team"
        title="The Team Behind EMERK"
        subtitle="A passionate team of innovators committed to transforming medication safety through AI-driven intelligence."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="text-center group"
          >
            {/* Photo placeholder */}
            <div className="relative mx-auto w-36 h-36 mb-6">
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${memberColors[index % memberColors.length]} opacity-20 group-hover:opacity-30 transition-opacity blur-xl`}
              />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${memberColors[index % memberColors.length]} flex items-center justify-center`}
                  >
                    <User className="w-16 h-16 text-white/60" />
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <h3 className="text-lg font-bold text-navy-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-teal-600 mb-3">
              {member.role}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {member.bio}
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center gap-2">
              <a
                href={member.linkedin || '#'}
                className="w-9 h-9 bg-gray-50 hover:bg-navy-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-navy-700 transition-all"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href={member.twitter || '#'}
                className="w-9 h-9 bg-gray-50 hover:bg-navy-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-navy-700 transition-all"
                aria-label={`${member.name}'s Twitter`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
