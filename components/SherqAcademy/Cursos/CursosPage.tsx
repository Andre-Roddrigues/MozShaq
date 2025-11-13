'use client';
import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import CardCurso from './CardCuso';

// Dados mockados dos cursos
const cursosData = [
  {
    id: '1',
    titulo: 'Gestão de Segurança e Saúde no Trabalho',
    descricao: 'Curso completo sobre normas de segurança, prevenção de acidentes e gestão de riscos ocupacionais.',
    duracao: '40 horas',
    vagas: 25,
    nivel: 'Intermediário' as const,
    preco: 15000,
    rating: 4.8,
    imagem: '/images/services/seguranca-trabalho.jpg',
    categoria: 'Segurança',
    dataInicio: '15 Jan 2024',
    certificado: true
  },
  {
    id: '2',
    titulo: 'Sistemas de Gestão Ambiental ISO 14001',
    descricao: 'Implementação e auditoria de sistemas de gestão ambiental conforme normas internacionais.',
    duracao: '35 horas',
    vagas: 20,
    nivel: 'Avançado' as const,
    preco: 18000,
    rating: 4.9,
    imagem: '/images/services/economia-circular.jpg',
    categoria: 'Ambiental',
    dataInicio: '22 Jan 2024',
    certificado: true
  },
  {
    id: '3',
    titulo: 'Operação de Equipamentos Pesados',
    descricao: 'Formação prática para operação segura de máquinas e equipamentos industriais.',
    duracao: '60 horas',
    vagas: 15,
    nivel: 'Iniciante' as const,
    preco: 25000,
    rating: 4.7,
    imagem: '/images/servicos-bg.jpg',
    categoria: 'Operações',
    dataInicio: '10 Fev 2024',
    certificado: true
  },
  {
    id: '4',
    titulo: 'Soft Skills para Liderança',
    descricao: 'Desenvolvimento de competências interpessoais e técnicas de liderança eficaz.',
    duracao: '30 horas',
    vagas: 30,
    nivel: 'Intermediário' as const,
    preco: 12000,
    rating: 4.6,
    imagem: '/images/services/conformidade-industrial.jpg',
    categoria: 'Desenvolvimento',
    dataInicio: '5 Mar 2024',
    certificado: true
  },
  {
    id: '5',
    titulo: 'Auditor Interno de Qualidade',
    descricao: 'Preparação para realização de auditorias internas em sistemas de gestão da qualidade.',
    duracao: '25 horas',
    vagas: 18,
    nivel: 'Avançado' as const,
    preco: 16000,
    rating: 4.8,
    imagem: '/images/services/consultoria.jpg',
    categoria: 'Qualidade',
    dataInicio: '18 Fev 2024',
    certificado: true
  },
  {
    id: '6',
    titulo: 'Introdução às Energias Renováveis',
    descricao: 'Conceitos básicos e aplicações práticas de energias solar, eólica e biomassa.',
    duracao: '20 horas',
    vagas: 35,
    nivel: 'Iniciante' as const,
    preco: 0,
    rating: 4.5,
    imagem: '/images/services/seguranca-trabalho.jpg',
    categoria: 'Energia',
    dataInicio: '12 Jan 2024',
    certificado: true
  }
];

const categorias = ['Todos', 'Segurança', 'Ambiental', 'Operações', 'Desenvolvimento', 'Qualidade', 'Energia'];
const niveis = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

export default function CursosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [nivelSelecionado, setNivelSelecionado] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filtrar cursos
  const cursosFiltrados = cursosData.filter(curso => {
    const matchesSearch = curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         curso.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = categoriaSelecionada === 'Todos' || curso.categoria === categoriaSelecionada;
    const matchesNivel = nivelSelecionado === 'Todos' || curso.nivel === nivelSelecionado;
    
    return matchesSearch && matchesCategoria && matchesNivel;
  });

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

        {/* Filtros e Busca */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
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

              {/* Filtro Nível */}
              <select
                value={nivelSelecionado}
                onChange={(e) => setNivelSelecionado(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main focus:border-transparent"
              >
                {niveis.map(nivel => (
                  <option key={nivel} value={nivel}>
                    {nivel}
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
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? 's' : ''} encontrado{cursosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Grid de Cursos */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosFiltrados.map(curso => (
              <CardCurso key={curso.id} {...curso} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {cursosFiltrados.map(curso => (
              <div key={curso.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                {/* Implementar versão lista se necessário */}
                <CardCurso {...curso} />
              </div>
            ))}
          </div>
        )}

        {/* Mensagem sem resultados */}
        {cursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termos de pesquisa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}