// app/cursos/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { fetchCourses, fetchCoursesPaginated } from '../../actions/courseActions';
import { Course, CoursesQueryParams } from '../../../types/courseTypes';
import CardCurso from './CardCuso';

// Categorias únicas (serão extraídas dos dados reais)
const niveis = ['Todos', 'INICIANTE', 'INTERMEDIÁRIO', 'AVANÇADO'];
const tipos = ['Todos', 'PRESENCIAL', 'ONLINE', 'HIBRIDO'];

export default function CursosPage() {
  const [cursos, setCursos] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [nivelSelecionado, setNivelSelecionado] = useState('Todos');
  const [tipoSelecionado, setTipoSelecionado] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [totalCursos, setTotalCursos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [categorias, setCategorias] = useState<string[]>(['Todos']);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Buscar cursos da API
  useEffect(() => {
    loadCursos();
  }, [currentPage, nivelSelecionado, tipoSelecionado, categoriaSelecionada]);

  const loadCursos = async () => {
    try {
      setLoading(true);
      
      const params: CoursesQueryParams = {
        page: currentPage,
        limit: 12,
        status: 'PUBLICADO',
      };
      
      if (nivelSelecionado !== 'Todos') {
        params.level = nivelSelecionado;
      }
      
      if (tipoSelecionado !== 'Todos') {
        params.type = tipoSelecionado;
      }
      
      if (categoriaSelecionada !== 'Todos') {
        // Buscar por categoria - precisamos do categoryId
        // Por enquanto, vamos filtrar no frontend
      }
      
      const response = await fetchCourses(params);
      setCursos(response.data);
      setTotalCursos(response.total);
      
      // Extrair categorias únicas dos cursos
      const uniqueCategories = ['Todos', ...new Set(response.data.map(curso => curso.categoria))];
      setCategorias(uniqueCategories);
      
    } catch (error) {
      console.error('Erro ao carregar cursos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar cursos localmente por pesquisa e categoria
  const cursosFiltrados = cursos.filter(curso => {
    const matchesSearch = searchTerm === '' || 
      curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curso.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategoria = categoriaSelecionada === 'Todos' || 
      curso.categoria === categoriaSelecionada;
    
    return matchesSearch && matchesCategoria;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setNivelSelecionado('Todos');
    setTipoSelecionado('Todos');
    setCategoriaSelecionada('Todos');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== '' || 
    nivelSelecionado !== 'Todos' || 
    tipoSelecionado !== 'Todos' || 
    categoriaSelecionada !== 'Todos';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa gama completa de formações profissionais desenvolvidas 
            para impulsionar sua carreira e transformar organizações.
          </p>
        </div>

        {/* Barra de Busca e Filtros Mobile */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Filtros Mobile */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nível</label>
                <select
                  value={nivelSelecionado}
                  onChange={(e) => setNivelSelecionado(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main"
                >
                  {niveis.map(nivel => (
                    <option key={nivel} value={nivel}>
                      {nivel === 'Todos' ? 'Todos os níveis' : nivel}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
                <select
                  value={tipoSelecionado}
                  onChange={(e) => setTipoSelecionado(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main"
                >
                  {tipos.map(tipo => (
                    <option key={tipo} value={tipo}>
                      {tipo === 'Todos' ? 'Todos os tipos' : tipo}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                <select
                  value={categoriaSelecionada}
                  onChange={(e) => setCategoriaSelecionada(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main"
                >
                  {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
              
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="w-full px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          )}
        </div>

        {/* Filtros Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Barra de Busca */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Pesquisar cursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-4 items-center">
              
              {/* Filtro Nível */}
              <select
                value={nivelSelecionado}
                onChange={(e) => setNivelSelecionado(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
              >
                {niveis.map(nivel => (
                  <option key={nivel} value={nivel}>
                    {nivel === 'Todos' ? 'Todos os níveis' : nivel}
                  </option>
                ))}
              </select>

              {/* Filtro Tipo */}
              <select
                value={tipoSelecionado}
                onChange={(e) => setTipoSelecionado(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
              >
                {tipos.map(tipo => (
                  <option key={tipo} value={tipo}>
                    {tipo === 'Todos' ? 'Todos os tipos' : tipo}
                  </option>
                ))}
              </select>

              {/* Filtro Categoria */}
              <select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
              >
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-brand-main text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-brand-main text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-2 px-4 py-3 text-red-600 hover:text-red-700 font-medium"
                >
                  <X className="w-4 h-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {loading ? 'Carregando...' : `${cursosFiltrados.length} curso${cursosFiltrados.length !== 1 ? 's' : ''} encontrado${cursosFiltrados.length !== 1 ? 's' : ''}`}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-main"></div>
          </div>
        )}

        {/* Grid de Cursos */}
        {!loading && (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cursosFiltrados.map(curso => (
                  <CardCurso key={curso.id} curso={curso} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {cursosFiltrados.map(curso => (
                  <div key={curso.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <CardCurso curso={curso} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Mensagem sem resultados */}
        {!loading && cursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termos de pesquisa.
            </p>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="mt-4 px-6 py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>
        )}

        {/* Paginação (opcional - pode ser implementada conforme necessidade) */}
        {!loading && totalCursos > 12 && (
          <div className="flex justify-center mt-12">
            <nav className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Anterior
              </button>
              <span className="px-4 py-2 text-gray-700">
                Página {currentPage}
              </span>
              <button
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={cursosFiltrados.length < 12}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Próxima
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}