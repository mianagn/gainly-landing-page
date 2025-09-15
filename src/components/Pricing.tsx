import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isOneTime, setIsOneTime] = useState(false);
  
  const plan = {
    price: { monthly: 7, oneTime: 100 },
    features: [
      "Unlimited transactions",
      "Advanced budgeting tools",
      "Investment tracking",
      "AI-powered insights",
      "Savings goal setting",
      "Custom categories",
      "Priority support"
    ]
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 leading-tight text-balance" style={{ lineHeight: '1.2' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              One Plan,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent -mt-2"
            >
              Everything You Need
            </motion.span>
          </motion.h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Choose between flexible monthly billing or save with a one-time payment. 
            No hidden fees, no complicated tiers.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-8"
        >
          <span className={`text-sm ${!isOneTime ? 'text-white' : 'text-emerald-300'}`}>Monthly</span>
          <motion.button
            className={`relative w-16 h-10 rounded-full p-1 transition-colors duration-300 ${
              isOneTime ? 'bg-emerald-500' : 'bg-gray-600'
            }`}
            onClick={() => setIsOneTime(!isOneTime)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-8 h-8 bg-white rounded-full shadow-md"
              animate={{ x: isOneTime ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <span className={`text-sm ${isOneTime ? 'text-white' : 'text-emerald-300'}`}>
            One Time
          </span>
        </motion.div>

        {/* Modern Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <motion.div
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl overflow-hidden"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
            
            {/* Plan Header */}
            <div className="relative z-10 text-center mb-8">
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">${isOneTime ? plan.price.oneTime : plan.price.monthly}</span>
                <span className="text-neutral-400 text-lg ml-2">
                  {isOneTime ? ' one-time' : '/month'}
                </span>
                {isOneTime && (
                  <div className="mt-2">
                    <span className="text-sm text-emerald-400 font-medium">Don't get effected by potential price changes</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="relative z-10 grid grid-cols-2 gap-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-200 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
            </motion.button>

            {/* Free Trial Note */}
            <p className="text-center text-neutral-400 text-sm">
              14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
