// components/Landing/Projects/ProjectsShowcase.tsx
"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Globe,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

export default function ProjectsShowcase() {
  const { t } = useTranslation('projects');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Estatísticas dos projetos
  const stats = [
    {
      icon: Briefcase,
      value: "50+",
      label: t('stats.projects'),
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      value: "30+",
      label: t('stats.clients'),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      value: "10+",
      label: t('stats.locations'),
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Award,
      value: "100%",
      label: t('stats.satisfaction'),
      color: "from-amber-500 to-orange-600"
    }
  ];

  // Projetos em destaque
  const featuredProjects = [
    {
      title: "Avaliação de Impacto Ambiental - Mineração",
      location: "Tete, Moçambique",
      sector: "Mineração",
      year: "2023",
      description: "Estudo completo de impacto ambiental para operação mineira de grande porte."
    },
    {
      title: "Gestão Costeira Integrada",
      location: "Pemba, Moçambique",
      sector: "Ambiental",
      year: "2023",
      description: "Proteção e gestão sustentável de zonas costeiras e ecossistemas marinhos."
    },
    {
      title: "Plano de Reassentamento - Barragem",
      location: "Cahora Bassa, Moçambique",
      sector: "Social",
      year: "2022",
      description: "Plano de ação de reassentamento com compensação justa e restauração de meios de subsistência."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-main/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
      
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('title')} {t('titleHighlight')}
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Projetos em Destaque */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-main/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-brand-main" />
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                  {project.sector}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-brand-blue  dark:bg-gray-800 p-1">
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-2">
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white/80" />
                    <span className="text-sm text-white/80 font-medium">{t('cta.badge')}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {t('cta.title')}
                  </h3>
                  
                  <p className="text-white/80 text-lg max-w-xl">
                    {t('cta.description')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link href="/projectos">
                    <motion.button
                      className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10">{t('cta.button')}</span>
                      <motion.div
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </Link>
                  
                  <Link href="/contacte-nos">
                    <motion.button
                      className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t('cta.secondary')}
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}