"use client"
import React from 'react';
import { BookOpen, Users, Award, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="relative min-h-screen bg-slate-800 dark:bg-slate-900">
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
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-8 md:pb-16 lg:pb-40 flex-1 flex items-center">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <motion.h1 
                className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-brand-main dark:text-brand-main">Formação </span>
              </motion.h1>
              
              <motion.h2 
                className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Especializada
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Cursos Certificados e Adaptados às Suas Necessidades
              </motion.p>
              
              <motion.p 
                className="text-brand-main dark:text-brand-main text-xl md:text-2xl font-semibold mb-6 md:mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Inscrições Abertas
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.button 
                  className="px-6 py-3 md:px-8 md:py-3 bg-brand-blue dark:bg-brand-blue text-white dark:text-white hover:bg-brand-blue/70 dark:hover:bg-brand-blue/70 transition-all duration-300 font-medium flex items-center gap-2 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Cursos Disponíveis
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

            {/* Right Side - Placeholder for Course Image */}
            <motion.div 
              className="w-full lg:w-1/3 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Espaço para imagem de cursos futura */}
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite Courses Carousel */}
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

        {/* Feature Cards - Responsive */}
        <motion.div 
          className="relative z-10 pb-8 md:pb-12 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2, 
            duration: 0.6,
          }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
            {/* Card 1 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <BookOpen className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Conteúdo Atualizado
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Materiais pedagógicos sempre atualizados com as últimas normas.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <Users className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Formadores Certificados
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Equipa de formadores com vasta experiência profissional.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  rotate: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <Award className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Certificação Reconhecida
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Certificados válidos e reconhecidos pelo mercado de trabalho.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Spacer */}
      <div className="block lg:hidden h-24"></div>
    </div>
  );
}