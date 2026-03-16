'use client';
import { useState } from 'react';
import { 
  Clock, Users, Star, Calendar, User, BookOpen, Target, CheckCircle, 
  ArrowLeft, Share2, Bookmark 
} from 'lucide-react';
import Link from 'next/link';
import { InscricaoModal } from './InscricaoModal';
import { ConfirmacaoModal } from './ConfirmacaoModal';
import { SidebarInscricao } from './SidebarInscricao';
import { TabsNavigacao } from './TabsNavigacao';

interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  duracao: string;
  vagas: number;
  vagasDisponiveis: number;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  preco: number;
  precoPromocional?: number;
  rating: number;
  totalAvaliacoes: number;
  imagem: string;
  categoria: string;
  dataInicio: string;
  dataFim: string;
  certificado: boolean;
  formador: {
    nome: string;
    foto: string;
    especializacao: string;
    experiencia: string;
    bio: string;
    formacao: string;
  };
  objetivo: string;
  competencias: string[];
  modulos: Array<{
    titulo: string;
    duracao: string;
    temas: string[];
  }>;
  metodologia: string;
  publicoAlvo: string;
  requisitos: string;
  incluido: string[];
}

interface CursoDetalhesClientProps {
  cursoDetalhes: Curso;
  cursoId: string;
}

export function CursoDetalhesClient({ cursoDetalhes, cursoId }: CursoDetalhesClientProps) {
  const [showInscricaoModal, setShowInscricaoModal] = useState(false);
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);

  return (
    <>
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

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda - Conteúdo */}
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
            <TabsNavigacao cursoDetalhes={cursoDetalhes} />
          </div>

          {/* Coluna da Direita - Sidebar de Inscrição */}
          <div className="lg:col-span-1">
            <SidebarInscricao 
              cursoDetalhes={cursoDetalhes}
              onInscricaoClick={() => setShowInscricaoModal(true)}
            />
          </div>
        </div>
      </div>

      {/* Modais */}
      <InscricaoModal 
        isOpen={showInscricaoModal}
        onClose={() => setShowInscricaoModal(false)}
        curso={cursoDetalhes}
        onSuccess={() => {
          setShowInscricaoModal(false);
          setShowConfirmacaoModal(true);
        }}
      />

      <ConfirmacaoModal 
        isOpen={showConfirmacaoModal}
        onClose={() => setShowConfirmacaoModal(false)}
        curso={cursoDetalhes}
      />
    </>
  );
}