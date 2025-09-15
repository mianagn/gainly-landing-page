import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';
import { ContainerScroll } from './ContainerScrollAnimation';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleComponent = (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 leading-tight text-balance"
        id="hero-heading"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block"
        >
          Master Your
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent -mt-2"
        >
          Financial Future
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-3xl mx-auto leading-relaxed text-balance"
      >
        Take control of your money with Gainly's comprehensive personal finance platform. 
        Whether you're an individual or running a business, track spending, build wealth, 
        and make smarter financial decisions with AI-powered insights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
      >
        <motion.button 
          className="btn-primary group relative px-8 py-4 overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Start your financial journey with Gainly"
        >
          <span className="relative z-10">Get Started</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-400"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        <motion.button 
          className="btn-secondary px-8 py-4 backdrop-blur-sm"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Watch a demo of Gainly's features"
        >
          Watch Demo
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="flex items-center justify-center gap-8 text-sm text-neutral-300"
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex gap-1">
            <motion.span 
              className="text-success-500 text-lg font-bold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              aria-hidden="true"
            >
              ✓
            </motion.span>
          </div>
          <span>Setup in minutes</span>
        </motion.div>
      </motion.div>
    </>
  );

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={titleComponent}
        >
          <motion.img
            src="/heroImg.jpeg"
            alt="Gainly Dashboard showing financial management interface with charts and data visualization"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
            draggable={false}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;
