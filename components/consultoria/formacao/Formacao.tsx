"use client"
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Target,
  Clock,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function FormacaoPage() {
  const programs = [
    {
      title: "Segurança no Trabalho",
      description: "Formação em práticas seguras e uso correto de equipamentos de proteção.",
      duration: "16-40 horas",
      audience: "Todos os colaboradores"
    },
    {
      title: "Operadores de Máquinas",
      description: "Certificação para operação segura de equipamentos pesados.",
      duration: "40-80 horas",
      audience: "Operadores e supervisores"
    },
    {
      title: "Gestão de Projetos",
      description: "Metodologias e ferramentas para gestão eficiente de projetos.",
      duration: "40 horas",
      audience: "Gestores e coordenadores"
    },
    {
      title: "Habilidades Técnicas",
      description: "Desenvolvimento de competências específicas por sector.",
      duration: "Variável",
      audience: "Técnicos especializados"
    }
  ];

  const methodologies = [
    "Formação prática no local de trabalho",
    "Simulações e estudos de caso",
    "Acompanhamento pós-formação",
    "Avaliação de competências",
    "Certificação reconhecida"
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
            <div className="inline-flex items-center gap-2  backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento de <span className="text-brand-main">Competências</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Programas de formação customizados para capacitar equipas e melhorar desempenho organizacional.
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
                Nossa Metodologia de Formação
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A Mozshaq desenvolve programas de formação que combinam teoria com prática, garantindo 
                  que os conhecimentos adquiridos sejam aplicados imediatamente no local de trabalho. 
                  Acreditamos na aprendizagem contínua como motor de crescimento.
                </p>
                <p>
                  Trabalhamos com formadores certificados e materiais didáticos atualizados, adaptando 
                  cada programa às necessidades específicas da organização e do sector.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-purple-600 dark:text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{program.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{program.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          {/* <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-4 h-4 text-brand-blue" />
                            <span>{program.duration}</span>
                          </div> */}
                          <div className="flex items-center gap-2 text-gray-400">
                            <Users className="w-4 h-4 text-brand-blue" />
                            <span>{program.audience}</span>
                          </div>
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
            {/* Methodologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-brand-blue dark:text-brand-blue" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nossa Abordagem</h3>
              </div>
              <div className="space-y-3">
                {methodologies.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Benefícios da Formação</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Maior Produtividade</div>
                    <div className="text-sm text-gray-400">+30% em média</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Redução de Acidentes</div>
                    <div className="text-sm text-gray-400">Até -50%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Satisfação dos Colaboradores</div>
                    <div className="text-sm text-gray-400">Retenção de talentos</div>
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
                Pronto para Capacitar sua Equipa?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Desenhamos programas sob medida
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Programa
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
            <button className="flex items-center gap-2 text-brand-blue dark:text-brand-blue hover:text-brand-blue dark:hover:text-brand-blue">
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