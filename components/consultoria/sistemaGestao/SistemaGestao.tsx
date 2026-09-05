"use client"
import { motion } from 'framer-motion';
import { 
  Target, 
  CheckCircle, 
  Award, 
  FileText,
  Shield,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function SistemasGestaoPage() {
  const services = [
    {
      title: "ISO 9001 - Sistema de Gestão da Qualidade",
      description: "Implementação e certificação de sistemas que garantem a qualidade consistente de produtos e serviços.",
      features: ["Processos otimizados", "Satisfação do cliente", "Melhoria contínua"]
    },
    {
      title: "ISO 14001 - Sistema de Gestão Ambiental",
      description: "Gestão responsável dos aspectos ambientais e conformidade com requisitos legais.",
      features: ["Redução de impactos ambientais", "Conformidade legal", "Sustentabilidade"]
    },
    {
      title: "ISO 45001 - Segurança e Saúde Ocupacional",
      description: "Proteção dos colaboradores através de sistemas de gestão de segurança no trabalho.",
      features: ["Prevenção de acidentes", "Ambientes seguros", "Cultura de segurança"]
    },
    {
      title: "ISO 27001 - Segurança da Informação",
      description: "Proteção de dados e informações críticas da organização.",
      features: ["Proteção de dados", "Gestão de riscos", "Conformidade digital"]
    }
  ];

  const certifications = [
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 27001",
    "ISO 37001",
    "ISO 22301"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-blue dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2  backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sistemas de Gestão <span className="text-blue-200">Certificados</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Implementação e certificação de sistemas de gestão baseados em normas internacionais ISO para excelência operacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Nossa Abordagem
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Na Mozshaq, implementamos sistemas de gestão que não apenas cumprem requisitos de certificação, 
                  mas que realmente agregam valor ao seu negócio. Trabalhamos lado a lado com sua equipe para 
                  desenvolver processos eficientes e sustentáveis.
                </p>
                <p>
                  Nossa metodologia inclui análise de processos existentes, identificação de oportunidades de 
                  melhoria, desenvolvimento de documentação, capacitação da equipe e apoio durante o processo 
                  de certificação.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Normas Implementadas</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Nosso Processo</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Diagnóstico", icon: FileText },
                  { step: "2", title: "Planejamento", icon: TrendingUp },
                  { step: "3", title: "Implementação", icon: Users },
                  { step: "4", title: "Certificação", icon: Shield }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 text-gray-900 dark:text-gray-600 dark:bg-white/20 bg-gray-300 rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Pronto para Certificar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Entre em contacto para uma consulta gratuita
              </p>
              <Link href="/contacto">
                <motion.button
                  className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Consulta
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Link  href="/#areas">
            <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Áreas de Consultoria
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}