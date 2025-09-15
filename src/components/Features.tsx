import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import MagicBento from './MagicBento';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16"
      >
        <div className="text-center">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 leading-tight text-balance" style={{ lineHeight: '1.2' }}>
            <span className="block">Complete Personal Finance</span>
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent -mt-2">
              Management
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            From daily spending to long-term wealth building, Gainly provides all the tools 
            you need to take control of your financial future.
          </p>
        </div>
      </motion.div>

      {/* Magic Bento Grid */}
      <div className="flex justify-center">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="16, 185, 129"
        />
      </div>
    </section>
  );
};

export default Features;
