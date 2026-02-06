"use client"
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle,
  BriefcaseMedical,
  HardHat,
  CheckCircle,
  FileText,
  Users,
  BarChart
} from 'lucide-react';
import Link from 'next/link';

export default function SegurancaSaudePage() {
  const services = [
    {
      title: "Planos de Segurança no Trabalho",
      description: "Desenvolvimento de planos personalizados para prevenção de acidentes.",
      features: ["Análise de risco", "Procedimentos de emergência", "Capacitação"]
    },
    {
      title: "Avaliação de Riscos (HIRA)",
      description: "Identificação e avaliação sistemática de riscos ocupacionais.",
      features: ["Riscos físicos", "Riscos químicos", "Riscos ergonômicos"]
    },
    {
      title: "Equipamentos de Proteção",
      description: "Seleção e fornecimento de EPIs e EPCs adequados.",
      features: ["Avaliação de necessidades", "Fornecimento", "Treino de uso"]
    },
    {
      title: "Investigação de Acidentes",
      description: "Análise de causas raiz e desenvolvimento de medidas preventivas.",
      features: ["Análise técnica", "Recomendações", "Implementação"]
    }
  ];

  const assessments = [
    "Vibração",
    "Ruído",
    "Iluminação",
    "Radiação",
    "Temperatura",
    "Vapores",
    "Humidade",
    "Poeiras"
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
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Segurança e Saúde Ocupacional</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proteção do <span className="text-brand-main">Capital Humano</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Soluções completas para ambientes de trabalho seguros, saudáveis e produtivos.
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
                Nossa Abordagem em SSO
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Acreditamos que a segurança e saúde no trabalho são fundamentais para o sucesso de qualquer 
                  organização. Desenvolvemos soluções personalizadas que não apenas cumprem requisitos legais, 
                  mas que criam uma cultura de segurança sustentável.
                </p>
                <p>
                  Nossa metodologia combina avaliação técnica com capacitação prática, garantindo que os 
                  colaboradores estejam preparados para identificar e gerir riscos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-red-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-red-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <HardHat className="w-6 h-6 text-brand-main dark:text-red-400" />}
                        {index === 1 && <AlertTriangle className="w-6 h-6 text-brand-main dark:text-red-400" />}
                        {index === 2 && <BriefcaseMedical className="w-6 h-6 text-brand-main dark:text-red-400" />}
                        {index === 3 && <BarChart className="w-6 h-6 text-brand-main dark:text-red-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
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
            {/* Assessments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Avaliações de Agentes</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {assessments.map((agent, index) => (
                  <div key={index} className="p-3 bg-red-50 dark:bg-gray-700 rounded-lg text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{agent}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-700 text-gray-900 rounded-2xl shadow-xl p-6 dark:text-white"
            >
              <h3 className="text-xl font-bold mb-6">Conformidade Legal</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  <div className="text-sm">Regulamento Geral de Segurança</div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <div className="text-sm">Norma ISO 45001</div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <div className="text-sm">Regulamento de Protecção Colectiva</div>
                </div>
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
                Ambiente de Trabalho Seguro?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Avaliemos seus riscos ocupacionais
              </p>
              <Link href="contacte-nos">
                <motion.button
                  className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Diagnóstico
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
            <button className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
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