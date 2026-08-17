// app/projects/[id]/page.tsx
"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  CheckCircle,
  Clock,
  Users,
  Image as ImageIcon,
  Target,
  Award,
  Link2,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Briefcase,
  FileText,
  Home
} from 'lucide-react';
import { projectActions } from '../../../components/actions/project-actions';
import { Project } from '../../../types/project';

// Componente de Galeria de Imagens
function ImageGallery({ images, projectName }: { images: string[]; projectName: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
    } else {
      setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-12 text-center">
        <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-500 dark:text-gray-400">Nenhuma foto disponível</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid de Imagens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-100 dark:bg-gray-700"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${projectName} - Foto ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                  <ImageIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Contador */}
            <div className="absolute top-4 left-4 text-white/70 text-sm bg-black/50 px-3 py-1.5 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Imagem */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`${projectName} - Foto ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navegação */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-8 bg-white'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Componente de Status
function StatusBadge({ status }: { status: string }) {
  const statusMap = {
    'concluido': { label: 'Concluído', icon: CheckCircle, className: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-green-200 dark:border-green-800' },
    'em_andamento': { label: 'Em Andamento', icon: Clock, className: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
    'planejado': { label: 'Planejado', icon: Target, className: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200 dark:border-amber-800' }
  };
  
  const info = statusMap[status as keyof typeof statusMap] || statusMap['planejado'];
  const Icon = info.icon;

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${info.className} font-medium`}>
      <Icon className="w-4 h-4" />
      {info.label}
    </span>
  );
}

// Componente de Informação
function InfoItem({ icon: Icon, label, value, className = '' }: { icon: any; label: string; value: string | React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-brand-500" />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-900 dark:text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

// Componente de Lista
function ListSection({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) {
  if (!items || items.length === 0) return null;
  
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-brand-500" />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
          >
            <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      setIsLoading(true);

      const id = Array.isArray(params.id) ? params.id[0] : params.id;

      if (!id) {
        setProject(null);
        setRelatedProjects([]);
        setIsLoading(false);
        return;
      }

      const found = projectActions.getProjectById(id);

      if (found) {
        setProject(found);
        const related = projectActions.getRelatedProjects(found, 4);
        setRelatedProjects(related);
      } else {
        setProject(null);
        setRelatedProjects([]);
      }

      setIsLoading(false);
    };

    loadProject();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-20 h-20 text-gray-400 mx-auto mb-4">
            <FileText className="w-20 h-20" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">Projeto não encontrado</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">O projeto que você está procurando não existe ou foi removido.</p>
          <Link href="/projects">
            <button className="px-6 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors">
              Voltar para Projetos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjectsList = projectActions.getRelatedProjects(project, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero com imagem de capa */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-800">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center">
            <Building className="w-24 h-24 text-white/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Botão Voltar */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Conteúdo do Hero */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <StatusBadge status={project.status} />
                <span className="text-white/70 text-sm bg-black/30 px-3 py-1 rounded-full">
                  {project.sector}
                </span>
                {project.hasPhotos && (
                  <span className="text-white/70 text-sm bg-black/30 px-3 py-1 rounded-full flex items-center gap-1">
                    <ImageIcon className="w-4 h-4" />
                    {project.photos?.length || 0} fotos
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{project.name}</h1>
              <p className="text-lg text-white/80 max-w-3xl">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Informações Gerais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informações do Projeto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoItem icon={Building} label="Cliente" value={project.client} />
                <InfoItem icon={MapPin} label="Localização" value={project.location} />
                <InfoItem 
                  icon={Calendar} 
                  label="Período de Execução" 
                  value={`${project.executionPeriod.start} - ${project.executionPeriod.end}`} 
                />
                <InfoItem icon={Target} label="Setor/Área" value={project.sector} />
              </div>
            </motion.div>

            {/* Objetivo e Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Objetivo do Projeto</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.objective}
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Breve Descrição</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Atividades e Resultados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                <ListSection 
                  title="Principais Atividades" 
                  items={project.mainActivities} 
                  icon={FileText}
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
                <ListSection 
                  title="Resultados Alcançados" 
                  items={project.results} 
                  icon={Award}
                />
              </div>
            </motion.div>

            {/* Serviços Prestados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-brand-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Serviços Prestados</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.servicesProvided.map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded-xl text-sm font-medium border border-brand-100 dark:border-brand-800">
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Parceiros */}
            {project.partners && project.partners.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-brand-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Parceiros Envolvidos</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.partners.map((partner, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-800 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {partner}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Observações */}
            {project.observations && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl shadow-lg p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-2">Observações Adicionais</h3>
                <p className="text-amber-700 dark:text-amber-400">{project.observations}</p>
              </motion.div>
            )}

            {/* Galeria de Fotos */}
            {project.photos && project.photos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-brand-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Galeria de Fotos</h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.photos.length} fotos
                  </span>
                </div>
                <ImageGallery images={project.photos} projectName={project.name} />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cards de Informações Rápidas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resumo Rápido</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Status</span>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Cliente</span>
                  <span className="text-gray-900 dark:text-white font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Localização</span>
                  <span className="text-gray-900 dark:text-white">{project.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Setor</span>
                  <span className="text-gray-900 dark:text-white">{project.sector}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500 dark:text-gray-400">Fotos</span>
                  <span className="text-gray-900 dark:text-white flex items-center gap-1">
                    {project.hasPhotos ? (
                      <span className="text-green-500">✓ {project.photos?.length || 0} disponíveis</span>
                    ) : (
                      <span className="text-gray-400">Nenhuma</span>
                    )}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Download/Ações */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Ações</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors font-medium">
                  <Download className="w-4 h-4" />
                  Baixar Relatório
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </button>
                <Link href="/contacte-nos">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors font-medium border border-green-200 dark:border-green-800">
                    <Home className="w-4 h-4" />
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Projetos Relacionados */}
            {relatedProjectsList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Projetos Relacionados
                </h3>
                <div className="space-y-4">
                  {relatedProjectsList.map((related) => (
                    <Link href={`/projects/${related.id}`} key={related.id}>
                      <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                          {related.coverImage ? (
                            <img
                              src={related.coverImage}
                              alt={related.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Building className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                            {related.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {related.client}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500">{related.location}</span>
                            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{related.sector}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-2" />
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/projects">
                  <button className="w-full mt-4 text-center text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium">
                    Ver todos os projetos →
                  </button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}