"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './HeroSection';
import CoursesHeroSection from './HeroSherq';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides definidos
  const slides = [
    { component: <HeroSection key="consultoria" />, id: 'consultoria' },
    { component: <CoursesHeroSection key="cursos" />, id: 'cursos' }
  ];

  // Mantém o length constante para o useEffect
  const slidesLength = useRef(slides.length);

  // Auto-rotate slides a cada 15 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength.current);
    }, 15000); // 15s

    return () => clearInterval(interval);
  }, []);

  // Navegação manual
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength.current);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength.current) % slidesLength.current);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {/* Slides Container */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {slides[currentSlide].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft
          className="text-white group-hover:text-brand-main transition-colors duration-300"
          size={24}
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight
          className="text-white group-hover:text-brand-main transition-colors duration-300"
          size={24}
        />
      </button> */}

      {/* Indicadores de Slide */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-brand-blue scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}