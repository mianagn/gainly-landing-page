"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";
 
 
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(true); // Start visible by default
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.02) {
        setVisible(true); // Keep visible at top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Start at visible position
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto rounded-2xl backdrop-blur-2xl shadow-2xl z-[5000] px-8 py-4 items-center justify-center space-x-8 border border-slate-700/50",
          // Modern glassmorphism with better color contrast
          "bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90",
          // Enhanced glow effect with emerald accent
          "shadow-[0_8px_32px_rgba(15,23,42,0.6)] shadow-emerald-500/10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <motion.a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-white items-center flex space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 group overflow-hidden"
            )}
          >
            {/* Background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-slate-700/30 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Icon with enhanced styling */}
            <span className="block sm:hidden relative z-10">
              {navItem.icon}
            </span>
            
            {/* Text with gradient on hover */}
            <span 
              className="hidden sm:block text-sm relative z-10 text-slate-200 group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:via-emerald-400 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
            >
              {navItem.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
