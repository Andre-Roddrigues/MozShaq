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
      icon: Leaf,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Planos de Gestão Ambiental",
      description: "Desenvolvimento de estratégias para minimizar impactos ambientais.",
      categories: ["Monitorização", "Mitigação", "Compensação", "Relatórios"],
      icon: FileText,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Auditorias Ambientais",
      description: "Verificação da conformidade ambiental e identificação de oportunidades de melhoria.",
      categories: ["Conformidade Legal", "Desempenho Ambiental", "Sistemas", "Sítios"],
      icon: CheckCircle,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Gestão Costeira",
      description: "Proteção e gestão sustentável de zonas costeiras.",
      categories: ["Erosão Costeira", "Ecossistemas", "Planeamento", "Monitorização"],
      icon: Waves,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Planos de Reassentamento",
      description: "Planeamento, desenvolvimento e implementação de planos de reassentamento involuntário com compensação justa.",
      categories: [
        "Planos de Ação de Reassentamento (PAR)",
        "Compensação Justa e Adequada",
        "Restauração de Meios de Subsistência",
        "Consulta e Participação Comunitária",
        "Monitorização Pós-Reassentamento",
        "Safeguards do Banco Mundial",
        "Conformidade com a Legislação Moçambicana"
      ],
      icon: Home,
      color: "from-amber-500 to-orange-600"
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
      <section className="relative py-20 bg-gradient-to-r from-green-700 to-emerald-800 dark:from-green-900 dark:to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Estudos Ambientais</span>
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
                Estudos Ambientais e Sociais
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Oferecemos uma gama completa de serviços de consultoria ambiental para ajudar organizações 
                  a operar de forma sustentável e em conformidade com as regulamentação ambiental local e boas práticas internacionais.
                </p>
                <p>
                  Nossa equipa de especialistas ambientais combina conhecimento técnico com experiência prática 
                  em diversos sectores, desde mineração, construção, petróleo e gás, energia, portos, agricultura entre outras áreas.
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
                      className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${
                        service.title === "Planos de Reassentamento" ? "md:col-span-2 border-2 border-amber-200 dark:border-amber-700" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              {service.title}
                            </h3>
                            {service.title === "Planos de Reassentamento" && (
                              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 rounded-full text-xs font-medium">
                                Safeguards Sociais
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.categories.slice(0, 4).map((category, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-600/50 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                                {category}
                              </span>
                            ))}
                            {service.categories.length > 4 && (
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600/50 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                                +{service.categories.length - 4} mais...
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Seção de Reassentamento Detalhada - Removida e integrada acima */}
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
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{project}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        AIA, Gestão Ambiental e Reassentamento
                      </div>
                    </div>
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
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Decreto 28/2017</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Legislação Ambiental</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Banco Mundial</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Safeguards Ambientais</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">IFC</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Padrões de Desempenho</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-green-700 to-emerald-800 dark:from-green-900 dark:to-emerald-900 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Precisa de Consultoria Ambiental?
              </h3>
              <p className="text-green-100 text-sm mb-6">
                Entre em contacto para avaliarmos seu projecto
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-green-700 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
            <button className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
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