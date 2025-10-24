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
  Wifi
} from 'lucide-react';

export default function ServicosIndustrias() {
  const industrias = [
    {
      categoria: "Energia & Recursos",
      itens: [
        { nome: "Energia Renovável", icon: Zap },
        { nome: "Petróleo & Gás", icon: Factory },
        { nome: "Mineração", icon: Mountain },
        { nome: "Hidrologia", icon: Waves }
      ],
      color: "from-brand-main to-brand-main"
    },
    {
      categoria: "Infraestruturas & Desenvolvimento",
      itens: [
        { nome: "Construção Civil", icon: Building2 },
        { nome: "Portos & Logística", icon: Ship },
        { nome: "Transportes", icon: Truck },
        { nome: "Urbanismo", icon: LandPlot }
      ],
      color: "from-brand-main to-brand-main"
    },
    {
      categoria: "Sectores Diversificados",
      itens: [
        { nome: "Agricultura", icon: Sprout },
        { nome: "Turismo", icon: Globe },
        { nome: "Educação", icon: GraduationCap },
        { nome: "Telecomunicações", icon: Wifi }
      ],
      color: "from-brand-main to-brand-main"
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-main/20 dark:bg-brand-main/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-brand-main rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-brand-main dark:text-brand-main/80">
                  Especialistas Multissetoriais
                </span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Oferecemos Estudos e Consultoria Especializada para{' '}
                <span className="bg-brand-blue bg-clip-text text-transparent">
                  Diversas Indústrias
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A Mozshaq actua em múltiplos sectores, fornecendo soluções integradas 
                em sustentabilidade, segurança e gestão para o desenvolvimento sustentável de Moçambique.
              </motion.p>
            </motion.div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industrias.map((grupo, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Icon Header */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${grupo.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {grupo.categoria === "Energia & Recursos" && <Zap className="w-6 h-6 text-white" />}
                      {grupo.categoria === "Infraestruturas & Desenvolvimento" && <Building2 className="w-6 h-6 text-white" />}
                      {grupo.categoria === "Sectores Diversificados" && <Globe className="w-6 h-6 text-white" />}
                    </motion.div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-base leading-tight">
                    {grupo.categoria}
                  </h3>
                  
                  <ul className="space-y-2">
                    {grupo.itens.map((item, itemIndex) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-200"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                            {item.nome}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "12+", label: "Anos de Experiência", icon: Zap },
                { number: "60+", label: "Projectos Concluídos", icon: Building2 },
                { number: "15+", label: "Sectores de Actuação", icon: Globe }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 bg-brand-main rounded-lg flex items-center justify-center">
                      {stat.icon === Zap && <Zap className="w-4 h-4 text-white" />}
                      {stat.icon === Building2 && <Building2 className="w-4 h-4 text-white" />}
                      {stat.icon === Globe && <Globe className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-main to-brand-blue bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main Image Container */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-600 to-blue-800 relative">
                {/* Imagem de background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/servicos-bg.jpg')" }}
                />

                {/* Overlay gradiente */}
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
                      Especialistas em Desenvolvimento Sustentável
                    </h3>
                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                      Soluções técnicas locais com padrões internacionais para um futuro mais verde e seguro.
                    </p>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ gap: 4 }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <Zap className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Desde 2013
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
                repeatType: "reverse" as const
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse" as const,
                delay: 1
              }}
            />
            
            {/* Badge */}
            <motion.div 
              className="absolute top-6 left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-100 dark:border-gray-700"
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-brand-main to-orange-500 bg-clip-text text-transparent mb-1">
                  60%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                  Equipa Jovem<br />e Dinâmica
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}