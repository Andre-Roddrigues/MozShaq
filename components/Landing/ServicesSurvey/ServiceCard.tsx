"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ServiceCard = ({ service, isActive, onClick, index }: ServiceCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-left bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl transition-all duration-300 border-2 ${
        isActive 
          ? 'border-brand-main' 
          : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
      }`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
        <service.icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
    Clique para expandir
  </span>
  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-main' : 'bg-gray-300'}`} />
</div>
    </motion.button>
  );
};

export default ServiceCard;