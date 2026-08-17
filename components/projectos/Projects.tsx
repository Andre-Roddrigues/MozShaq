// app/projects/page.tsx
"use client"

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  X,
  Grid3x3,
  List,
  FolderOpen,
  ChevronDown,
  Calendar,
  Building,
  MapPin,
  Image as ImageIcon
} from 'lucide-react';
import type { Project, ProjectFilters, ProjectStats } from '../../types/project';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { InfiniteScroll } from './InfiniteScroll';
import { projectActions } from '../actions/project-actions';

const ITEMS_PER_PAGE = 12;

export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState<ProjectStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Carregar dados iniciais
  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      const projects = projectActions.getProjects();
      const projectStats = projectActions.getProjectStats();
      
      setAllProjects(projects);
      setFilteredProjects(projects);
      setStats(projectStats);
      
      // Carregar primeira página
      const initialProjects = projects.slice(0, ITEMS_PER_PAGE);
      setDisplayedProjects(initialProjects);
      setHasMore(projects.length > ITEMS_PER_PAGE);
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    const filtered = projectActions.getProjects(filters);
    setFilteredProjects(filtered);
    setDisplayedProjects(filtered.slice(0, ITEMS_PER_PAGE));
    setPage(1);
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  }, [filters]);

  // Carregar mais projetos
  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    
    // Simular delay de carregamento
    setTimeout(() => {
      const nextPage = page + 1;
      const start = 0;
      const end = nextPage * ITEMS_PER_PAGE;
      const newProjects = filteredProjects.slice(0, end);
      
      setDisplayedProjects(newProjects);
      setPage(nextPage);
      setHasMore(newProjects.length < filteredProjects.length);
      setIsLoadingMore(false);
    }, 800);
  }, [page, isLoadingMore, hasMore, filteredProjects]);

  // Handlers
  const handleFilterChange = (newFilters: ProjectFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Get unique values for filters
  const clients = projectActions.getUniqueClients();
  const sectors = projectActions.getUniqueSectors();
  const locations = projectActions.getUniqueLocations();
  const years = projectActions.getUniqueYears();

  const statusOptions = [
    { value: 'concluido', label: 'Concluído' },
    { value: 'em_andamento', label: 'Em Andamento' },
    { value: 'planejado', label: 'Planejado' }
  ];

  const hasActiveFilters = Object.values(filters).some(v => v !== undefined && v !== '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando projetos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-blue to-brand-main-light dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nossos <span className="text-brand-bgdark">Projetos</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça os projetos realizados pela Mozshaq em consultoria ambiental e gestão sustentável em Moçambique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros e Busca - Sticky */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleFilterChange({ search: e.target.value || undefined });
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    handleFilterChange({ search: undefined });
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Filtros Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors ${
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

              {/* View Mode */}
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-gray-700 shadow-md text-brand-600 dark:text-brand-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-gray-700 shadow-md text-brand-600 dark:text-brand-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {filteredProjects.length} projetos
              </span>
            </div>
          </div>

          {/* Filtros Expandidos */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Cliente */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Cliente
                  </label>
                  <select
                    value={filters.client || ''}
                    onChange={(e) => handleFilterChange({ client: e.target.value || undefined })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
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
                    onChange={(e) => handleFilterChange({ sector: e.target.value || undefined })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
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
                    onChange={(e) => handleFilterChange({ status: e.target.value || undefined })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os status</option>
                    {statusOptions.map((status) => (
                      <option key={status.value} value={status.value}>{status.label}</option>
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
                    onChange={(e) => handleFilterChange({ location: e.target.value || undefined })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todas as localizações</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
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
                    onChange={(e) => handleFilterChange({ year: e.target.value || undefined })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos os anos</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
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
                      handleFilterChange({ hasPhotos: value ? value === 'true' : undefined });
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:text-white"
                  >
                    <option value="">Todos</option>
                    <option value="true">Com fotos</option>
                    <option value="false">Sem fotos</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={handleClearFilters}
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
            </motion.div>
          )}
        </div>
      </div>

      {/* Lista de Projetos com Scroll Infinito */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {displayedProjects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <FolderOpen className="w-20 h-20 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tente ajustar os filtros de busca para encontrar o que procura.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-6 px-6 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <InfiniteScroll
            onLoadMore={loadMore}
            hasMore={hasMore}
            isLoading={isLoadingMore}
            endMessage={
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                🎉 Todos os {filteredProjects.length} projetos foram carregados
              </p>
            }
          >
            <div className={`grid ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' 
                : 'grid-cols-1'
            } gap-6`}>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                >
                  <ProjectCard
                    project={project}
                  />
                </motion.div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}