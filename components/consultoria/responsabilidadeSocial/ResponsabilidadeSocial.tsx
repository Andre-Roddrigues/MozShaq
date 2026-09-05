// components/consulting/ConteudoLocalResponsabilidadeSocial.tsx
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
  Sparkles,
  Building2,
  Award,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ResponsabilidadeSocialPage() {
  // Serviços unificados
  const services = [
    {
      title: "Plano de Conteúdo Local",
      description: "Desenvolvimento de estratégias para maximizar a participação local e criar valor compartilhado.",
      icon: Target,
      applications: ["Mapeamento", "Capacitação", "Monitorização", "Relatórios"]
    },
    {
      title: "Desenvolvimento de Fornecedores",
      description: "Programas para fortalecer a cadeia de fornecimento local e promover o empreendedorismo.",
      icon: TrendingUp,
      applications: ["Avaliação", "Mentoria", "Certificação", "Networking"]
    },
    {
      title: "Programas de RSE",
      description: "Desenvolvimento e implementação de programas de responsabilidade social empresarial alinhados com os objetivos de negócio.",
      icon: HeartPulse,
      applications: ["Estratégia de RSE", "Projetos Comunitários", "Voluntariado Corporativo", "Investimento Social"]
    },
    {
      title: "Engajamento Comunitário",
      description: "Estratégias para envolver e fortalecer relações com comunidades locais e stakeholders.",
      icon: Users,
      applications: ["Diálogo Comunitário", "Mapeamento de Stakeholders", "Projetos de Desenvolvimento", "Avaliação de Percepção"]
    },
    {
      title: "Avaliação de Impacto Social",
      description: "Análise e medição dos impactos sociais das operações empresariais nas comunidades.",
      icon: Globe,
      applications: ["Estudos de Impacto", "Indicadores Sociais", "Monitorização Contínua", "Relatórios de Impacto"]
    },
    {
      title: "Desenvolvimento Sustentável",
      description: "Integração de práticas sustentáveis que promovem o desenvolvimento econômico e social.",
      icon: Building2,
      applications: ["ODS", "Desenvolvimento Local", "Empoderamento Comunitário", "Sustentabilidade"]
    }
  ];

  // Benefícios unificados
  const benefits = [
    "Cumprimento legal e regulatório",
    "Licença social para operar",
    "Desenvolvimento económico local",
    "Redução de custos logísticos",
    "Melhoria da imagem corporativa",
    "Estabilidade operacional",
    "Fortalecimento da imagem corporativa",
    "Melhoria no relacionamento com stakeholders",
    "Redução de riscos sociais",
    "Acesso a novos mercados",
    "Atração e retenção de talentos",
    "Contribuição para os ODS"
  ];

  // Métricas de Sucesso
  const metrics = [
    {
      metric: "80%",
      description: "Taxa média de contratação local alcançada",
      icon: Users
    },
    {
      metric: "120+",
      description: "Fornecedores locais desenvolvidos",
      icon: Handshake
    },
    {
      metric: "25M+",
      description: "Valor investido em comunidades",
      icon: TrendingUp
    },
    {
      metric: "100%",
      description: "Satisfação dos stakeholders",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-700 to-emerald-800 dark:from-teal-900 dark:to-emerald-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Handshake className="w-5 h-5" />
              <span className="text-sm font-medium">Conteúdo Local & Responsabilidade Social</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento <span className="text-teal-200">Local Sustentável</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Estratégias integradas para maximizar o impacto positivo, criar valor compartilhado 
              e promover o desenvolvimento sustentável nas comunidades onde atuamos.
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
                Valor Partilhado e Desenvolvimento Inclusivo
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A Mozshaq ajuda organizações a desenvolver e implementar estratégias eficazes de conteúdo 
                  local e responsabilidade social corporativa, criando valor tanto para o negócio como para 
                  as comunidades onde operam.
                </p>
                <p>
                  Nossa abordagem combina conhecimento das realidades locais moçambicanas com as melhores 
                  práticas internacionais em desenvolvimento comunitário e sustentabilidade, garantindo 
                  resultados que beneficiam todos os stakeholders.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-teal-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.applications.map((app, idx) => (
                              <span key={idx} className="px-2.5 py-1 bg-white/70 dark:bg-gray-600/50 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-2">
                {benefits.slice(0, 6).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 hover:bg-teal-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Legal Framework */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Quadro Legal</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Lei do Conteúdo Local</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Decreto 92/2014</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">ODS - ONU</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Objectivos de Desenvolvimento Sustentável</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Handshake className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">ISO 26000</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Responsabilidade Social</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <HeartPulse className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">GRI Standards</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Relatórios de Sustentabilidade</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Maximize seu Impacto Local
              </h3>
              <p className="text-teal-100 text-sm mb-6">
                Desenvolvemos estratégias de conteúdo local e RSE personalizadas para sua organização
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-teal-700 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Desenhar Estratégia
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Métricas de Sucesso
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.metric}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/#areas">
            <button className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
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