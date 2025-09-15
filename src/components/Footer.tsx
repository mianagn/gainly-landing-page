import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { IconTrendingUp } from '@tabler/icons-react';

const Footer: React.FC = () => {
  const essentialLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: 'mailto:hello@gainly.com' }
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="flex justify-center mb-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-3 mb-4 group cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg"
                  >
                    <IconTrendingUp className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-500 opacity-0 group-hover:opacity-20 blur-sm"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-2xl font-bold text-white">Gainly</span>
              </motion.div>
              <p className="text-gray-400 mb-4 max-w-md mx-auto md:mx-0">
                Take control of your financial future with AI-powered insights and personalized recommendations.
              </p>
              <motion.a
                href="mailto:hello@gainly.com"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4" />
                <span>info@gainly.com</span>
              </motion.a>
            </div>

            {/* Essential Links */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {essentialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © 2025 Gainly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
