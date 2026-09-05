// components/consulting/RelatoriosSustentabilidade.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  FileText, 
  Target, 
  TrendingUp, 
  Leaf,
  CheckCircle,
  PieChart,
  Globe,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function RelatoriosSustentabilidadePage() {
  const services = [
    {
      title: "Relatórios ESG",
      description: "Elaboração de relatórios ambientais, sociais e de governança conforme padrões internacionais.",
      applications: ["GRI Standards", "SASB", "TCFD", "Relatório Integrado"]
    },
    {
      title: "Métricas de Sustentabilidade",
      description: "Definição e monitoramento de indicadores de desempenho sustentável.",
      applications: ["KPIs Ambientais", "KPIs Sociais", "KPIs de Governança", "Benchmarking"]
    },
    {
      title: "Compliance Ambiental",
      description: "Garantia de conformidade com regulamentações e padrões ambientais.",
      applications: ["Legislação", "Licenciamento", "Auditorias", "Monitorização"]
    },
    {
      title: "Comunicação de Sustentabilidade",
      description: "Estratégias para comunicação transparente e engajadora sobre sustentabilidade.",
      applications: ["Comunicação Estratégica", "Engajamento de Stakeholders", "Marketing Sustentável", "Transparência"]
    }
  ];

  const benefits = [
    "Transparência com stakeholders",
    "Melhoria da reputação corporativa",
    "Identificação de riscos e oportunidades",
    "Atração de investidores",
    "Diferenciação no mercado",
    "Tomada de decisão baseada em dados"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-700 to-teal-800 dark:from-emerald-900 dark:to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-medium">Relatórios de Sustentabilidade</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustentabilidade <span className="text-emerald-200">em Dados</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Reporte ESG e métricas de desempenho sustentável para uma gestão transparente e responsável.
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
                Transparência e Responsabilidade
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A MozShaq auxilia organizações na elaboração de relatórios de sustentabilidade 
                  que comunicam de forma transparente e eficaz seu desempenho ambiental, social 
                  e de governança.
                </p>
                <p>
                  Nossos especialistas utilizam as melhores práticas e padrões internacionais 
                  para garantir que seus relatórios atendam às expectativas de stakeholders e 
                  reguladores.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-emerald-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                        {index === 1 && <PieChart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                        {index === 2 && <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                        {index === 3 && <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-xs">
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
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Referências</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">GRI</div>
                    <div className="text-sm text-gray-400">Global Reporting Initiative</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">SASB</div>
                    <div className="text-sm text-gray-400">Sustainability Accounting Standards</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">TCFD</div>
                    <div className="text-sm text-gray-400">Task Force on Climate-related Financial Disclosures</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Precisa de um Relatório ESG?
              </h3>
              <p className="text-emerald-100 mb-6">
                Transforme dados em narrativas de sustentabilidade
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-emerald-700 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
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
            <button className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
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