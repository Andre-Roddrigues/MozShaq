"use client"
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Map,
  Compass,
  Layers,
  CheckCircle,
  FileText,
  Target,
  Navigation
} from 'lucide-react';
import Link from 'next/link';

export default function TopografiaGeotecniaPage() {
  const services = [
    {
      title: "Levantamentos Topográficos",
      description: "Mapeamento preciso do terreno para projetos de engenharia e construção.",
      applications: ["Projectos viários", "Loteamentos", "Mineração", "Agricultura"]
    },
    {
      title: "Estudos Geotécnicos",
      description: "Análise das propriedades do solo para fundações e estruturas.",
      applications: ["Fundações", "Taludes", "Aterros", "Estabilidade"]
    },
    {
      title: "Cartografia e SIG",
      description: "Produção de mapas temáticos e sistemas de informação geográfica.",
      applications: ["Planeamento urbano", "Gestão territorial", "Monitorização", "Análise espacial"]
    },
    {
      title: "Hidrologia e Drenagem",
      description: "Estudos de recursos hídricos e sistemas de drenagem.",
      applications: ["Captação de água", "Drenagem pluvial", "Gestão de bacias", "Protecção costeira"]
    }
  ];

  const equipment = [
    "Estação Total",
    "GPS RTK",
    "Níveis Digitais",
    "Drones de Mapeamento",
    "Software CAD/GIS",
    "Equipamento de Sondagem"
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
              <Mountain className="w-5 h-5" />
              <span className="text-sm font-medium">Topografia e Geotecnia</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Precisão <span className="text-brand-main">Georreferenciada</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Soluções técnicas avançadas em topografia, geotecnia e sistemas de informação geográfica.
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
                Tecnologia e Precisão no Terreno
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A Mozshaq oferece serviços especializados em topografia e geotecnia, utilizando tecnologia 
                  de ponta para garantir a máxima precisão em levantamentos de terreno e estudos de solo.
                </p>
                <p>
                  Nossa equipa técnica está equipada com os mais modernos instrumentos de medição e software 
                  especializado, garantindo resultados confiáveis para projectos de engenharia civil, 
                  mineração e desenvolvimento territorial.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-amber-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-amber-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Map className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                        {index === 1 && <Layers className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                        {index === 2 && <Navigation className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                        {index === 3 && <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-xs">
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
            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Equipamento de Precisão</h3>
              </div>
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-brand-main flex-shrink-0" />
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 "
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Padrões de Qualidade</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-brand-main" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">ISO 9001</div>
                    <div className="text-sm text-gray-400">Sistema de Gestão da Qualidade</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-brand-main" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Tolerância Milimétrica</div>
                    <div className="text-sm text-gray-400">Precisão em levantamentos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-main" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Acreditação</div>
                    <div className="text-sm text-gray-400">Padrões internacionais</div>
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
                Precisa de Levantamentos Precisos?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Orçamentamos seu projecto topográfico
              </p>
              <Link href="contacte-nos">
                <motion.button
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Orçamento
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Projectos Recentes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Loteamento Urbano - Maputo",
                description: "Topografia detalhada para desenvolvimento habitacional"
              },
              {
                title: "Mineração - Tete",
                description: "Estudos geotécnicos para operação mineira"
              },
              {
                title: "Rodovia Nacional - N1",
                description: "Levantamento para reabilitação rodoviária"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/consultoria">
            <button className="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300">
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