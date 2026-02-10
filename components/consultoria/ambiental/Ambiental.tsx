"use client"
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TreePine,
  Waves,
  Mountain,
  CheckCircle,
  FileText,
  Map,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function EstudosAmbientaisPage() {
  const services = [
    {
      title: "Avaliação de Impacto Ambiental (AIA)",
      description: "Estudos detalhados de impactos ambientais para projetos de diferentes categorias.",
      categories: ["Categoria A+", "Categoria A", "Categoria B", "Categoria C"]
    },
    {
      title: "Planos de Gestão Ambiental",
      description: "Desenvolvimento de estratégias para minimizar impactos ambientais.",
      categories: ["Monitorização", "Mitigação", "Compensação", "Relatórios"]
    },
    {
      title: "Auditorias Ambientais",
      description: "Verificação da conformidade ambiental e identificação de oportunidades de melhoria.",
      categories: ["Conformidade Legal", "Desempenho", "Sistemas", "Sítios"]
    },
    {
      title: "Gestão Costeira",
      description: "Proteção e gestão sustentável de zonas costeiras.",
      categories: ["Erosão Costeira", "Ecossistemas", "Planeamento", "Monitorização"]
    }
  ];

  const caseStudies = [
    "Projecto de Mineração - Tete",
    "Porto de Pemba - Reabilitação",
    "Linha de Transmissão - Norte",
    "Parque Industrial - Maputo"
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
            <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consultoria <span className="text-green-200">Ambiental</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Soluções integradas para gestão ambiental sustentável e conformidade com a legislação moçambicana.
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
                Nossos Serviços Ambientais
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Oferecemos uma gama completa de serviços de consultoria ambiental para ajudar organizações 
                  a operar de forma sustentável e em conformidade com as regulamentações ambientais moçambicanas 
                  e internacionais.
                </p>
                <p>
                  Nossa equipa de especialistas ambientais combina conhecimento técnico com experiência prática 
                  em diversos sectores, desde mineração até infraestruturas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TreePine className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.categories.map((category, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs">
                              {category}
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
            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Map className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Projectos Realizados</h3>
              </div>
              <div className="space-y-4">
                {caseStudies.map((project, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{project}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        AIA e Gestão Ambiental
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Nossa Especialização</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Waves className="w-8 h-8" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Gestão de Recursos Hídricos</div>
                    <div className="text-sm text-gray-400">Hidrologia e qualidade da água</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mountain className="w-8 h-8" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Conservação da Biodiversidade</div>
                    <div className="text-sm text-gray-400">Estudos e planos de conservação</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Safeguards do Banco Mundial</div>
                    <div className="text-sm text-gray-400">Monitorização e conformidade</div>
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
                Precisa de Consultoria Ambiental?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Entre em contacto para avaliarmos seu projecto
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Avaliação
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
            <button className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
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