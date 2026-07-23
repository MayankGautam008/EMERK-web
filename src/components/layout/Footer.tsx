import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { footerSections } from '../../data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">EMERK</span>
                <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                  Medication Intelligence
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Enhanced Medical Evaluation, Risk & Knowledge — an AI-powered
              Preventive Medication Intelligence SaaS Platform.
            </p>
            <p className="text-sm text-teal-400 font-semibold tracking-wide">
              Predict. Protect. Prevent.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:contact@emerk.in"
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@emerk.in
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91-XXXXXXXXXX
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                India
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} EMERK. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex items-center gap-3">
            {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all text-xs font-medium"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
