// app/projects/components/ProjectCard.tsx
"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Calendar, 
  Building, 
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon,
  Image,
  ArrowRight
} from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusInfo = (status: string) => {
    const statusMap: Record<string, { label: string; icon: any; className: string }> = {
      'done': { label: 'Concluído', icon: CheckCircle, className: 'bg-green-500' },
      'inProgress': { label: 'Em Andamento', icon: ClockIcon, className: 'bg-blue-500' },
      'process': { label: 'Em Processo', icon: AlertCircle, className: 'bg-amber-500' }
    };
    return statusMap[status] || statusMap['process'];
  };

  const status = getStatusInfo(project.status);
  const StatusIcon = status.icon;

  // Formatar datas
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-MZ', { month: '2-digit', year: 'numeric' });
  };

  const startDate = project.startDate ? formatDate(project.startDate) : '';
  const endDate = project.endDate ? formatDate(project.endDate) : '';
  const period = startDate && endDate ? `${startDate} - ${endDate}` : '';

  return (
    <Link href={`/projectos/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
      >
        {/* Imagem de capa */}
        <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-500/20 to-brand-300/10">
              <Building className="w-16 h-16 text-brand-300/50" />
            </div>
          )}
          
          {/* Badge de status sobre a imagem */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white">
            <StatusIcon className="w-4 h-4" />
            <span className="text-sm font-medium">{status.label}</span>
          </div>

          {/* Indicador de fotos */}
          {project.hasPhotos && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs">
              <Image className="w-3 h-3" />
              <span>{project.photos?.length || 0} fotos</span>
            </div>
          )}

          {/* Gradiente no fundo da imagem */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Overlay de "Ver detalhes" no hover */}
          <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-full px-6 py-3 flex items-center gap-2 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
              <span className="font-medium text-gray-900 dark:text-white">Ver Detalhes</span>
              <ArrowRight className="w-4 h-4 text-brand-500" />
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {project.name}
          </h3>
          
          <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{project.client}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
            {period && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs">{period}</span>
              </div>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap gap-1.5">
              {project.servicesProvided?.slice(0, 3).map((service, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded-full text-xs font-medium">
                  {service.name.length > 20 ? service.name.slice(0, 20) + '...' : service.name}
                </span>
              ))}
              {project.servicesProvided && project.servicesProvided.length > 3 && (
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                  +{project.servicesProvided.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Indicador visual de que é clicável */}
          <div className="mt-3 flex items-center justify-end text-xs text-gray-400 dark:text-gray-500 group-hover:text-brand-500 transition-colors">
            <span className="flex items-center gap-1">
              Clique para detalhes
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}