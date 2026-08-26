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
  Users,
  Home,
  Handshake
} from 'lucide-react';
import Link from 'next/link';

export default function EstudosAmbientaisPage() {
  const services = [
    {
      title: "Avaliação de Impacto Ambiental (AIA)",
      description: "Estudos detalhados de impactos ambientais para projetos de diferentes categorias.",
      categories: ["Categoria A+", "Categoria A", "Categoria B", "Categoria C"],
      icon: FileText
    },
    {
      title: "Planos de Gestão Ambiental",
      description: "Desenvolvimento de estratégias para minimizar impactos ambientais.",
      categories: ["Monitorização", "Mitigação", "Compensação", "Relatórios"],
      icon: Leaf
    },
    {
      title: "Auditorias Ambientais",
      description: "Verificação da conformidade ambiental e identificação de oportunidades de melhoria.",
      categories: ["Conformidade Legal", "Desempenho", "Sistemas", "Sítios"],
      icon: CheckCircle
    },
    {
      title: "Gestão Costeira",
      description: "Proteção e gestão sustentável de zonas costeiras.",
      categories: ["Erosão Costeira", "Ecossistemas", "Planeamento", "Monitorização"],
      icon: Waves
    },
    {
      title: "Reassentamento e Compensação",
      description: "Planeamento e implementação de programas de reassentamento involuntário e compensação justa.",
      categories: [
        "Planos de Ação de Reassentamento (PAR)", 
        "Compensação Justa e Adequada", 
        "Restauração de Meios de Subsistência",
        "Consulta e Participação Comunitária",
        "Monitorização Pós-Reassentamento",
        "Safeguards do Banco Mundial"
      ],
      icon: Home
    }
  ];

  const caseStudies = [
    "Projecto de Mineração - Tete",
    "Porto de Pemba - Reabilitação",
    "Linha de Transmissão - Norte",
    "Parque Industrial - Maputo",
    "Projecto de Barragem - Cahora Bassa"
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
                Estudos e Projectos Ambientais
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Oferecemos uma gama completa de serviços de consultoria ambiental para ajudar organizações 
                  a operar de forma sustentável e em conformidade com as regulamentação ambiental local e boas práticas internacionais.
                </p>
                <p>
                  Nossa equipa de especialistas ambientais combina conhecimento técnico com experiência prática 
                  em diversos sectores, desde mineraçã, construção, petróleo e gás, energia, portos,agricultura entre outras áreas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.slice(0, 4).map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-gray-700"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                  );
                })}

                {/* Reassentamento - col-span-2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-2 bg-gradient-to-br from-green-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                          Reassentamento e Compensação
                        </h3>
                        <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                          Safeguards Sociais
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        Planeamento e implementação de programas de reassentamento involuntário e compensação justa, 
                        em conformidade com a legislação moçambicana e padrões internacionais (Banco Mundial, IFC).
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {services[4].categories.map((category, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Reassentamento Detail Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-green-100 dark:border-green-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Reassentamento Involuntário
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Conformidade com Padrões Internacionais
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Nossa Abordagem</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Planos de Ação de Reassentamento (PAR) alinhados com a legislação moçambicana e padrões internacionais (Banco Mundial, IFC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Compensação justa e adequada para bens e meios de subsistência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Restauração e melhoria dos meios de subsistência das comunidades afectadas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Processo Participativo</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Consulta e participação activa das comunidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mecanismos de reclamação e resolução de conflitos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Monitorização e avaliação pós-reassentamento</span>
                    </li>
                  </ul>
                </div>
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
                        AIA, Gestão Ambiental e Reassentamento
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Nossa Especialização</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Waves className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Gestão de Recursos Hídricos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Hidrologia e qualidade da água</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mountain className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Conservação da Biodiversidade</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Estudos e planos de conservação</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Safeguards do Banco Mundial</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Monitorização e conformidade</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Home className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Reassentamento Involuntário</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">PAR, compensação e restauração de subsistência</div>
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
          <Link href="/#areas">
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