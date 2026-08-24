// components/consulting/ConformidadeIndustrial.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  Factory, 
  Shield, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  Building2,
  ClipboardCheck,
  Scale
} from 'lucide-react';
import Link from 'next/link';

export default function ConformidadeIndustrialPage() {
  const services = [
    {
      title: "Auditorias de Conformidade",
      description: "Avaliação sistemática da conformidade com regulamentos e padrões industriais.",
      applications: ["Auditoria Interna", "Auditoria de Terceiros", "Checklist Regulatório", "Plano de Ação"]
    },
    {
      title: "Padrões de Segurança",
      description: "Implementação e manutenção de padrões de segurança industrial.",
      applications: ["NRs", "ISO 45001", "Procedimentos Seguros", "EPIs"]
    },
    {
      title: "Regulamentação Industrial",
      description: "Orientação sobre requisitos legais e regulatórios específicos do setor.",
      applications: ["Licenciamento", "Alvarás", "Conformidade Legal", "Atualização Regulatória"]
    },
    {
      title: "Licenciamento",
      description: "Processos de obtenção e renovação de licenças e autorizações industriais.",
      applications: ["Licença Ambiental", "Licença de Operação", "Certificações", "Renovações"]
    }
  ];

  const benefits = [
    "Evitar multas e penalidades",
    "Redução de riscos legais",
    "Proteção da reputação",
    "Acesso a novos mercados",
    "Segurança operacional",
    "Vantagem competitiva"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-700 to-amber-800 dark:from-orange-900 dark:to-amber-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Factory className="w-5 h-5" />
              <span className="text-sm font-medium">Conformidade Industrial</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conformidade e <span className="text-amber-200">Segurança</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Conformidade regulatória e padrões de segurança industrial para operações confiáveis.
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
                Garantia de Conformidade Industrial
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A MozShaq oferece serviços especializados em conformidade industrial, 
                  ajudando sua organização a navegar no complexo ambiente regulatório e 
                  garantir operações seguras e em conformidade.
                </p>
                <p>
                  Nossos especialistas realizam auditorias completas, identificam gaps de 
                  conformidade e desenvolvem planos de ação para garantir que sua empresa 
                  atenda a todos os requisitos legais e regulatórios.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-orange-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <ClipboardCheck className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                        {index === 1 && <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                        {index === 2 && <Scale className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                        {index === 3 && <Building2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs">
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
                <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
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
                  <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 45001</div>
                    <div className="text-sm text-gray-400">Segurança e Saúde Ocupacional</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">NRs</div>
                    <div className="text-sm text-gray-400">Normas Regulamentadoras</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 14001</div>
                    <div className="text-sm text-gray-400">Gestão Ambiental</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-orange-700 to-amber-800 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Garanta a Conformidade da sua Empresa
              </h3>
              <p className="text-amber-100 mb-6">
                Evite riscos e assegure operações seguras
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-orange-700 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Análise
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
            <button className="flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300">
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