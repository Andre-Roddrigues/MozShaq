"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Clock,
  Shield,
  Leaf,
  Globe,
  GraduationCap,
  BookOpen,
  Settings
} from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: "10+", label: "Anos de Experiência", icon: Clock },
    { number: "500+", label: "Profissionais Formados", icon: Users },
    { number: "50+", label: "Cursos Disponíveis", icon: Award },
    { number: "15+", label: "Sectores de Actuação", icon: Globe }
  ];

  const valores = [
    {
      icon: Shield,
      title: "Qualidade & Segurança",
      description: "Compromisso com os mais altos padrões de qualidade e segurança"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Promovemos práticas sustentáveis em todas as formações"
    },
    {
      icon: Heart,
      title: "Responsabilidade Social",
      description: "Investimos no desenvolvimento das comunidades locais"
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Soluções personalizadas para cada necessidade específica"
    }
  ];

  const areasFormacao = [
    {
      icon: Shield,
      title: "Saúde e Segurança",
      description: "Formação completa em SSO e prevenção de riscos"
    },
    {
      icon: Settings,
      title: "Operação de Equipamentos",
      description: "Certificação em operação de máquinas e equipamentos"
    },
    {
      icon: BookOpen,
      title: "Sistemas de Gestão",
      description: "Cursos ISO 9001, 14001, 45001 e outros"
    },
    {
      icon: GraduationCap,
      title: "Soft Skills",
      description: "Desenvolvimento de competências interpessoais"
    }
  ];

  return (
    <section id="sobre" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 dark:bg-green-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-500/10 dark:bg-green-500/20 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-brand-main dark:text-green-400">
              SHERQ ACADEMY
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Centro de <span className="text-brand-main dark:text-green-400">Formação Profissional</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A <strong>SHERQ ACADEMY</strong> é um centro de formação profissional licenciado pelo 
            <strong> Ministério da Ciência e Tecnologia, Ensino Superior e Técnico-Profissional</strong> e 
            acreditado pela <strong>Autoridade Nacional de Educação Profissional</strong> de Moçambique.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-start mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Formação que Transforma Pessoas e Organizações
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Especializamo-nos no desenvolvimento de competências técnicas e comportamentais, 
                actuando em duas grandes áreas: <strong>operação de máquinas e equipamentos</strong> e 
                <strong> habilidades interpessoais</strong>.
              </p>
              
              <p>
                Desenvolvemos <strong>formações sob medida</strong> para cada organização, analisando 
                as necessidades específicas em conjunto com a empresa para conceber e implementar 
                acções formativas adaptadas à sua estratégia.
              </p>
              
              <p>
                A nossa metodologia garante que cada formação seja planeada como a solução mais 
                adequada para transformar pessoas e potenciar resultados organizacionais.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
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
          </motion.div>

          {/* Mission, Vision & Values */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Mission */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Missão
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Desenvolver competências profissionais através de formação de qualidade, 
                    contribuindo para a valorização dos recursos humanos e o crescimento 
                    sustentável das organizações em Moçambique.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Visão
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Ser o centro de formação de referência em Moçambique, reconhecido pela 
                    excelência na capacitação profissional e na contribuição para o 
                    desenvolvimento socioeconómico do país.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    Valores
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {valores.map((valor, index) => {
                      const ValorIcon = valor.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="w-8 h-8 bg-brand-main rounded-lg flex items-center justify-center flex-shrink-0">
                            <ValorIcon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
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

        {/* Areas de Formação */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Áreas de <span className="text-brand-main">Formação</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Oferecemos uma vasta gama de cursos profissionais organizados em quatro áreas principais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasFormacao.map((area, index) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AreaIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Legal Certification */}
        <motion.div
          className="text-center bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Award className="w-16 h-16 text-brand-main mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Certificação e Acreditação
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Licenciados pelo <strong>Ministério da Ciência e Tecnologia, Ensino Superior e Técnico-Profissional</strong> 
            (Alvará N° 1091/051/CFP/2019) e acreditados pela <strong>Autoridade Nacional de Educação Profissional</strong>, 
            em conformidade com o Decreto 28/2017 de 11 de Julho.
          </p>
        </motion.div>
      </div>
    </section>
  );
}