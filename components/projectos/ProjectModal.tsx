// app/projects/components/ProjectModal.tsx
"use client"

import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Calendar,
  Building,
  CheckCircle,
  Clock,
  Users,
  Image,
  FileText,
  Target,
  Award,
  Link2
} from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Mapeamento de status para a API
  const getStatusInfo = (status: string) => {
    const statusMap: Record<string, { label: string; icon: any; className: string }> = {
      'done': { 
        label: 'Concluído', 
        icon: CheckCircle, 
        className: 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400' 
      },
      'inProgress': { 
        label: 'Em Andamento', 
        icon: Clock, 
        className: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' 
      },
      'process': { 
        label: 'Em Processo', 
        icon: Target, 
        className: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-400' 
      }
    };
    return statusMap[status] || statusMap['process'];
  };

  const status = getStatusInfo(project.status);
  const StatusIcon = status.icon;

  // Extrair nomes dos serviços
  const serviceNames = project.servicesProvided?.map((s: any) => s.name) || [];
  
  // Extrair nomes dos parceiros
  const partnerNames = project.partners?.map((p: any) => p.name) || [];
  
  // Extrair nomes das atividades principais
  const activityNames = project.results?.map((r: any) => r.name) || [];

  // Formatar datas
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-MZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const startDate = project.startDate ? formatDate(project.startDate) : '';
  const endDate = project.endDate ? formatDate(project.endDate) : '';
  const period = startDate && endDate ? `${startDate} - ${endDate}` : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-x-4 top-4 bottom-4 md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                  {project.name}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 flex-shrink-0 ${status.className}`}>
                  <StatusIcon className="w-3 h-3" />
                  {status.label}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coluna Esquerda - Informações Gerais */}
                <div className="space-y-6">
                  {/* Cliente */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Cliente
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-900 dark:text-white font-medium">{project.client}</span>
                    </div>
                  </div>

                  {/* Localização */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Localização
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">{project.location}</span>
                    </div>
                  </div>

                  {/* Período de Execução */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Período de Execução
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {period || 'Não definido'}
                      </span>
                    </div>
                  </div>

                  {/* Setor */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Setor/Área
                    </label>
                    <div className="mt-1">
                      <span className="inline-flex px-3 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium">
                        {project.sector}
                      </span>
                    </div>
                  </div>

                  {/* Serviços Prestados */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Serviços Prestados
                    </label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {serviceNames.length > 0 ? (
                        serviceNames.map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {service}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-gray-400 dark:text-gray-500">
                          Nenhum serviço registrado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Fotos Disponíveis */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Fotografias Disponíveis
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <Image className={`w-5 h-5 ${project.hasPhotos ? 'text-brand-500' : 'text-gray-400'}`} />
                      <span className={project.hasPhotos ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}>
                        {project.hasPhotos ? `Sim (${project.photos?.length || 0} fotos)` : 'Não'}
                      </span>
                    </div>
                  </div>

                  {/* Parceiros */}
                  {partnerNames.length > 0 && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Parceiros Envolvidos
                      </label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {partnerNames.map((partner, idx) => (
                          <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                            <Users className="w-3 h-3" />
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Coluna Direita - Detalhes */}
                <div className="space-y-6">
                  {/* Objetivo */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Objetivo do Projeto
                    </label>
                    <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Breve Descrição
                    </label>
                    <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Principais Atividades */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Principais Atividades Realizadas
                    </label>
                    <ul className="mt-2 space-y-1.5">
                      {activityNames.length > 0 ? (
                        activityNames.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-brand-500 mt-1 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-400 dark:text-gray-500">
                          Nenhuma atividade registrada
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Resultados Alcançados */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Resultados Alcançados
                    </label>
                    <ul className="mt-2 space-y-1.5">
                      {project.results && project.results.length > 0 ? (
                        project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <Award className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <span>{result.name}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-400 dark:text-gray-500">
                          Nenhum resultado registrado
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Observações */}
                  {project.observation && (
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Observações Adicionais
                      </label>
                      <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.observation}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>
                  Criado em: {formatDate(project.createdAt)}
                </span>
                <span>
                  Última atualização: {formatDate(project.updatedAt)}
                </span>
              </div>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}