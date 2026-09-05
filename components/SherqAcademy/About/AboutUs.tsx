// components/About/AboutSection.tsx
"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
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
  Settings,
  X,
  ChevronRight,
  ChevronLeft,
  Search,
  Grid3x3,
  List,
  BookMarked,
  Calendar,
  Clock as ClockIcon,
  CheckCircle2
} from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function AboutSection() {
  const { t } = useTranslation('aboutsherq');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const coursesPerPage = 8;

  const stats = [
    { number: "10+", label: t('stats.years'), icon: Clock },
    { number: "500+", label: t('stats.trained'), icon: Users },
    { number: "50+", label: t('stats.courses'), icon: Award },
    { number: "15+", label: t('stats.sectors'), icon: Globe }
  ];

  const valores = [
    {
      icon: Shield,
      title: t('values.quality.title'),
      description: t('values.quality.description')
    },
    {
      icon: Leaf,
      title: t('values.sustainability.title'),
      description: t('values.sustainability.description')
    },
    {
      icon: Heart,
      title: t('values.social.title'),
      description: t('values.social.description')
    },
    {
      icon: Users,
      title: t('values.client.title'),
      description: t('values.client.description')
    }
  ];

  // Categorias de formação baseadas no PDF
  const categories = [
    {
      id: 'sso',
      icon: Shield,
      title: t('categories.sso.title'),
      description: t('categories.sso.description'),
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      courses: t('categories.sso.courses', { returnObjects: true }) as string[]
    },
    {
      id: 'sg',
      icon: Settings,
      title: t('categories.sg.title'),
      description: t('categories.sg.description'),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      courses: t('categories.sg.courses', { returnObjects: true }) as string[]
    },
    {
      id: 'oe',
      icon: GraduationCap,
      title: t('categories.oe.title'),
      description: t('categories.oe.description'),
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      courses: t('categories.oe.courses', { returnObjects: true }) as string[]
    },
    // {
    //   id: 'gr',
    //   icon: Target,
    //   title: t('categories.gr.title'),
    //   description: t('categories.gr.description'),
    //   color: 'from-orange-500 to-amber-600',
    //   bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    //   borderColor: 'border-orange-200 dark:border-orange-800',
    //   courses: t('categories.gr.courses', { returnObjects: true }) as string[]
    // },
    // {
    //   id: 'gs',
    //   icon: BookOpen,
    //   title: t('categories.gs.title'),
    //   description: t('categories.gs.description'),
    //   color: 'from-pink-500 to-rose-600',
    //   bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    //   borderColor: 'border-pink-200 dark:border-pink-800',
    //   courses: t('categories.gs.courses', { returnObjects: true }) as string[]
    // }
  ];

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setSearchTerm('');
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    document.body.style.overflow = 'auto';
  };

  // Filtrar cursos
  const filteredCourses = selectedCategory 
    ? selectedCategory.courses.filter((course: string) => 
        course.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Paginação
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = currentPage * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.icon || BookOpen;
  };

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.color || 'from-blue-500 to-blue-700';
  };

  return (
    <>
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
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('title')} <span className="text-brand-main dark:text-green-400">{t('titleHighlight')}</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: t('description') }}
            />
          </motion.div>

          {/* Rest of the section remains the same... */}
          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 gap-12 items-start mb-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* ... existing content ... */}
          </motion.div>

          {/* Areas de Formação - Cards Clicáveis */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {t('areas.title')} <span className="text-brand-main">{t('areas.titleHighlight')}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('areas.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div
                    key={index}
                    className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${category.borderColor} text-center cursor-pointer hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all`}>
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      {category.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-brand-main font-semibold">
                      <BookMarked className="w-4 h-4" />
                      <span>{category.courses.length} {t('areas.courses')}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-1 text-brand-main/60 group-hover:text-brand-main transition-colors">
                      <span className="text-sm font-medium">{t('areas.viewCourses')}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
              {t('certification.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('certification.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal de Cursos - Versão Melhorada */}
      <AnimatePresence>
        {isModalOpen && selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Design Corporativo */}
              <div className={`bg-gradient-to-r ${selectedCategory.color} px-8 py-6 relative`}>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-colors text-white/80 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <selectedCategory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedCategory.title}
                    </h2>
                    <p className="text-white/80 text-sm">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Barra de Pesquisa e Filtros */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t('modal.search')}
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(0);
                      }}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-main/50 focus:border-brand-main outline-none transition-all text-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700/50 rounded-xl p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all ${
                          viewMode === 'grid'
                            ? 'bg-white dark:bg-gray-600 shadow-sm text-brand-main'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                      >
                        <Grid3x3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all ${
                          viewMode === 'list'
                            ? 'bg-white dark:bg-gray-600 shadow-sm text-brand-main'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {filteredCourses.length} {t('modal.coursesFound')}
                    </span>
                  </div>
                </div>

                {/* Lista de Cursos */}
                <div className="overflow-y-auto max-h-[50vh] pr-1">
                  {currentCourses.length > 0 ? (
                    <div className={viewMode === 'grid' 
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-3'
                      : 'space-y-2'
                    }>
                      {currentCourses.map((course: string, index: number) => {
                        const codeMatch = course.match(/^([A-Z]+\d+)/);
                        const code = codeMatch ? codeMatch[1] : '';
                        const name = course.replace(/^[A-Z]+\d+\s*-\s*/, '');
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className={`group ${
                              viewMode === 'grid'
                                ? 'p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-brand-main/30 hover:shadow-md transition-all'
                                : 'p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-brand-main/30 hover:shadow-sm transition-all flex items-center gap-3'
                            }`}
                          >
                            {viewMode === 'grid' ? (
                              <>
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    {code && (
                                      <span className="inline-block px-2 py-0.5 bg-brand-main/10 text-brand-main text-xs font-semibold rounded-md mb-1.5">
                                        {code}
                                      </span>
                                    )}
                                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                                      {name || course}
                                    </p>
                                  </div>
                                  <CheckCircle2 className="w-4 h-4 text-brand-main/30 group-hover:text-brand-main transition-colors flex-shrink-0 ml-2" />
                                </div>
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-brand-main flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-200">
                                  {code && (
                                    <span className="font-semibold text-brand-main mr-1.5">{code}</span>
                                  )}
                                  {name || course}
                                </span>
                              </>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t('modal.noResults')}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('modal.noResultsDescription')}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer - Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/20">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        currentPage === 0
                          ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">{t('pagination.prev')}</span>
                    </button>
                    
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i;
                        } else if (currentPage < 3) {
                          pageNum = i;
                        } else if (currentPage > totalPages - 3) {
                          pageNum = totalPages - 5 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        if (pageNum < 0 || pageNum >= totalPages) return null;
                        
                        return (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-9 h-9 rounded-xl font-medium text-sm transition-all ${
                              currentPage === pageNum
                                ? 'bg-brand-main text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                            }`}
                          >
                            {pageNum + 1}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages - 1}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        currentPage === totalPages - 1
                          ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="hidden sm:inline">{t('pagination.next')}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {startIndex + 1} - {Math.min(endIndex, filteredCourses.length)} {t('modal.of')} {filteredCourses.length}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}