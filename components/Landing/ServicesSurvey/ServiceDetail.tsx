"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  color: string;
  image?: string;
}

interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}

const ServiceDetail = ({ service, onClose }: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 mb-12"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-6`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
              {service.description}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Descrição do Serviço</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Características Principais</h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Image and Deliverables */}
        <div className="space-y-8">
          {/* Image Placeholder */}
          <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  Imagem ilustrativa do serviço
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Principais Entregáveis</h3>
            <div className="grid grid-cols-1 gap-3">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-brand-main">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-brand-main rounded-full mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {deliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            className="px-8 py-4 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors duration-300 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Orçamento
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-brand-main text-brand-main rounded-lg hover:bg-brand-main hover:text-white transition-colors duration-300 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consulta
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;