"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Users, Target, BarChart3, Factory, Recycle } from 'lucide-react';
import Link from 'next/link';

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Consultoria Ambiental",
      description: "Estratégias de desenvolvimento sustentável e avaliações de impacto ambiental.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#environmental"
    },
    {
      icon: Shield,
      title: "Segurança e Saúde",
      description: "Protocolos de segurança no trabalho e sistemas de gestão de riscos.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#health-safety"
    },
    {
      icon: Users,
      title: "Responsabilidade Social",
      description: "Engajamento comunitário e avaliações de impacto social.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#social-responsibility"
    },
    {
      icon: Target,
      title: "Gestão da Qualidade",
      description: "Certificação ISO e implementação de sistemas de controlo de qualidade.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#quality"
    },
    {
      icon: BarChart3,
      title: "Relatórios de Sustentabilidade",
      description: "Reporte ESG e métricas de desempenho sustentável.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#sustainability-reporting"
    },
    {
      icon: Factory,
      title: "Conformidade Industrial",
      description: "Conformidade regulatória e padrões de segurança industrial.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#industrial-compliance"
    },
    {
      icon: Recycle,
      title: "Economia Circular",
      description: "Gestão de resíduos e implementação de economia circular.",
      color: "from-blue-500 to-cyan-600",
      href: "/services#circular-economy"
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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services-overview" className="relative py-20 bg-white dark:bg-gray-900">
      {/* Background Elements - Mais sutis */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-main/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-blue/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-main/10 text-brand-main px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-brand-main rounded-full"></div>
            <span className="text-sm font-medium">Serviços Especializados</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Consultoria e Assessoria para{' '}
            <span className="text-brand-main">Desenvolvimento Sustentável</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Serviços completos de consultoria para impulsionar sua organização rumo à excelência 
            sustentável através de estudos especializados, avaliações e implementação estratégica.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <Link href={service.href}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-gray-900/10 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-500 h-full border border-gray-100 dark:border-gray-700/50 group-hover:border-brand-main/20 group-hover:scale-[1.02]">
                  
                  {/* Icon with Gradient - Mais clean */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-main transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* CTA Arrow - Mais discreto */}
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium group-hover:text-brand-main transition-all duration-300">
                    Ver Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-main/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-main dark:text-white mb-4">
              Precisa de uma Solução Personalizada?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Nossos especialistas estão prontos para desenvolver uma estratégia sob medida 
              para as necessidades específicas da sua organização.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-brand-main text-white rounded-xl hover:bg-brand-main/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar Consulta
              </motion.button>
              <Link href="/services">
                <motion.button
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 font-semibold hover:border-brand-main/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Todos os Serviços
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesOverviewSection;