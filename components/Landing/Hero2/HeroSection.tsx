"use client"
import React from 'react';
import { Wrench, Users, ThumbsUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen lg:h-screen bg-slate-800 dark:bg-slate-900">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/hero-bg.jpg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-8 lg:pb-40 flex-1 flex items-center">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Side - Worker Image (Hidden on mobile) */}
            <motion.div
              className="w-full lg:w-1/3 hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Espaço para imagem futura */}
            </motion.div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-2/3 text-center lg:text-right">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-brand-main dark:text-brand-main">Sustentabilidade </span>
              </motion.h1>

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Segurança e Gestão
              </motion.h2>

              <motion.p
                className="text-gray-300 dark:text-gray-300 text-base lg:text-lg mb-6 lg:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Especialistas para Soluções Personalizadas
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-end"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.button
                  className="px-6 py-3 lg:px-8 lg:py-3 bg-brand-blue dark:bg-brand-blue text-white dark:text-white hover:bg-brand-blue/70 dark:hover:bg-brand-blue/70 transition-all duration-300 font-medium flex items-center gap-2 text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Entrar em Contacto
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards - Responsive Positioning */}
        
      </div>

      {/* Mobile Spacer - Garante espaço suficiente para os cards em mobile */}
      <div className="block lg:hidden h-32"></div>
    </div>
  );
}