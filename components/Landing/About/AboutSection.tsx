"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Shield,
  Leaf,
  Globe,
  Clock
} from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: "12+", label: "Anos de Experiência", icon: Clock },
    { number: "60%", label: "Equipa Jovem", icon: Users },
    { number: "50+", label: "Projectos Concluídos", icon: Award },
    { number: "15+", label: "Sectores de Actuação", icon: Globe }
  ];

  const valores = [
    {
      icon: Shield,
      title: "Segurança & Saúde",
      description: "Priorizamos a segurança e saúde em todas as nossas operações"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Comprometidos com o desenvolvimento sustentável de Moçambique"
    },
    {
      icon: Heart,
      title: "Responsabilidade",
      description: "Actuamos com responsabilidade social e ambiental"
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Ouvimos atentamente as necessidades e superamos expectativas"
    }
  ];

  return (
    <section id="sobre" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-main/10 dark:bg-brand-main/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* <motion.div
            className="inline-flex items-center gap-2 bg-brand-main/10 dark:bg-brand-main/20 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-brand-main rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-brand-main dark:text-brand-main/80">
              Sobre a Mozshaq
            </span>
          </motion.div> */}

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quem <span className="text-gray-800 dark:text-white">Somos</span>
          </motion.h2>


        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Quem Somos Text */}
          <motion.div
            className="space-y-6 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              <p className="text-justify">
                Somos a <strong>Mozshaq Consultoria e Serviços</strong>, uma empresa genuinamente moçambicana
                que oferece soluções integradas em estudos e consultoria especializada para o desenvolvimento
                sustentável de Moçambique.
              </p>

              <p className="text-justify">
                Estabelecida em 2013, a <strong>MOZSHAQ</strong> conta com uma equipa técnica especializada
                nas áreas das suas operações, focada em assistência técnica e serviços, proporcionando aos
                seus clientes respostas locais com padrões internacionais.
              </p>

              <p className="text-justify">
                A experiência adquirida ao longo dos mais de 12 anos de existência e o conhecimento acumulado
                pelos colaboradores constituem uma vantagem competitiva para a empresa e contribuem para
                resolver os desafios colocados pelas necessidades de satisfazer plenamente os nossos clientes.
              </p>

              <p className="text-justify">
                Esforçamo-nos todos os dias para entregar soluções de valor acrescentado aos nossos clientes
                em qualquer sector de actividade, permitindo que se diferenciem neste mercado cada vez mais competitivo.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Missão, Visão e Valores */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Missão */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Missão
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Optimizar organizações através de normas nacionais e internacionais para reduzir custos,
                    aumentar a produtividade e mitigar impactos ambientais e riscos de saúde, garantindo um
                    desenvolvimento sustentável contínuo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visão */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Visão
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Tornar-nos a melhor e preferida empresa moçambicana de assistência técnica em Estudos
                    e Consultoria Especializada, Gestão de Projectos, Formação e soluções de Outsourcing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div
  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 md:p-6 border border-blue-100 dark:border-blue-800"
  whileHover={{ y: -5 }}
>
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </div>
    
    <div className="flex-1 w-full">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 text-center sm:text-left">
        Valores
      </h3>
      
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
        {valores.map((valor, index) => {
          const ValorIcon = valor.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-main rounded-lg flex items-center justify-center flex-shrink-0">
                <ValorIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {valor.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Col-span-2 */}
        <motion.div
          className="bg-brand-blue/10  dark:from-brand-blue/5 dark:to-brand-main/5 rounded-3xl p-8 md:p-12 col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-1 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-center md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                O Nosso Maior Património: <span className="text-gray-800 dark:text-white">A Nossa Equipa</span>
              </h3>
              <p className="text-gray-600 text-center dark:text-gray-300 leading-relaxed mb-6">
                Com cerca de <strong>60% de uma equipa jovem e dinâmica</strong>, a MOZSHAQ possui uma
                equipa multidisciplinar, motivada pelo denominador comum: <span className="text-brand-main">o desenvolvimento sustentável.</span>
              </p>
              <p className="text-gray-600 text-center dark:text-gray-300 leading-relaxed">
                Priorizamos a transferência de conhecimento e estamos comprometidos em criar capacidade interna.
                Em todos os projectos, encontramos um consultor externo para acrescentar valor aos nossos
                consultores locais através da ferramenta de transferência de conhecimento.
              </p>
            </div>

            {/* <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <StatIcon className="w-8 h-8 text-brand-main mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}