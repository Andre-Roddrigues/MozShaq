// components/SherqAcademy/Cursos/CursoDetalhesClient.tsx
'use client';
import { useState, useEffect } from 'react';
import { 
  Clock, Users, Star, Calendar, User, BookOpen, Target, CheckCircle, 
  ArrowLeft, Share2, Bookmark, MapPin, Award, Tag, GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { InscricaoModal } from './InscricaoModal';
import { ConfirmacaoModal } from './ConfirmacaoModal';
import { SidebarInscricao } from './SidebarInscricao';
import { TabsNavigacao } from './TabsNavigacao';
import type { Course, CursoFormatado } from '../../../types/courseTypes';

interface CursoDetalhesClientProps {
  cursoDetalhes: Course;
  cursoId: string;
}

// Função auxiliar para formatar preço
const formatPrice = (price: number) => {
  if (price === 0) return 'Grátis';
  return `${price.toLocaleString('pt-MZ')} MZN`;
};

// Função auxiliar para obter o texto do nível
const getNivelText = (level: string) => {
  switch (level.toUpperCase()) {
    case 'INICIANTE': return 'Iniciante';
    case 'INTERMEDIÁRIO': return 'Intermediário';
    case 'AVANÇADO': return 'Avançado';
    default: return level;
  }
};

// Função auxiliar para obter a cor do nível
const getNivelColor = (level: string) => {
  switch (level.toUpperCase()) {
    case 'INICIANTE': return 'bg-green-100 text-green-800';
    case 'INTERMEDIÁRIO': return 'bg-yellow-100 text-yellow-800';
    case 'AVANÇADO': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function CursoDetalhesClient({ cursoDetalhes, cursoId }: CursoDetalhesClientProps) {
  const [showInscricaoModal, setShowInscricaoModal] = useState(false);
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Verificar se o curso está salvo nos favoritos
  useEffect(() => {
    const bookmarked = localStorage.getItem(`bookmarked_${cursoId}`);
    if (bookmarked === 'true') {
      setIsBookmarked(true);
    }
  }, [cursoId]);

  const handleBookmark = () => {
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    if (newState) {
      localStorage.setItem(`bookmarked_${cursoId}`, 'true');
    } else {
      localStorage.removeItem(`bookmarked_${cursoId}`);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: cursoDetalhes.titulo,
        text: cursoDetalhes.descricao,
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  // Formatar dados para os componentes filhos
  const cursoFormatado: CursoFormatado = {
    id: cursoDetalhes.id,
    titulo: cursoDetalhes.titulo,
    descricao: cursoDetalhes.descricao,
    descricaoLonga: cursoDetalhes.descricaoLonga,
    duracao: cursoDetalhes.duration,
    vagas: cursoDetalhes.vagasTotais,
    vagasTotais: cursoDetalhes.vagasTotais,
    vagasDisponiveis: cursoDetalhes.vagasDisponiveis,
    nivel: getNivelText(cursoDetalhes.level) as 'Iniciante' | 'Intermediário' | 'Avançado',
    preco: cursoDetalhes.preco,
    precoPromocional: cursoDetalhes.precoPromocional,
    rating: cursoDetalhes.avaliacao,
    totalAvaliacoes: cursoDetalhes.totalAvaliacoes,
    imagem: cursoDetalhes.thumbnail,
    categoria: cursoDetalhes.categoria,
    dataInicio: cursoDetalhes.createdAt ? new Date(cursoDetalhes.createdAt).toLocaleDateString('pt-MZ') : 'A definir',
    dataFim: 'A definir',
    certificado: true,
    formador: cursoDetalhes.formadores && cursoDetalhes.formadores.length > 0 ? {
      nome: cursoDetalhes.formadores[0].name,
      foto: cursoDetalhes.formadores[0].photo,
      especializacao: cursoDetalhes.formadores[0].specialization,
      experiencia: cursoDetalhes.formadores[0].experience,
      bio: cursoDetalhes.instructors[0]?.instructor.bio || 'Instrutor experiente na área',
      formacao: cursoDetalhes.instructors[0]?.instructor.education || 'Formação especializada'
    } : null,
    objetivo: cursoDetalhes.objectives?.join(' ') || cursoDetalhes.objective || '',
    competencias: cursoDetalhes.skills,
    modulos: cursoDetalhes.modulos.map(modulo => ({
      titulo: modulo.title,
      duracao: modulo.duration,
      temas: modulo.topics
    })),
    metodologia: 'Aulas teóricas e práticas com projetos reais, utilizando metodologias ativas de aprendizagem.',
    publicoAlvo: cursoDetalhes.targetAudience?.join(', ') || '',
    requisitos: cursoDetalhes.requirements?.join(', ') || '',
    incluido: [
      'Material didático completo',
      'Certificado de conclusão',
      'Suporte aos alunos',
      'Acesso à plataforma por 12 meses'
    ]
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
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
              {cursoDetalhes.temDesconto && (
                <div className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm font-medium">-{cursoDetalhes.percentagemDesconto}%</span>
                </div>
              )}
              <button 
                onClick={handleBookmark}
                className={`p-2 transition-colors ${isBookmarked ? 'text-brand-main' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda - Conteúdo */}
          <div className="lg:col-span-2">
            
            {/* Banner do Curso */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="relative">
                <img 
                  src={cursoDetalhes.thumbnail || '/images/placeholder-course.jpg'} 
                  alt={cursoDetalhes.titulo}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-course.jpg';
                  }}
                />
                {cursoDetalhes.temDesconto && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg">
                    <span className="font-bold">-{cursoDetalhes.percentagemDesconto}%</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {cursoDetalhes.categoria}
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${getNivelColor(cursoDetalhes.level)}`}>
                    {getNivelText(cursoDetalhes.level)}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {cursoDetalhes.type}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Com Certificado
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {cursoDetalhes.titulo}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{cursoDetalhes.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{cursoDetalhes.locationDefault}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{cursoDetalhes.studentsCount} alunos matriculados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{cursoDetalhes.avaliacao.toFixed(1)} ({cursoDetalhes.totalAvaliacoes} avaliações)</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {cursoDetalhes.descricaoLonga}
                </p>
              </div>
            </div>

            {/* Tabs de Navegação */}
            <TabsNavigacao cursoDetalhes={cursoFormatado} />
          </div>

          {/* Coluna da Direita - Sidebar de Inscrição */}
          <div className="lg:col-span-1">
            <SidebarInscricao 
              cursoDetalhes={cursoFormatado}
              onInscricaoClick={() => setShowInscricaoModal(true)}
            />
          </div>
        </div>
      </div>

    </>
  );
}