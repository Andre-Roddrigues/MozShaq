'use client';
import { useState } from 'react';
import { 
  Clock, 
  Users, 
  Star, 
  Calendar, 
  User, 
  BookOpen, 
  Target, 
  CheckCircle, 
  ArrowLeft,
  Share2,
  Bookmark
} from 'lucide-react';
import Link from 'next/link';

// Dados mockados do curso (em um projeto real, viria de uma API)
const cursoDetalhes = {
  id: '1',
  titulo: 'Gestão de Segurança e Saúde no Trabalho',
  descricao: 'Curso completo sobre normas de segurança, prevenção de acidentes e gestão de riscos ocupacionais conforme as legislações moçambicanas e internacionais.',
  descricaoLonga: 'Este curso oferece uma formação abrangente em Segurança e Saúde no Trabalho, focada na realidade moçambicana. Abordamos desde os conceitos básicos até as técnicas avançadas de gestão de riscos, preparando os participantes para implementar e auditar sistemas de SST em suas organizações.',
  duracao: '40 horas',
  vagas: 25,
  vagasDisponiveis: 15,
  nivel: 'Intermediário' as const,
  preco: 15000,
  precoPromocional: 12000,
  rating: 4.8,
  totalAvaliacoes: 47,
  imagem: '/images/services/consultoria.jpg',
  categoria: 'Segurança',
  dataInicio: '15 Jan 2024',
  dataFim: '26 Jan 2024',
  certificado: true,
  formador: {
    nome: 'Eng. Andre Rodrigues',
    foto: '/images/mentorhero.jpg',
    especializacao: 'Segurança e Saúde no Trabalho',
    experiencia: '12 anos',
    bio: 'Engenheiro de Segurança com vasta experiência em implementação de sistemas de gestão de SST em grandes empresas moçambicanas. Auditor líder em várias normas internacionais.',
    formacao: 'Mestrado em Engenharia de Segurança - Universidade Eduardo Mondlane'
  },
  objetivo: 'Capacitar os participantes a implementar, manter e melhorar sistemas de gestão de segurança e saúde no trabalho, identificando e controlando riscos ocupacionais de acordo com a legislação vigente.',
  competencias: [
    'Identificar e avaliar riscos ocupacionais',
    'Elaborar planos de prevenção de acidentes',
    'Implementar sistemas de gestão de SST',
    'Conduzir auditorias internas',
    'Interpretar legislação de segurança do trabalho',
    'Desenvolver programas de formação em SST'
  ],
  modulos: [
    {
      titulo: 'Introdução à Segurança e Saúde no Trabalho',
      duracao: '4 horas',
      temas: [
        'Conceitos fundamentais de SST',
        'Legislação moçambicana aplicada',
        'Responsabilidades legais',
        'Estatísticas de acidentes em Moçambique'
      ]
    },
    {
      titulo: 'Gestão de Riscos Ocupacionais',
      duracao: '8 horas',
      temas: [
        'Identificação de perigos',
        'Avaliação qualitativa e quantitativa de riscos',
        'Hierarquia de controlo de riscos',
        'Elaboração de matriz de riscos'
      ]
    },
    {
      titulo: 'Sistemas de Gestão de SST',
      duracao: '12 horas',
      temas: [
        'Norma OHSAS 18001/ISO 45001',
        'Política e planeamento',
        'Implementação e operação',
        'Verificação e ação corretiva'
      ]
    },
    {
      titulo: 'Equipamentos de Proteção Individual',
      duracao: '6 horas',
      temas: [
        'Seleção e especificação de EPIs',
        'Programas de gestão de EPIs',
        'Treino de utilização',
        'Manutenção e inspeção'
      ]
    },
    {
      titulo: 'Auditoria e Melhoria Contínua',
      duracao: '10 horas',
      temas: [
        'Preparação de auditorias',
        'Técnicas de auditoria',
        'Elaboração de relatórios',
        'Planos de ação de melhoria'
      ]
    }
  ],
  metodologia: 'Aulas teóricas expositivas, estudos de caso baseados na realidade moçambicana, exercícios práticos, simulações de auditoria e discussões em grupo.',
  publicoAlvo: 'Técnicos de segurança, engenheiros, gestores, supervisores e todos os profissionais envolvidos na gestão de segurança e saúde no trabalho.',
  requisitos: 'Conhecimentos básicos em gestão ou experiência em ambiente industrial. Computador com acesso à internet para materiais online.',
  incluido: [
    'Material didático completo',
    'Acesso à plataforma online',
    'Certificado de conclusão',
    'Coffee breaks',
    'Network com profissionais',
    'Suporte pós-curso por 3 meses'
  ]
};

export default function CursoDetalhesPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('sobre');
  const { id } = params; // 👈 espera o Promise resolver

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/cursos" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar aos Cursos</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2">
            
            {/* Banner do Curso */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <img 
                src={cursoDetalhes.imagem} 
                alt={cursoDetalhes.titulo}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {cursoDetalhes.categoria}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {cursoDetalhes.nivel}
                  </span>
                  {cursoDetalhes.certificado && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      Com Certificado
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {cursoDetalhes.titulo}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{cursoDetalhes.duracao}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cursoDetalhes.dataInicio} - {cursoDetalhes.dataFim}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{cursoDetalhes.vagasDisponiveis} vagas disponíveis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{cursoDetalhes.rating} ({cursoDetalhes.totalAvaliacoes} avaliações)</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {cursoDetalhes.descricaoLonga}
                </p>
              </div>
            </div>

            {/* Tabs de Navegação */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto">
                  {[
                    { id: 'sobre', label: 'Sobre o Curso', icon: BookOpen },
                    { id: 'modulos', label: 'Módulos', icon: Target },
                    { id: 'formador', label: 'Formador', icon: User },
                    { id: 'metodologia', label: 'Metodologia', icon: CheckCircle }
                  ].map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? 'border-brand-main text-brand-main'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Conteúdo das Tabs */}
              <div className="p-6">
                {activeTab === 'sobre' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Objetivo do Curso</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cursoDetalhes.objetivo}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Competências a Desenvolver</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cursoDetalhes.competencias.map((competencia, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{competencia}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Público-Alvo</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cursoDetalhes.publicoAlvo}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Requisitos</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cursoDetalhes.requisitos}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'modulos' && (
                  <div className="space-y-6">
                    {cursoDetalhes.modulos.map((modulo, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              Módulo {index + 1}: {modulo.titulo}
                            </h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Duração: {modulo.duracao}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {modulo.temas.map((tema, temaIndex) => (
                            <div key={temaIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-brand-main rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{tema}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'formador' && (
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={cursoDetalhes.formador.foto} 
                        alt={cursoDetalhes.formador.nome}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {cursoDetalhes.formador.nome}
                      </h3>
                      <p className="text-brand-main font-semibold mb-4">
                        {cursoDetalhes.formador.especializacao}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Experiência</h4>
                          <p className="text-gray-700">{cursoDetalhes.formador.experiencia} de experiência</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Formação</h4>
                          <p className="text-gray-700">{cursoDetalhes.formador.formacao}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Biografia</h4>
                          <p className="text-gray-700 leading-relaxed">{cursoDetalhes.formador.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'metodologia' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Metodologia de Ensino</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {cursoDetalhes.metodologia}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">O que está incluído</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cursoDetalhes.incluido.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Inscrição */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {cursoDetalhes.precoPromocional ? (
                    <>
                      <span className="text-3xl font-bold text-brand-main">
                        {cursoDetalhes.precoPromocional.toLocaleString('pt-MZ')} MZN
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {cursoDetalhes.preco.toLocaleString('pt-MZ')} MZN
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-brand-main">
                      {cursoDetalhes.preco === 0 ? 'Grátis' : `${cursoDetalhes.preco.toLocaleString('pt-MZ')} MZN`}
                    </span>
                  )}
                </div>
                {cursoDetalhes.precoPromocional && (
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                    Promoção por tempo limitado
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duração:</span>
                  <span className="font-medium">{cursoDetalhes.duracao}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Início:</span>
                  <span className="font-medium">{cursoDetalhes.dataInicio}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vagas:</span>
                  <span className="font-medium">{cursoDetalhes.vagasDisponiveis} disponíveis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Certificado:</span>
                  <span className="font-medium text-green-600">
                    {cursoDetalhes.certificado ? 'Incluído' : 'Não incluído'}
                  </span>
                </div>
              </div>

              <button className="w-full bg-brand-main text-white py-4 rounded-lg font-semibold hover:bg-brand-main/90 transition-colors mb-4">
                Inscrever-se Agora
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Adicionar à Lista de Desejos
              </button>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  🎯 <strong>Garanta sua vaga!</strong> Restam apenas {cursoDetalhes.vagasDisponiveis} vagas disponíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}