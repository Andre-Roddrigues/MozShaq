// components/Landing/Consulting/AreasConsultoria.tsx
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
  Cpu,
  BarChart3,
  Recycle,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';

export default function AreasConsultoria() {
  const { t } = useTranslation('consulting');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Mapeamento de ícones para cada área
  const iconMap: Record<string, any> = {
    'sistemas-gestao': Target,
    'ambiental': Leaf,
    'seguranca-saude': Shield,
    // 'formacao': GraduationCap,
    'projetos-engenharia': Building2,
    'energia-sustentavel': Zap,
    'topografia-geotecnia': Mountain,
    // 'conteudo-local': Users,
    'responsabilidade-social': HeartPulse,
    'gestao-qualidade': CheckCircle,
    'relatorios-sustentabilidade': BarChart3,
    'conformidade-industrial': Factory,
    'economia-circular': Recycle,
  };

  // Mapeamento de cores para cada área
  const colorMap: Record<string, string> = {
    'sistemas-gestao': 'from-brand-blue to-brand-blue',
    'ambiental': 'from-green-500 to-emerald-500',
    'seguranca-saude': 'from-brand-main to-brand-main',
    // 'formacao': 'from-brand-blue to-brand-blue',
    'projetos-engenharia': 'from-brand-main to-brand-main',
    'energia-sustentavel': 'from-brand-blue to-brand-blue',
    'topografia-geotecnia': 'from-brand-main to-brand-main',
    // 'conteudo-local': 'from-teal-500 to-green-500',
    'responsabilidade-social': 'from-pink-500 to-rose-500',
    'gestao-qualidade': 'from-blue-600 to-indigo-600',
    'relatorios-sustentabilidade': 'from-emerald-500 to-teal-500',
    'conformidade-industrial': 'from-orange-500 to-amber-500',
    'economia-circular': 'from-green-600 to-emerald-600',
  };

  // IDs das áreas (incluindo as novas)
  const areaIds = [
    'ambiental',
    'seguranca-saude',
    // 'conteudo-local',
    'sistemas-gestao',
    'energia-sustentavel',
    'topografia-geotecnia',
    'projetos-engenharia',
    // 'formacao',
    'responsabilidade-social',
    'gestao-qualidade',
    'relatorios-sustentabilidade',
    'conformidade-industrial',
    'economia-circular',
  ];

  // Construir array de áreas com traduções
  const areasConsultoria = areaIds.map((id) => ({
    id,
    nome: t(`areas.${id}.name`),
    descricao: t(`areas.${id}.description`),
    icon: iconMap[id],
    color: colorMap[id],
    subareas: t(`areas.${id}.subareas`, { returnObjects: true }) as string[]
  }));

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
            {t('title').split(' ').map((word, i, arr) => {
              if (i === arr.length - 1 || (i === arr.length - 2 && arr[i+1] === 'Consultoria')) {
                return (
                  <span key={i} className="bg-brand-blue bg-clip-text text-transparent">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={i}>{word} </span>;
            })}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid de Áreas de Consultoria - Agora com 4 colunas para acomodar 14 áreas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areasConsultoria.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                      {Array.isArray(area.subareas) && area.subareas.slice(0, 3).map((subarea, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {subarea}
                          </span>
                        </div>
                      ))}
                      {Array.isArray(area.subareas) && area.subareas.length > 3 && (
                        <div className="text-xs text-brand-main dark:text-brand-blue font-medium">
                          +{area.subareas.length - 3} {t('more')}
                        </div>
                      )}
                    </div>
                    
                    {/* Botão de Ação */}
                    <motion.div 
                      className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium text-brand-main dark:text-brand-blue">
                        {t('cta')}
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
      </div>
    </section>
  );
}