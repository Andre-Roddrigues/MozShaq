'use client';
import { Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

interface CursoProps {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  vagas: number;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  preco: number;
  rating: number;
  imagem: string;
  categoria: string;
  dataInicio: string;
  certificado: boolean;
}

export default function CardCurso({ 
  id,
  titulo, 
  descricao, 
  duracao, 
  vagas, 
  nivel, 
  preco, 
  rating, 
  imagem, 
  categoria,
  dataInicio,
  certificado 
}: CursoProps) {
  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Iniciante': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200">
      {/* Imagem do Curso */}
      <div className="relative overflow-hidden">
        <img 
          src={imagem} 
          alt={titulo}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNivelColor(nivel)}`}>
            {nivel}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 text-xs font-medium">
            {categoria}
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        {/* Cabeçalho */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-main transition-colors">
            {titulo}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {descricao}
          </p>
        </div>

        {/* Informações do Curso */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duracao}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{vagas} vagas</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{dataInicio}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-gray-600">{rating}</span>
            </div>
          </div>
        </div>

        {/* Certificado */}
        {certificado && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Inclui Certificado
            </span>
          </div>
        )}

        {/* Preço e CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-brand-main">
              {preco === 0 ? 'Grátis' : `${preco.toLocaleString('pt-MZ')} MZN`}
            </span>
          </div>
          <Link 
            href={`/cursos/${id}`}
            className="flex items-center gap-2 px-4 py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors group/btn"
          >
            <span className="text-sm font-medium">Saber Mais</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}