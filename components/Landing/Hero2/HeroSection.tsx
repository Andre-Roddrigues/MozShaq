"use client"
import React from 'react';
import { Wrench, Users, ThumbsUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-full md:min-h-screen bg-slate-800 dark:bg-slate-900">
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
        {/* Hero Content - Centralizado */}
        <div className="container mx-auto px-4 flex-1 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center text-center w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título Principal */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-brand-main dark:text-brand-main">Sustentabilidade</span>
              <br />
              Segurança e Gestão
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Especialistas para Soluções Personalizadas
            </motion.p>

            {/* Descrição */}
            <motion.p
              className="text-lg text-gray-300 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Consultoria especializada em desenvolvimento sustentável, segurança ocupacional 
              e sistemas de gestão para empresas em Moçambique.
            </motion.p>

            {/* CTA Buttons - Centralizado */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-brand-main dark:bg-brand-main text-white dark:text-white hover:bg-brand-main/90 dark:hover:bg-brand-main/90 transition-all duration-300 font-semibold flex items-center gap-3 text-lg rounded-lg"
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
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white text-white dark:text-white hover:bg-white/10 transition-all duration-300 font-semibold text-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services">
                Ver Serviços
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}