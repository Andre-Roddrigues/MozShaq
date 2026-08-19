// app/projects/components/ProjectFilters.tsx
"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Grid3x3, 
  List,
  ChevronDown,
  Calendar,
  Loader2
} from 'lucide-react';
import { projectActions } from '../actions/project-actions';
import type { ProjectFilters } from '../../types/project';

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
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);

  // Carregar dados para os filtros
  useEffect(() => {
    const loadFilterData = async () => {
      setIsLoading(true);
      try {
        const [clientsData, sectorsData, locationsData, yearsData] = await Promise.all([
          projectActions.getUniqueClients(),
          projectActions.getUniqueSectors(),
          projectActions.getUniqueLocations(),
          projectActions.getUniqueYears()
        ]);
        
        setClients(clientsData || []);
        setSectors(sectorsData || []);
        setLocations(locationsData || []);
        setYears(yearsData || []);
      } catch (error) {
        console.error('Erro ao carregar dados dos filtros:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilterData();
  }, []);

  const statusOptions = [
    { value: 'done', label: 'Concluído' },
    { value: 'inProgress', label: 'Em Andamento' },
    { value: 'process', label: 'Em Processo' }
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
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-brand-500" />
                  <span className="ml-2 text-gray-500 dark:text-gray-400">Carregando filtros...</span>
                </div>
              ) : (
                <>
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

                    {/* Categoria */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Categoria
                      </label>
                      <select
                        value={filters.category || ''}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                      >
                        <option value="">Todas as categorias</option>
                        {/* Aqui você pode adicionar as categorias da API */}
                      </select>
                    </div>

                    {/* Data de início */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Data Início
                      </label>
                      <input
                        type="date"
                        value={filters.startDate || ''}
                        onChange={(e) => handleFilterChange('startDate', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white text-sm"
                      />
                    </div>

                    {/* Data de fim */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Data Fim
                      </label>
                      <input
                        type="date"
                        value={filters.endDate || ''}
                        onChange={(e) => handleFilterChange('endDate', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white text-sm"
                      />
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
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}