// components/SherqAcademy/Hero/HeroSectionSherq.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useTranslation } from '../../../hooks/useTranslation';

export default function HeroSectionSherq() {
  const { t } = useTranslation('hero');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Conteúdo dos slides com fundos personalizados
  const slides = [
    {
      id: 'consulting',
      title: t('consulting.title') || 'MozShaq Consultoria e Auditoria',
      subtitle: t('consulting.subtitle') || 'Excelência em soluções empresariais',
      description: t('consulting.description') || 'Oferecemos serviços especializados em consultoria e auditoria para empresas que buscam excelência em gestão, compliance e melhoria contínua.',
      ctaText: t('consulting.btnConsulting') || 'Saiba Mais',
      ctaLink: '/contacte-nos',
      icon: Wrench,
      buttonClass: 'bg-brand-main text-white hover:bg-brand-main/70',
      courses: [
        t('consulting.courses.audits') || 'Auditorias Internas',
        t('consulting.courses.compliance') || 'Compliance e Regulamentação',
        t('consulting.courses.management') || 'Gestão de Riscos',
        t('consulting.courses.processes') || 'Otimização de Processos'
      ],
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
      courses: [
        t('courses.environmental'),
        t('courses.safety'),
        t('courses.quality'),
        t('courses.audits'),
        t('courses.legislation'),
        t('courses.waste'),
        t('courses.risks'),
        t('courses.iso')
      ],
      backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/herosherq2.jpg')"
    }
  ];

  const currentSlide = slides[activeSlide];
  const Icon = currentSlide.icon;

  // Autoplay a cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 15000); // 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Pausar autoplay quando o usuário interage
  const handleManualNavigation = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    // Reativar autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    handleManualNavigation((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleManualNavigation((activeSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[600px] sm:min-h-[700px] md:min-h-screen bg-slate-800 dark:bg-slate-900 flex flex-col"
    >
      {/* Background Image with Overlay - Dinâmico por slide */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: currentSlide.backgroundImage,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        key={activeSlide} // Força re-renderização quando o slide muda
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-16 lg:pb-32 flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">

            {/* Slide Content com AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="flex flex-col items-center justify-center text-center w-full"
                initial={{ opacity: 0, x: activeSlide === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeSlide === 0 ? 50 : -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Ícone do slide */}
                <motion.div
                  className="mb-4 sm:mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/20">
                    <Icon size={32} className="text-brand-main sm:w-10 sm:h-10" />
                  </div>
                </motion.div>

                {/* Título */}
                <motion.h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  className="text-brand-main text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Descrição */}
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {currentSlide.description}
                </motion.p>

                {/* Lista de Cursos/Áreas */}
                {/* <motion.div
                  className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {currentSlide.courses.map((course, index) => (
                    <span
                      key={index}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 text-white text-xs sm:text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </motion.div> */}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Link href={currentSlide.ctaLink} className="w-full sm:w-auto">
                    <motion.button
                      className={`px-5 py-3 sm:px-6 md:px-8 md:py-3 ${currentSlide.buttonClass} transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base rounded-md sm:rounded-none w-full sm:w-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} className="shrink-0" />
                      <span className="whitespace-nowrap">{currentSlide.ctaText}</span>
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
            </AnimatePresence>

            {/* Indicadores de Slide e Navegação */}
            <motion.div
              className="flex items-center gap-4 mt-6 sm:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Botão Anterior */}
              <button
                onClick={prevSlide}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Indicadores com barra de progresso */}
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(index)}
                    className="relative group flex items-center"
                    aria-label={`Ir para slide ${index + 1}`}
                  >
                    <div
                      className={`transition-all duration-300 rounded-full ${
                        activeSlide === index
                          ? 'w-8 h-2 bg-brand-main'
                          : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                    {/* Barra de progresso para o slide ativo */}
                    {activeSlide === index && isAutoPlaying && (
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-brand-main/30 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5, ease: "linear" }}
                        key={index}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Botão Próximo */}
              <button
                onClick={nextSlide}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Próximo slide"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>

            {/* Timer Display */}
            <motion.div
              className="mt-3 text-xs text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {isAutoPlaying ? `Próximo slide em ${5} segundos` : 'Clique nos indicadores para navegar'}
            </motion.div>
          </div>
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