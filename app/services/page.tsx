"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe,
  Shield,
  Users,
  Target,
  BarChart3,
  Factory,
  Recycle,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  TrendingUp,
  Leaf
} from 'lucide-react';
import ServicesCTA from '../../components/Landing/ServicesSurvey/ServicesCTA';
import ServicesHeader from '../../components/Landing/ServicesSurvey/ServicesHeader';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  benefits: string[];
  methodology: string[];
  color: string;
  duration: string;
  clients: string[];
  image: string;
  stats: { number: string; label: string }[];
}

const ServicesPage = () => {
  const services: Service[] = [
  {
    id: "environmental",
    icon: Globe,
    title: "Consultoria Ambiental",
    description: "Soluções completas para desenvolvimento sustentável e conformidade ambiental.",
    fullDescription: "Nossa consultoria ambiental oferece uma abordagem integrada para o desenvolvimento sustentável, combinando expertise técnica com inovação em práticas ambientais. Desenvolvemos estratégias personalizadas que não apenas atendem aos requisitos regulatórios, mas também criam valor sustentável para sua organização.",
    features: [
      "Avaliações de Impacto Ambiental detalhadas",
      "Gestão de recursos hídricos e biodiversidade",
      "Planejamento de adaptação às mudanças climáticas",
      "Análise avançada de pegada de carbono"
    ],
    deliverables: [
      "Relatórios EIA/Estudos de Impacto Ambiental",
      "Planos estratégicos de sustentabilidade",
      "Documentação para licenciamento ambiental",
      "Sistemas de Gestão Ambiental (ISO 14001)"
    ],
    benefits: [
      "Redução de custos operacionais",
      "Melhoria da imagem corporativa",
      "Conformidade total com legislação",
      "Acesso a incentivos fiscais verdes"
    ],
    methodology: [
      "Diagnóstico ambiental inicial",
      "Análise de gaps e oportunidades",
      "Desenvolvimento de plano de ação",
      "Implementação faseada"
    ],
    
    color: "from-green-500 to-emerald-600",
    duration: "3-6 meses",
    clients: ["Indústrias", "Energia", "Imobiliário", "Agronegócio"],
    image: "/images/services/consultoria-ambiental.jpg",
    stats: [
      { number: "50+", label: "Projetos Concluídos" },
      { number: "98%", label: "Aprovação EIA" }
    ]
  },
  {
    id: "health-safety",
    icon: Shield,
    title: "Segurança e Saúde Ocupacional",
    description: "Sistemas integrados de gestão para proteger seu capital humano.",
    fullDescription: "Desenvolvemos sistemas completos de segurança e saúde ocupacional que vão além do compliance, criando culturas organizacionais de segurança proativas. Nossa abordagem combina tecnologia em gestão de riscos com metodologias comprovadas de prevenção.",
    features: [
      "Gestão integrada de riscos ocupacionais",
      "Programas de prevenção de acidentes",
      "Medicina do trabalho e saúde ocupacional",
      "Planos de emergência e contingência"
    ],
    deliverables: [
      "Sistema de Gestão de SST completo",
      "Matriz de riscos ocupacionais",
      "Programas de prevenção customizados",
      "Documentação para certificação"
    ],
    benefits: [
      "Redução de acidentes ocupacionais",
      "Aumento da produtividade",
      "Redução de custos com seguros",
      "Cumprimento da legislação"
    ],
    methodology: [
      "Diagnóstico inicial de segurança",
      "Mapeamento completo de riscos",
      "Desenvolvimento do sistema",
      "Implementação com treinamentos"
    ],
    color: "from-blue-500 to-cyan-600",
    duration: "2-4 meses",
    clients: ["Indústrias", "Construção Civil", "Hospitais", "Logística"],
    image: "/images/services/seguranca-trabalho.jpg",
    stats: [
      { number: "85%", label: "Redução de Acidentes" },
      { number: "60+", label: "Sistemas Implementados" }
    ]
  },
  {
    id: "social-responsibility",
    icon: Users,
    title: "Responsabilidade Social",
    description: "Estratégias para impacto social positivo e engajamento comunitário.",
    fullDescription: "Criamos programas de responsabilidade social que geram valor compartilhado entre sua organização e a comunidade. Desenvolvemos estratégias de investimento social privado e iniciativas de desenvolvimento comunitário.",
    features: [
      "Avaliações de impacto social (AIS)",
      "Estratégias de engajamento",
      "Programas de investimento social",
      "Desenvolvimento comunitário"
    ],
    deliverables: [
      "Relatórios de Avaliação de Impacto",
      "Planos de engajamento",
      "Programas de responsabilidade",
      "Relatórios de sustentabilidade"
    ],
    benefits: [
      "Licença social para operar",
      "Melhoria da reputação",
      "Melhores relações com comunidades",
      "Diferenciação competitiva"
    ],
    methodology: [
      "Mapeamento de stakeholders",
      "Diagnóstico social",
      "Desenvolvimento de estratégia",
      "Implementação de programas"
    ],
    color: "from-purple-500 to-indigo-600",
    duration: "4-8 meses",
    clients: ["Grandes Corporações", "ONGs", "Governos", "Financeiro"],
    image: "/images/services/responsabilidade-social.jpg",
    stats: [
      { number: "30+", label: "Comunidades Atendidas" },
      { number: "25M+", label: "Investimento Social" }
    ]
  },
  {
    id: "quality",
    icon: Target,
    title: "Gestão da Qualidade",
    description: "Excelência operacional através de sistemas de gestão da qualidade.",
    fullDescription: "Implementamos sistemas de gestão da qualidade que transformam processos organizacionais, elevando padrões e garantindo a satisfação do cliente. Nossa abordagem combina práticas internacionais com soluções customizadas.",
    features: [
      "Implementação ISO 9001:2015",
      "Gestão por processos",
      "Sistemas de medição",
      "Gestão de não-conformidades"
    ],
    deliverables: [
      "Sistema de Gestão completo",
      "Documentação para certificação",
      "Procedimentos de trabalho",
      "Indicadores de desempenho"
    ],
    benefits: [
      "Satisfação do cliente",
      "Redução de custos",
      "Otimização de processos",
      "Eficiência operacional"
    ],
    methodology: [
      "Diagnóstico do sistema",
      "Mapeamento de processos",
      "Desenvolvimento documental",
      "Implementação"
    ],
    color: "from-orange-500 to-red-600",
    duration: "3-5 meses",
    clients: ["Indústrias", "Serviços", "Tecnologia", "Varejo"],
    image: "/images/services/gestao-qualidade.jpg",
    stats: [
      { number: "95%", label: "Certificação ISO" },
      { number: "45+", label: "Clientes Certificados" }
    ]
  },
  {
    id: "sustainability-reporting",
    icon: BarChart3,
    title: "Relatórios de Sustentabilidade",
    description: "Transparência e comunicação estratégica do desempenho ESG.",
    fullDescription: "Especializamo-nos na elaboração de relatórios de sustentabilidade que comunicam de forma clara e estratégica o desempenho ESG. Utilizamos frameworks reconhecidos internacionalmente.",
    features: [
      "Relatórios GRI Standards",
      "Disclosure SASB",
      "Análise TCFD climática",
      "Benchmarking ESG"
    ],
    deliverables: [
      "Relatório de Sustentabilidade",
      "Matriz de materialidade",
      "Dashboard de indicadores",
      "Análise comparativa"
    ],
    benefits: [
      "Acesso a capital",
      "Transparência no mercado",
      "Identificação de oportunidades",
      "Atração de talentos"
    ],
    methodology: [
      "Análise de materialidade",
      "Coleta de dados",
      "Benchmarking",
      "Desenvolvimento"
    ],
    color: "from-teal-500 to-green-600",
    duration: "2-4 meses",
    clients: ["Empresas Listadas", "Financeiras", "Corporações"],
    image: "/images/services/relatorios-sustentabilidade.jpg",
    stats: [
      { number: "80+", label: "Relatórios GRI" },
      { number: "100%", label: "Conformidade" }
    ]
  },
  {
    id: "industrial-compliance",
    icon: Factory,
    title: "Conformidade Industrial",
    description: "Gestão integrada de conformidade regulatória e padrões industriales.",
    fullDescription: "Garantimos que suas operações industriais estejam em total conformidade com todas as regulamentações aplicáveis, desde licenças ambientais até normas de segurança industrial.",
    features: [
      "Gestão de licenças e permisos",
      "Conformidade com normas",
      "Gestão de requisitos legais",
      "Auditorias de conformidade"
    ],
    deliverables: [
      "Sistema de Gestão",
      "Matriz de requisitos",
      "Relatórios de auditoria",
      "Planos de ação"
    ],
    benefits: [
      "Prevenção de multas",
      "Continuidade operacional",
      "Redução de riscos",
      "Otimização de licenciamento"
    ],
    methodology: [
      "Mapeamento de requisitos",
      "Análise de gaps",
      "Desenvolvimento do sistema",
      "Implementação"
    ],
    color: "from-gray-600 to-gray-800",
    duration: "3-6 meses",
    clients: ["Indústrias Pesadas", "Química", "Mineração", "Energia"],
    image: "/images/services/conformidade-industrial.jpg",
    stats: [
      { number: "99%", label: "Conformidade" },
      { number: "70+", label: "Licenças Geridas" }
    ]
  },
  {
    id: "circular-economy",
    icon: Recycle,
    title: "Economia Circular",
    description: "Transição para modelos de negócio circulares e sustentáveis.",
    fullDescription: "Guiamos organizações na transição da economia linear para modelos circulares que maximizam o valor dos recursos, minimizam resíduos e criam novas fontes de receita.",
    features: [
      "Análise de fluxo de materiais",
      "Design para circularidade",
      "Gestão de resíduos",
      "Cadeias reversas"
    ],
    deliverables: [
      "Estratégia de transição",
      "Mapas de fluxo",
      "Planos de gestão",
      "Modelos de negócio"
    ],
    benefits: [
      "Redução de custos",
      "Novas fontes de receita",
      "Redução de impactos",
      "Diferenciação competitiva"
    ],
    methodology: [
      "Diagnóstico de circularidade",
      "Mapeamento de fluxos",
      "Identificação de oportunidades",
      "Desenvolvimento"
    ],
    color: "from-lime-500 to-green-500",
    duration: "6-12 meses",
    clients: ["Manufactura", "Varejo", "Tecnologia", "Consumo"],
    image: "/images/services/economia-circular.jpg",
    stats: [
      { number: "40%", label: "Redução Resíduos" },
      { number: "25+", label: "Projetos Circulares" }
    ]
  }
];

  const ServiceSection = ({ service, index }: { service: Service; index: number }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    const isEven = index % 2 === 0;

    return (
      <section id={service.id} className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-main/20 dark:bg-brand-main/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Content Side */}
            <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
              {/* Header */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* <motion.div
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-brand-main rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-brand-main dark:text-white">
                    {service.duration} • {service.clients[0]}
                  </span>
                </motion.div> */}

                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {service.title}{' '}
                  <span className="bg-brand-main  bg-clip-text text-transparent">
                    Especializado
                  </span>
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {service.fullDescription}
                </motion.p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Características Principais
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-brand-main rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                    Benefícios
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {service.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center p-4 bg-white/50 dark:bg-black rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-brand-blue bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className="group px-8 py-4 bg-brand-main text-white rounded-xl hover:bg-brand-main/90 transition-all duration-300 font-semibold flex items-center gap-2 mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Image Side */}
            <motion.div
              className={`relative ${!isEven ? 'lg:col-start-1' : ''}`}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Main Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/5] relative">
                  {/* Imagem real de fundo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />

                  {/* Overlay gradiente para melhor legibilidade */}
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <motion.div
                      className="text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h3 className="text-2xl font-bold mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ gap: 4 }}
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <service.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {service.duration}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-brand-main/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Badge */}
              <motion.div
                className="absolute top-6 left-6 bg-white dark:bg-black rounded-2xl p-4 shadow-2xl border border-gray-100 dark:border-gray-700"
                initial={{ scale: 0, rotate: -10 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-center">
                  <div className="text-xs text-gray-600 dark:text-white font-medium leading-tight">
                    Especialistas<br />Certificados
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ServicesHeader />

      {/* Services Sections */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Global CTA */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesCTA />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;