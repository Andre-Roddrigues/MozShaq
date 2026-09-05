// components/SherqAcademy/Hero/HeroSectionSherq.tsx
"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BookOpen, ArrowRight, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useTranslation } from '../../../hooks/useTranslation';

export default function HeroSectionSherq() {
  const { t } = useTranslation('hero');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Cursos com tradução - memoizado para evitar recriação
  const courses = useMemo(() => [
    t('courses.environmental'),
    t('courses.safety'),
    t('courses.quality'),
    t('courses.audits'),
    t('courses.legislation'),
    t('courses.waste'),
    t('courses.risks'),
    t('courses.iso')
  ], [t]);

  // Conteúdo dos slides - memoizado
  const slides = useMemo(() => [
    {
      id: 'consulting',
      title: t('consulting.title') || 'MozShaq Consultoria e Auditoria',
      subtitle: t('consulting.subtitle') || 'Excelência em soluções empresariais',
      description: t('consulting.description') || 'Oferecemos serviços especializados em consultoria e auditoria para empresas que buscam excelência em gestão, compliance e melhoria contínua.',
      ctaText: t('consulting.btnConsulting') || 'Saiba Mais',
      ctaLink: '/#areas',
      icon: Wrench,
      buttonClass: 'bg-brand-main text-white hover:bg-brand-main/70',
      backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/HeroConsultoria.png')"
    },
    {
      id: 'academy',
      title: t('academy.title') || 'SherqAcademy Formação',
      subtitle: t('academy.subtitle') || 'Capacitação profissional de alto nível',
      description: t('academy.description') || 'Formações especializadas nas áreas de Segurança, Higiene, Ambiente, Qualidade e muito mais. Desenvolva suas competências com os melhores profissionais.',
      ctaText: t('academy.btnSherq') || 'Ver Cursos',
      ctaLink: '/sherq-academy/inicio',
      icon: BookOpen,
      buttonClass: 'bg-brand-blue text-white hover:bg-brand-blue/70',
      backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/unnamed.webp')"
    }
  ], [t]);

  const currentSlide = slides[activeSlide];
  const Icon = currentSlide.icon;

  // Autoplay otimizado
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Handlers memoizados
  const handleManualNavigation = useCallback((index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const nextSlide = useCallback(() => {
    handleManualNavigation((activeSlide + 1) % slides.length);
  }, [activeSlide, handleManualNavigation, slides.length]);

  const prevSlide = useCallback(() => {
    handleManualNavigation((activeSlide - 1 + slides.length) % slides.length);
  }, [activeSlide, handleManualNavigation, slides.length]);

  // Variantes de animação simplificadas
  const slideVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-screen bg-slate-800 dark:bg-slate-900 flex flex-col">
      {/* Background Image - Otimizado com will-change */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: currentSlide.backgroundImage }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={activeSlide}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-16 lg:pb-32 flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
            
            {/* Slide Content - Animação mais leve */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="flex flex-col items-center justify-center text-center w-full"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Título - animação simplificada */}
                <motion.h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-6"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  className="text-brand-main text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Descrição */}
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {currentSlide.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link href={currentSlide.ctaLink} className="w-full sm:w-auto">
                    <motion.button
                      className={`px-5 py-3 sm:px-6 md:px-8 md:py-3 ${currentSlide.buttonClass} transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base rounded-md sm:rounded-none w-full sm:w-auto`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Icon size={18} className="shrink-0" />
                      <span className="whitespace-nowrap">{currentSlide.ctaText}</span>
                      <ArrowRight size={18} className="shrink-0" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navegação - com memoização */}
            <motion.div
              className="flex items-center gap-4 mt-6 sm:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <button
                onClick={prevSlide}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeSlide === index
                        ? 'w-6 h-1.5 bg-brand-main'
                        : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Próximo slide"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Infinite Courses Carousel - Otimizado com CSS */}
        <div className="relative z-10 mt-2 sm:mt-4 md:mt-0 md:-mt-16 lg:-mt-28 pb-6 sm:pb-8 md:pb-16 overflow-hidden">
          <div className="py-2 sm:py-3 md:py-4">
            <div className="flex gap-3 sm:gap-4 md:gap-8 animate-scroll">
              {[...courses, ...courses].map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 md:gap-8 shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full border border-white/20 whitespace-nowrap">
                    <span className="text-white font-medium text-xs sm:text-sm md:text-lg">
                      {course}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS para animação do scroll - Substitui o motion.div pesado */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}