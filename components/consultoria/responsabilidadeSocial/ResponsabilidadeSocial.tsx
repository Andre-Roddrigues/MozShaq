// components/consulting/ResponsabilidadeSocial.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Users, 
  Handshake, 
  Globe, 
  Target,
  CheckCircle,
  FileText,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function ResponsabilidadeSocialPage() {
  const services = [
    {
      title: "Programas de RSE",
      description: "Desenvolvimento e implementação de programas de responsabilidade social empresarial alinhados com os objetivos de negócio.",
      applications: ["Estratégia de RSE", "Projetos Comunitários", "Voluntariado Corporativo", "Investimento Social"]
    },
    {
      title: "Engajamento Comunitário",
      description: "Estratégias para envolver e fortalecer relações com comunidades locais e stakeholders.",
      applications: ["Diálogo Comunitário", "Mapeamento de Stakeholders", "Projetos de Desenvolvimento", "Avaliação de Percepção"]
    },
    {
      title: "Avaliação de Impacto Social",
      description: "Análise e medição dos impactos sociais das operações empresariais nas comunidades.",
      applications: ["Estudos de Impacto", "Indicadores Sociais", "Monitorização Contínua", "Relatórios de Impacto"]
    },
    {
      title: "Desenvolvimento Sustentável",
      description: "Integração de práticas sustentáveis que promovem o desenvolvimento econômico e social.",
      applications: ["ODS", "Desenvolvimento Local", "Empoderamento Comunitário", "Sustentabilidade"]
    }
  ];

  const benefits = [
    "Fortalecimento da imagem corporativa",
    "Melhoria no relacionamento com stakeholders",
    "Redução de riscos sociais",
    "Acesso a novos mercados",
    "Atração e retenção de talentos",
    "Contribuição para os ODS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-600 to-rose-700 dark:from-pink-900 dark:to-rose-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <HeartPulse className="w-5 h-5" />
              <span className="text-sm font-medium">Responsabilidade Social</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Responsabilidade <span className="text-pink-200">Social</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
              Engajamento comunitário e avaliações de impacto social para um desenvolvimento sustentável e inclusivo.
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
                Compromisso com a Comunidade
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A MozShaq acredita que o sucesso empresarial está intrinsecamente ligado ao 
                  desenvolvimento sustentável das comunidades onde atua. Nossos programas de 
                  responsabilidade social são projetados para criar valor compartilhado.
                </p>
                <p>
                  Trabalhamos com empresas para desenvolver estratégias de RSE que geram impacto 
                  positivo, fortalecem relações comunitárias e promovem o desenvolvimento social 
                  e econômico sustentável.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-pink-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Handshake className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                        {index === 1 && <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                        {index === 2 && <Target className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                        {index === 3 && <Globe className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-xs">
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
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Standards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Referências</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">GRI Standards</div>
                    <div className="text-sm text-gray-400">Relatórios de Sustentabilidade</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ODS</div>
                    <div className="text-sm text-gray-400">Objetivos de Desenvolvimento Sustentável</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HeartPulse className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 26000</div>
                    <div className="text-sm text-gray-400">Responsabilidade Social</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Implemente sua Estratégia de RSE
              </h3>
              <p className="text-pink-100 mb-6">
                Construa um legado de impacto social positivo
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-pink-700 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Fale com um Especialista
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/#areas">
            <button className="flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
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