"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Building2, 
  Globe, 
  Factory,
  Ship,
  Truck,
  LandPlot,
  Sprout,
  Mountain,
  Waves,
  GraduationCap,
  Wifi,
  Users,
  TrendingUp,
  FileText,
  Shield,
  Target,
  HeartPulse,
  Leaf,
  BookOpen,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function AreasConsultoria() {
  const areasConsultoria = [
    {
      id: "sistemas-gestao",
      nome: "Sistemas de Gestão",
      descricao: "Certificação e implementação de normas ISO",
      icon: Target,
      color: "from-brand-blue to-brand-blue",
      subareas: [
        "ISO 9001 - Qualidade",
        "ISO 14001 - Ambiental",
        "ISO 45001 - Segurança",
        "ISO 27001 - Segurança da Informação"
      ]
    },
    {
      id: "ambiental",
      nome: "Estudos Ambientais",
      descricao: "Avaliação de impacto e gestão ambiental",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      subareas: [
        "AIA - Avaliação de Impacto Ambiental",
        "Planos de Gestão Ambiental",
        "Auditorias Ambientais",
        "Monitorização Ambiental"
      ]
    },
    {
      id: "seguranca-saude",
      nome: "Segurança e Saúde Ocupacional",
      descricao: "Proteção do capital humano",
      icon: Shield,
      color: "from-brand-main to-brand-main",
      subareas: [
        "Planos de Segurança",
        "Avaliação de Riscos",
        "Equipamentos de Proteção",
        "Investigação de Acidentes"
      ]
    },
    {
      id: "formacao",
      nome: "Formação e Capacitação",
      descricao: "Desenvolvimento de competências",
      icon: GraduationCap,
      color: "from-brand-blue to-brand-blue",
      subareas: [
        "Treino de Operadores",
        "Segurança no Trabalho",
        "Gestão de Projetos",
        "Habilidades Técnicas"
      ]
    },
    {
      id: "projetos-engenharia",
      nome: "Engenharia e Projetos",
      descricao: "Design, supervisão e gestão de projetos",
      icon: Building2,
      color: "from-brand-main to-brand-main",
      subareas: [
        "Estudos de Viabilidade",
        "Design de Infraestruturas",
        "Gestão de Projetos",
        "Supervisão de Obras"
      ]
    },
    {
      id: "energia-sustentavel",
      nome: "Energia Sustentável",
      descricao: "Soluções energéticas renováveis",
      icon: Zap,
      color: "from-brand-blue to-brand-blue",
      subareas: [
        "Estudos de Viabilidade",
        "Auditorias Energéticas",
        "Projectos Renováveis",
        "Eficiência Energética"
      ]
    },
    {
      id: "topografia-geotecnia",
      nome: "Topografia e Geotecnia",
      descricao: "Estudos de solo e mapeamento",
      icon: Mountain,
      color: "from-brand-main to-brand-main",
      subareas: [
        "Levantamentos Topográficos",
        "Estudos Geotécnicos",
        "Cartografia e Mapeamento",
        "Perfis de Solo"
      ]
    },
    {
      id: "conteudo-local",
      nome: "Conteúdo Local e RSC",
      descricao: "Desenvolvimento comunitário e sustentável",
      icon: Users,
      color: "from-teal-500 to-green-500",
      subareas: [
        "Plano de Conteúdo Local",
        "Desenvolvimento de Fornecedores",
        "Responsabilidade Social",
        "Capacitação Comunitária"
      ]
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="areas" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-main/20 dark:bg-brand-main/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nossas <span className="bg-brand-blue bg-clip-text text-transparent">Áreas de Consultoria</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Especialistas em soluções integradas para o desenvolvimento sustentável de Moçambique. 
            Cada área de consultoria é tratada com excelência e padrões internacionais.
          </p>
        </motion.div>

        {/* Grid de Áreas de Consultoria */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasConsultoria.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/consultoria/${area.id}`}>
                  <motion.div 
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col cursor-pointer"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Ícone da Área */}
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Nome e Descrição */}
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                      {area.nome}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                      {area.descricao}
                    </p>
                    
                    {/* Subáreas */}
                    <div className="space-y-2 mb-4">
                      {area.subareas.slice(0, 3).map((subarea, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {subarea}
                          </span>
                        </div>
                      ))}
                      {area.subareas.length > 3 && (
                        <div className="text-xs text-brand-main dark:text-brand-blue font-medium">
                          +{area.subareas.length - 3} mais...
                        </div>
                      )}
                    </div>
                    
                    {/* Botão de Ação */}
                    <motion.div 
                      className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium text-brand-main dark:text-brand-blue">
                        Saiba mais
                      </span>
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-brand-main/10">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-brand-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Estatísticas */}
        {/* <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Equipa Jovem e Dinâmica</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Nossa equipa é composta por jovens profissionais altamente motivados e especializados.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Mais de uma década oferecendo soluções de consultoria de excelência em Moçambique.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Áreas de Especialização</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cobertura completa em consultoria para desenvolvimento sustentável.
            </p>
          </div>
        </motion.div> */}

        {/* CTA */}
        {/* <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link href="contacte-nos">
            <motion.button
              className="bg-gradient-to-r from-brand-main to-brand-blue text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Consultoria Especializada
            </motion.button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}