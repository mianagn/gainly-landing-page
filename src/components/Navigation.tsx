import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from './ui/floating-navbar';
import { IconHome, IconChartBar, IconSettings, IconTrendingUp } from '@tabler/icons-react';

const Navigation: React.FC = () => {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconChartBar className="h-4 w-4 text-white" />,
    },
    {
      name:"Setup",
      link: "#how-it-works",
      icon: <IconSettings className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Modern Header with Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[6000] pt-6 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Animated Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            <div className="flex flex-col">
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Gainly
              </motion.span>
              <motion.span
                className="text-xs text-neutral-400 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Financial Platform
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm shadow-lg transition-all duration-300 hover:text-white no-underline"
          >
            <span>Get Started</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="no-underline"
            >
              →
            </motion.div>
          </motion.a>
        </div>
      </motion.header>

      {/* Floating Navigation with Better Spacing */}
      <div className="pt-24">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navigation;
