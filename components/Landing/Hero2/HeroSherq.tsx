"use client"
import React from 'react';
import { BookOpen, Users, Award, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from "next/link";

export default function CoursesHeroSection() {
  const courses = [
    "Gestão Ambiental",
    "Segurança no Trabalho",
    "Sistemas de Qualidade",
    "Auditorias Internas",
    "Legislação Ambiental",
    "Gestão de Resíduos",
    "Prevenção de Riscos",
    "Certificação ISO"
  ];

  return (
    <div className="relative h-full md:min-h-screen bg-slate-800 dark:bg-slate-900">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/herosherq2.jpg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Content - CENTRALIZADO */}
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-8 md:pb-16 lg:pb-40 flex-1 flex items-center justify-center">
          <motion.div 
            className="flex flex-col items-center justify-center text-center w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título Principal */}
            <motion.h1 
              className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-brand-main dark:text-brand-main">Formação </span>
              <br />
              Especializada
            </motion.h1>
            
            {/* Subtítulo */}
            <motion.p 
              className="text-gray-300 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Cursos Certificados e Adaptados às Suas Necessidades
            </motion.p>
            
            {/* Inscrições Abertas */}
            <motion.p 
              className="text-brand-main dark:text-brand-main text-xl md:text-2xl font-semibold mb-6 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Inscrições Abertas
            </motion.p>

            {/* CTA Button - CENTRALIZADO */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href="/sherq-academy/inicio">
                <motion.button 
                  className="px-6 py-3 md:px-8 md:py-3 bg-brand-blue dark:bg-brand-blue text-white dark:text-white hover:bg-brand-blue/70 dark:hover:bg-brand-blue/70 transition-all duration-300 font-medium flex items-center gap-2 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SHERQ ACADEMY
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
              </Link>
              <motion.button
                              className="px-6 py-3 md:px-8 md:py-3 bg-brand-main dark:bg-brand-main text-white dark:text-white hover:bg-brand-main/70 dark:hover:bg-brand-main/70 transition-all duration-300 font-medium flex items-center gap-2 text-sm md:text-base"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link href="/cursos">
                              Cursos
                              </Link>
                            </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite Courses Carousel - MANTIDO ORIGINAL */}
        <motion.div 
          className="relative z-10 mt-4 md:-mt-28 pb-8 md:pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="overflow-hidden py-3 md:py-4">
            <motion.div 
              className="flex gap-4 md:gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...courses, ...courses].map((course, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-8 shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20">
                    <span className="text-white font-medium text-sm md:text-lg whitespace-nowrap">
                      {course}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}