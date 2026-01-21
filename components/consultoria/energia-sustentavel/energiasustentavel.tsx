"use client"
import { motion } from 'framer-motion';
import { 
  Zap, 
  Sun,
  Wind,
  Battery,
  CheckCircle,
  FileText,
  TrendingUp,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function EnergiaSustentavelPage() {
  const services = [
    {
      title: "Estudos de Viabilidade",
      description: "Análise técnica e económica de projetos de energia renovável.",
      technologies: ["Solar", "Eólica", "Hídrica", "Biomassa"]
    },
    {
      title: "Auditorias Energéticas",
      description: "Identificação de oportunidades de eficiência energética.",
      technologies: ["Consumo", "Perdas", "Oportunidades", "ROI"]
    },
    {
      title: "Design de Projectos",
      description: "Desenho técnico de sistemas de energia renovável.",
      technologies: ["Engenharia", "Layout", "Especificações", "Orçamento"]
    },
    {
      title: "Supervisão de Implementação",
      description: "Acompanhamento técnico da instalação e comissionamento.",
      technologies: ["Qualidade", "Prazo", "Segurança", "Performance"]
    }
  ];

  const technologies = [
    { name: "Solar Fotovoltaico", icon: Sun },
    { name: "Energia Eólica", icon: Wind },
    { name: "Micro-hídricas", icon: Wind },
    { name: "Armazenamento", icon: Battery }
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
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Energia Sustentável</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções <span className="text-cyan-200">Energéticas Verdes</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Consultoria especializada em energias renováveis e eficiência energética para um futuro sustentável.
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
                Transição Energética Sustentável
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A Mozshaq está na vanguarda da transição energética em Moçambique, oferecendo soluções 
                  inovadoras em energias renováveis que combinam viabilidade económica com responsabilidade 
                  ambiental.
                </p>
                <p>
                  Trabalhamos desde a concepção até à implementação de projectos energéticos, garantindo 
                  máxima eficiência e retorno do investimento.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-cyan-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-xs">
                              {tech}
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
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-center p-4 bg-cyan-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <tech.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Vantagens</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Redução de Custos</div>
                    <div className="text-sm text-gray-400">Até 40% em energia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Independência Energética</div>
                    <div className="text-sm text-gray-400">Auto-suficiência</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Pegada de Carbono</div>
                    <div className="text-sm text-gray-400">Redução significativa</div>
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
                Energia Renovável para seu Negócio?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Avaliamos sua viabilidade energética
              </p>
              <Link href="contacte-nos">
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Estudo
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
          <Link href="/consultoria">
            <button className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
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