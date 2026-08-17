// app/projects/components/ProjectStats.tsx
"use client"

import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  CheckCircle, 
  Clock as ClockIcon,
  AlertCircle,
  BarChart3,
  Building,
  Calendar
} from 'lucide-react';
import type { ProjectStats } from '../../types/project';

interface ProjectStatsProps {
  stats: ProjectStats;
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  const statusLabels = {
    'concluido': { label: 'Concluídos', icon: CheckCircle, className: 'text-green-600 dark:text-green-400' },
    'em_andamento': { label: 'Em Andamento', icon: ClockIcon, className: 'text-blue-600 dark:text-blue-400' },
    'planejado': { label: 'Planejados', icon: AlertCircle, className: 'text-amber-600 dark:text-amber-400' }
  };

  const statusColors = {
    'concluido': 'bg-green-500',
    'em_andamento': 'bg-blue-500',
    'planejado': 'bg-amber-500'
  };

  // Preparar dados para o gráfico de setores
  const sectorData = Object.entries(stats.bySector)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxSectorCount = Math.max(...Object.values(stats.bySector), 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* Total e Status */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total de Projetos</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {stats.total}
            </h3>
          </div>
          <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center">
            <FolderOpen className="w-6 h-6 text-brand-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          {Object.entries(statusLabels).map(([status, { label, icon: Icon, className }]) => (
            <div key={status} className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Icon className={`w-4 h-4 ${className}`} />
                <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
              </div>
              <span className="block text-lg font-bold text-gray-900 dark:text-white">
                {stats.byStatus[status] || 0}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Setores */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Building className="w-5 h-5 text-brand-500" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Projetos por Setor</h4>
        </div>
        <div className="space-y-3">
          {sectorData.length > 0 ? (
            sectorData.map(([sector, count]) => (
              <div key={sector}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400 truncate">{sector}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{count}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-brand-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${(count / maxSectorCount) * 100}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-2">
              Nenhum setor registrado
            </p>
          )}
        </div>
      </div>

      {/* Anos */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-brand-500" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Projetos por Ano</h4>
        </div>
        <div className="space-y-3">
          {Object.entries(stats.byYear)
            .sort((a, b) => b[0].localeCompare(a[0]))
            .map(([year, count]) => {
              const maxYearCount = Math.max(...Object.values(stats.byYear), 1);
              return (
                <div key={year}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">{year}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-400 rounded-full h-2 transition-all duration-500"
                      style={{ width: `${(count / maxYearCount) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
}