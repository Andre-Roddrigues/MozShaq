"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-gradient-to-br from-brand-main via-brand-main to-brand-blue rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar a Sua Organização?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Contacte-nos hoje mesmo e descubra como os nossos serviços especializados 
          podem impulsionar a sustentabilidade, segurança e excelência operacional da sua organização.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            className="px-8 py-4 bg-white text-brand-main rounded-xl hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            Entrar em Contacto
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCTA;