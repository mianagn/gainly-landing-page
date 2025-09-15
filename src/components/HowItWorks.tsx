import React from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Target,
  BarChart3,
  PiggyBank
} from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: User,
      title: "Create Account or Login",
      description: "Sign up in minutes or log in with Google. No complex setup or technical knowledge required.",
      features: ["Quick signup process", "Google OAuth integration", "No technical setup"]
    },
    {
      icon: Target,
      title: "Insert Your Financial Situation",
      description: "Connect your accounts or manually input your current financial status to get started.",
      features: ["Account linking", "Manual input option", "Secure connection"]
    },
    {
      icon: BarChart3,
      title: "Set Preferences & Goals",
      description: "Customize your experience by setting spending limits, savings goals, and investment preferences.",
      features: ["Spending limits", "Savings goals", "Investment preferences"]
    },
    {
      icon: PiggyBank,
      title: "Enjoy & Grow",
      description: "Watch your financial health improve with AI-powered insights and personalized recommendations.",
      features: ["AI insights", "Personalized recommendations", "Progress tracking"]
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Custom Interactive Background */}
      <InteractiveBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 leading-tight text-balance" style={{ lineHeight: '1.2' }}>
            <span className="block">Get Started in</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent -mt-2">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Gainly makes it incredibly easy to take control of your finances. 
            Whether you're managing personal or business finances, get started in minutes.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-cyan-400 to-emerald-400 transform -translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <motion.div 
                  className={`flex-1 max-w-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: featureIndex * 0.1, ease: "easeOut" }}
                        className={`flex items-center gap-2 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Step Icon */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1, 
                    ease: "easeOut",
                    scale: { type: "spring", stiffness: 200, damping: 20 },
                    rotate: { type: "spring", stiffness: 200, damping: 25 }
                  }}
                >
                  <motion.div 
                    className="relative w-24 h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group overflow-hidden"
                  >
                    {/* Icon container */}
                    <motion.div
                      className="relative z-10 bg-slate-900/80 rounded-2xl p-4 flex items-center justify-center"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
