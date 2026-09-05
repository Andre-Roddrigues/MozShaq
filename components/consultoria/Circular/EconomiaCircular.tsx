// components/consulting/EconomiaCircular.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  Recycle, 
  Leaf, 
  Boxes, 
  Gauge,
  CheckCircle,
  RefreshCw,
  Trash2,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function EconomiaCircularPage() {
  const services = [
    {
      title: "Gestão de Resíduos",
      description: "Sistemas e processos para gestão eficiente de resíduos industriais e urbanos.",
      applications: ["Coleta Seletiva", "Compostagem", "Tratamento", "Destinação Final"]
    },
    {
      title: "Reciclagem e Reutilização",
      description: "Implementação de sistemas de reciclagem e reutilização de materiais.",
      applications: ["Triagem", "Processamento", "Logística Reversa", "Novos Produtos"]
    },
    {
      title: "Eficiência de Recursos",
      description: "Otimização do uso de recursos para redução de desperdícios.",
      applications: ["Ecoeficiência", "Produção Limpa", "Simbiose Industrial", "Certificações"]
    },
    {
      title: "Modelos de Negócio Circulares",
      description: "Desenvolvimento de estratégias e modelos de negócios baseados na economia circular.",
      applications: ["Design Circular", "Produto como Serviço", "Compartilhamento", "Remanufatura"]
    }
  ];

  const benefits = [
    "Redução de custos operacionais",
    "Minimização de resíduos",
    "Conformidade regulatória",
    "Eficiência de recursos",
    "Inovação e competitividade",
    "Responsabilidade ambiental"
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
              <Recycle className="w-5 h-5" />
              <span className="text-sm font-medium">Economia Circular</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Economia <span className="text-green-200">Circular</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Gestão de resíduos e implementação de economia circular para um futuro sustentável.
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
                Transformando Resíduos em Recursos
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  A MozShaq oferece soluções inovadoras para implementação de economia circular, 
                  ajudando sua organização a transformar resíduos em recursos e criar valor 
                  a partir de práticas sustentáveis.
                </p>
                <p>
                  Nossos especialistas desenvolvem estratégias integradas que otimizam o uso de 
                  recursos, reduzem custos e minimizam o impacto ambiental, promovendo a 
                  transição para modelos de negócios circulares.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Trash2 className="w-6 h-6 text-green-600 dark:text-green-400" />}
                        {index === 1 && <RefreshCw className="w-6 h-6 text-green-600 dark:text-green-400" />}
                        {index === 2 && <Gauge className="w-6 h-6 text-green-600 dark:text-green-400" />}
                        {index === 3 && <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs">
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Benefícios</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Princípios</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Recycle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Reduzir</div>
                    <div className="text-sm text-gray-400">Minimizar consumo de recursos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Reutilizar</div>
                    <div className="text-sm text-gray-400">Estender vida útil dos produtos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Boxes className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Reciclar</div>
                    <div className="text-sm text-gray-400">Transformar resíduos em matéria-prima</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl shadow-xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">
                Implemente a Economia Circular
              </h3>
              <p className="text-green-100 mb-6">
                Transforme resíduos em oportunidades
              </p>
              <Link href="/contacte-nos">
                <motion.button
                  className="w-full bg-white text-green-700 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar Transição
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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