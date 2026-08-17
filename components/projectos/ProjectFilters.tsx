// app/projects/components/ProjectFilters.tsx
"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Grid3x3, 
  List,
  ChevronDown,
  Calendar
} from 'lucide-react';
import type { ProjectFilters } from '../../types/project';
import { projectActions } from '../actions/project-actions';

interface ProjectFiltersProps {
  filters: ProjectFilters;
  onFilterChange: (filters: ProjectFilters) => void;
  onClearFilters: () => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalProjects: number;
}

export function ProjectFilters({
  filters,
  onFilterChange,
  onClearFilters,
  viewMode,
  onViewModeChange,
  totalProjects
}: ProjectFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Buscar dados para os filtros
  const clients = projectActions.getUniqueClients();
  const sectors = projectActions.getUniqueSectors();
  const locations = projectActions.getUniqueLocations();
  const years = projectActions.getUniqueYears();

  const statusOptions = [
    { value: 'concluido', label: 'Concluído' },
    { value: 'em_andamento', label: 'Em Andamento' },
    { value: 'planejado', label: 'Planejado' }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ search: e.target.value || undefined });
  };

  const handleFilterChange = (key: keyof ProjectFilters, value: string) => {
    onFilterChange({ [key]: value || undefined });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== undefined && v !== '');

  return (
    <div className="space-y-4">
      {/* Barra de busca e controles */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por cliente, projeto, localização..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white transition-all"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ search: undefined })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors ${
              isExpanded || hasActiveFilters
                ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-300 dark:border-brand-700 text-brand-700 dark:text-brand-300'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filtros</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-600 shadow-md text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-600 shadow-md text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {totalProjects} projetos
          </span>
        </div>
      </div>

      {/* Filtros expandidos */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Cliente */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Cliente
                  </label>
                  <select
                    value={filters.client || ''}
                    onChange={(e) => handleFilterChange('client', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os clientes</option>
                    {clients.map((client) => (
                      <option key={client} value={client}>{client}</option>
                    ))}
                  </select>
                </div>

                {/* Setor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Setor
                  </label>
                  <select
                    value={filters.sector || ''}
                    onChange={(e) => handleFilterChange('sector', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os setores</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={filters.status || ''}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os status</option>
                    {statusOptions.map((status) => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                </div>

                {/* Ano */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ano
                  </label>
                  <select
                    value={filters.year || ''}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os anos</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Localização */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Localização
                  </label>
                  <select
                    value={filters.location || ''}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todas as localizações</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Fotos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Fotos disponíveis
                  </label>
                  <select
                    value={filters.hasPhotos !== undefined ? String(filters.hasPhotos) : ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      onFilterChange({ hasPhotos: value ? value === 'true' : undefined });
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos</option>
                    <option value="true">Com fotos</option>
                    <option value="false">Sem fotos</option>
                  </select>
                </div>

                {/* Período */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Período de execução
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="month"
                        value={filters.dateFrom || ''}
                        onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white text-sm"
                      />
                    </div>
                    <span className="text-gray-500 self-center">até</span>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="month"
                        value={filters.dateTo || ''}
                        onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações dos filtros */}
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={onClearFilters}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Limpar todos
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
                >
                  Aplicar filtros
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}