// components/consulting/GestaoQualidade.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Target, 
  TrendingUp, 
  Shield, 
  Award,
  FileCheck,
  Settings,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export default function GestaoQualidadePage() {
  const services = [
    {
      title: "ISO 9001 - Qualidade",
      description: "Implementação e certificação do sistema de gestão da qualidade conforme norma ISO 9001.",
      applications: ["Diagnóstico Inicial", "Implementação", "Auditoria Interna", "Certificação"]
    },
    {
      title: "Controle de Qualidade",
      description: "Sistemas e processos para garantir a conformidade e qualidade dos produtos e serviços.",
      applications: ["Inspeção", "Testes", "Controle Estatístico", "Plano de Qualidade"]
    },
    {
      title: "Melhoria Contínua",
      description: "Metodologias e ferramentas para identificar e implementar melhorias nos processos.",
      applications: ["Lean", "Six Sigma", "PDCA", "Kaizen"]
    },
    {
      title: "Gestão de Processos",
      description: "Mapeamento, análise e otimização de processos para maior eficiência organizacional.",
      applications: ["Mapeamento", "Indicadores", "Padronização", "Automação"]
    }
  ];

  const benefits = [
    "Aumento da satisfação do cliente",
    "Redução de custos operacionais",
    "Melhoria da produtividade",
    "Maior credibilidade no mercado",
    "Vantagem competitiva",
    "Padronização de processos"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Gestão da Qualidade</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excelência em <span className="text-blue-200">Qualidade</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Certificação ISO e implementação de sistemas de controlo de qualidade para excelência operacional.
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
                Compromisso com a Excelência
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A MozShaq oferece soluções completas em gestão da qualidade, auxiliando sua 
                  organização a alcançar os mais altos padrões de excelência operacional e 
                  satisfação do cliente.
                </p>
                <p>
                  Nossos especialistas guiam sua empresa através do processo de certificação 
                  ISO 9001, implementando sistemas de qualidade eficazes que geram resultados 
                  mensuráveis e sustentáveis.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {index === 1 && <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {index === 2 && <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        {index === 3 && <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Normas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 9001</div>
                    <div className="text-sm text-gray-400">Sistema de Gestão da Qualidade</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 14001</div>
                    <div className="text-sm text-gray-400">Gestão Ambiental</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 45001</div>
                    <div className="text-sm text-gray-400">Segurança e Saúde</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Busca a Certificação ISO?
              </h3>
              <p className="text-blue-100 mb-6">
                Dê o próximo passo rumo à excelência
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar Projeto
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/#areas">
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