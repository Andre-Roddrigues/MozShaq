// components/SherqAcademy/Hero/HeroSectionSherq.tsx
"use client"

import React from 'react';
import { BookOpen, ArrowRight, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { useTranslation } from '../../../hooks/useTranslation';

export default function HeroSectionSherq() {
  const { t } = useTranslation('hero');

  // Cursos com tradução
  const courses = [
    t('courses.environmental'),
    t('courses.safety'),
    t('courses.quality'),
    t('courses.audits'),
    t('courses.legislation'),
    t('courses.waste'),
    t('courses.risks'),
    t('courses.iso')
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[600px] sm:min-h-[700px] md:min-h-screen bg-slate-800 dark:bg-slate-900 flex flex-col"
    >
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/herosherq2.jpg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-16 lg:pb-32 flex-1 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center text-center w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título Principal */}
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-brand-main block sm:inline">
                {t('title').split('&')[0].trim()}
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                & {t('title').split('&')[1]?.trim() || ''}
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* Descrição */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {t('description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Botão SherqAcademy */}
              <Link href="/sherq-academy/inicio" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 md:px-8 md:py-3 bg-brand-blue text-white hover:bg-brand-blue/70 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base rounded-md sm:rounded-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">{t('btnSherq')}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </Link>

              {/* Botão Consultoria */}
              <Link href="/contacte-nos" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-5 py-3 sm:px-6 md:px-8 md:py-3 bg-brand-main text-white hover:bg-brand-main/70 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base rounded-md sm:rounded-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Wrench size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">{t('btnConsulting')}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite Courses Carousel */}
        <motion.div
          className="relative z-10 mt-2 sm:mt-4 md:mt-0 md:-mt-16 lg:-mt-28 pb-6 sm:pb-8 md:pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="overflow-hidden py-2 sm:py-3 md:py-4">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-8"
              animate={{ x: [0, -1920] }}
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
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 md:gap-8 shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full border border-white/20">
                    <span className="text-white font-medium text-xs sm:text-sm md:text-lg whitespace-nowrap">
                      {course}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}