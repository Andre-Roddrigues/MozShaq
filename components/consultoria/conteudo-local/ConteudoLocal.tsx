"use client"
import { motion } from 'framer-motion';
import { 
  Users, 
  Handshake,
  TrendingUp,
  Heart,
  CheckCircle,
  FileText,
  Target,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function ConteudoLocalPage() {
  const services = [
    {
      title: "Plano de Conteúdo Local",
      description: "Desenvolvimento de estratégias para maximizar a participação local.",
      components: ["Mapeamento", "Capacitação", "Monitorização", "Relatórios"]
    },
    {
      title: "Desenvolvimento de Fornecedores",
      description: "Programas para fortalecer a cadeia de fornecimento local.",
      components: ["Avaliação", "Mentoria", "Certificação", "Networking"]
    },
    {
      title: "Contratação Local",
      description: "Estratégias para maximizar o emprego local qualificado.",
      components: ["Recrutamento", "Formação", "Retenção", "Progressão"]
    },
    {
      title: "Responsabilidade Social",
      description: "Programas de desenvolvimento comunitário sustentável.",
      components: ["Educação", "Saúde", "Infraestruturas", "Sustentabilidade"]
    }
  ];

  const benefits = [
    "Cumprimento legal",
    "Licença social para operar",
    "Desenvolvimento económico local",
    "Redução de custos logísticos",
    "Melhoria da imagem corporativa",
    "Estabilidade operacional"
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
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Conteúdo Local e RSC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento <span className="text-teal-200">Local Sustentável</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Estratégias para maximizar o impacto positivo e criar valor partilhado nas comunidades.
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
                  práticas internacionais em desenvolvimento comunitário e sustentabilidade.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-teal-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Target className="w-6 h-6 text-teal-600 dark:text-teal-400" />}
                        {index === 1 && <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />}
                        {index === 2 && <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />}
                        {index === 3 && <Heart className="w-6 h-6 text-teal-600 dark:text-teal-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.components.map((component, idx) => (
                            <span key={idx} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-xs">
                              {component}
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
                <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Framework */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Quadro Legal</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Lei do Conteúdo Local</div>
                    <div className="text-sm text-gray-400">Decreto 92/2014</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ODS - ONU</div>
                    <div className="text-sm text-gray-400">Objectivos de Desenvolvimento Sustentável</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-teal-600" />
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Deseja Maximizar seu Impacto Local?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Desenvolvemos estratégias de conteúdo local personalizadas
              </p>
              <Link href="contacte-nos">
                <motion.button
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Desenhar Estratégia
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{item.metric}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/consultoria">
            <button className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
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