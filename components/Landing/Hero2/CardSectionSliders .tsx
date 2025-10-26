"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CardSherq from './CardSherq';
import { CardsSharq } from './CardsSharq';

export default function CardSectionSliders() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides definidos - Cards SHERQ
  const slides = [
    { component: <CardsSharq key="sharq" />, id: 'sharq' },
    { component: <CardSherq key="sherq" />, id: 'sherq' }
  ];

  // Mantém o length constante para o useEffect
  const slidesLength = useRef(slides.length);

  // Auto-rotate slides a cada 10 segundos
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
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Slides Container */}
      <div className="relative h-auto overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full"
          >
            {slides[currentSlide].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}