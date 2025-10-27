"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ServicesHeader = () => {
  return (
    <div className="bg-gradient-to-b py-10 from-gray-300 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nossos <span className="text-brand-main">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas 
            e especializadas para impulsionar a sustentabilidade e excelência operacional da sua organização.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHeader;