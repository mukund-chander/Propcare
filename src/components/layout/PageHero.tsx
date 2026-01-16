import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, backgroundImage, children }: PageHeroProps) => {
  return (
    <section className="relative h-screen flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-110"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tighter">
              {title}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              {subtitle}
            </p>
          </motion.div>

          {children && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                    animate={{ 
                        top: ['-100%', '100%']
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PageHero;
