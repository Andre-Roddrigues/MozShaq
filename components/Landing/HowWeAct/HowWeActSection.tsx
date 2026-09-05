// components/Landing/HowWeAct/HowWeActSection.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3, Shield, Clock, Award } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const HowWeActSection = () => {
  const { t } = useTranslation('how-we-act');

  // IDs dos processos
  const processIds = [
    'diagnostico',
    'consultoria',
    'implementacao',
    'certificacao',
    'acompanhamento',
    'excelencia'
  ];

  // Mapeamento de ícones
  const iconMap: Record<string, any> = {
    'diagnostico': Target,
    'consultoria': Users,
    'implementacao': BarChart3,
    'certificacao': Shield,
    'acompanhamento': Clock,
    'excelencia': Award
  };

  // Construir array de processos com traduções
  const processes = processIds.map((id) => ({
    id,
    icon: iconMap[id],
    title: t(`processes.${id}.title`),
    description: t(`processes.${id}.description`),
    steps: t(`processes.${id}.steps`, { returnObjects: true }) as string[]
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="how-we-act" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-main/10 dark:bg-brand-main/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <motion.div
                key={process.id}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-brand-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-main group-hover:text-white transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {process.description}
                </p>

                {/* Steps List */}
                <ul className="space-y-2">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-brand-main rounded-full mr-3"></div>
                      {step}
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-main/20 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeActSection;