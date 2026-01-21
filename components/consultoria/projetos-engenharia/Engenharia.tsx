"use client"
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wrench,
  Cpu,
  Layout,
  CheckCircle,
  FileText,
  Users,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function ProjetosEngenhariaPage() {
  const services = [
    {
      title: "Gestão de Projectos",
      description: "Planejamento, execução e controle de projectos de engenharia.",
      phases: ["Iniciação", "Planejamento", "Execução", "Encerramento"]
    },
    {
      title: "Design de Infraestruturas",
      description: "Projeto técnico de obras civis e infraestruturas diversas.",
      phases: ["Concepção", "Cálculos", "Desenhos", "Especificações"]
    },
    {
      title: "Supervisão de Obras",
      description: "Fiscalização técnica e controle de qualidade em obras.",
      phases: ["Inspecção", "Qualidade", "Prazo", "Orçamento"]
    },
    {
      title: "Estudos de Viabilidade",
      description: "Análise técnica e económica para tomada de decisão.",
      phases: ["Técnica", "Económica", "Ambiental", "Social"]
    }
  ];

  const sectors = [
    "Construção Civil",
    "Energia e Electricidade",
    "Portos e Logística",
    "Transportes e Vias",
    "Sistemas de Água",
    "Infraestruturas Sociais"
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
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">Engenharia e Projectos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excelência em <span className="text-brand-main">Projectos de Engenharia</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Soluções integradas em engenharia, desde a concepção até à entrega final.
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
                Abordagem Integral em Engenharia
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A Mozshaq oferece serviços completos de engenharia e gestão de projectos, combinando 
                  expertise técnica com gestão eficiente para garantir o sucesso de projectos complexos.
                </p>
                <p>
                  Nossa equipa multidisciplinar trabalha com metodologias reconhecidas internacionalmente, 
                  assegurando que cada projecto seja entregue dentro do prazo, orçamento e com a qualidade 
                  exigida.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-indigo-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                        {index === 1 && <Layout className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                        {index === 2 && <Wrench className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                        {index === 3 && <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.phases.map((phase, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-brand-blue dark:text-white rounded-full text-xs">
                              {phase}
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
            {/* Sectors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sectores de Actuação</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((sector, index) => (
                  <div key={index} className="p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{sector}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Methodologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800  dark:text-gray-700 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Metodologias</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">PMI/PMBOK</div>
                    <div className="text-sm text-gray-400">Gestão de projectos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">Lean Construction</div>
                    <div className="text-sm text-gray-400">Eficiência em obras</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">BIM</div>
                    <div className="text-sm text-gray-400">Modelagem de informação</div>
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
                Pronto para o seu Próximo Projecto?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Desenvolvemos soluções de engenharia sob medida
              </p>
              <Link href="contacte-nos">
                <motion.button
                  className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Falar com Especialista
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Specialized Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Projectos Especializados
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Fundações e Estruturas",
                icon: Building2,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Caminhos de Ferro e Portos",
                icon: Wrench,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Subestações e Centrais",
                icon: Cpu,
                color: "from-yellow-500 to-amber-500"
              },
              {
                title: "Urbanismo",
                icon: Layout,
                color: "from-purple-500 to-pink-500"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">{project.title}</h4>
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
            <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
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