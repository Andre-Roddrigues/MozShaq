// components/SherqAcademy/Cursos/CardCurso.tsx
'use client';
import { Clock, Users, Star, ArrowRight, Calendar, MapPin, Award, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Course } from '../../../types/courseTypes';

interface CardCursoProps {
  curso: Course;
}

export default function CardCurso({ curso }: CardCursoProps) {
  const getNivelColor = (nivel: string) => {
    switch (nivel.toUpperCase()) {
      case 'INICIANTE': return 'bg-green-100 text-green-800';
      case 'INTERMEDIÁRIO': return 'bg-yellow-100 text-yellow-800';
      case 'AVANÇADO': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNivelText = (nivel: string) => {
    switch (nivel.toUpperCase()) {
      case 'INICIANTE': return 'Iniciante';
      case 'INTERMEDIÁRIO': return 'Intermediário';
      case 'AVANÇADO': return 'Avançado';
      default: return nivel;
    }
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Grátis';
    return `${price.toLocaleString('pt-MZ')} MZN`;
  };

  const getDisplayPrice = () => {
    if (curso.temDesconto && curso.precoPromocional) {
      return formatPrice(curso.precoPromocional);
    }
    return formatPrice(curso.preco);
  };

  const hasDiscount = curso.temDesconto && curso.precoPromocional;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 flex flex-col h-full">
      {/* Imagem do Curso */}
      <div className="relative overflow-hidden">
        <img 
          src={curso.thumbnail || '/images/placeholder-course.jpg'} 
          alt={curso.titulo}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-course.jpg';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNivelColor(curso.level)}`}>
            {getNivelText(curso.level)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 text-xs font-medium">
            {curso.categoria}
          </span>
        </div>
        {hasDiscount && (
          <div className="absolute bottom-4 right-4 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
            -{curso.percentagemDesconto}%
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Cabeçalho */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-main transition-colors">
            {curso.titulo}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {curso.descricao}
          </p>
        </div>

        {/* Informações do Curso */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{curso.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{curso.locationDefault}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-gray-600" />
              <span>{curso.studentsCount} alunos</span>
            </div>
            {/* <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{curso.avaliacao.toFixed(1)}</span>
            </div> */}
          </div>
        </div>

        {/* Skills/Tags */}
        {curso.skills && curso.skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {curso.skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  {skill}
                </span>
              ))}
              {curso.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  +{curso.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Certificado */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
            <Award className="w-3 h-3" />
            Inclui Certificado
          </span>
        </div>

        {/* Preço e CTA */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through mr-2">
                {formatPrice(curso.preco)}
              </span>
            )}
            <span className="text-2xl font-bold text-brand-main">
              {getDisplayPrice()}
            </span>
          </div>
          <Link 
            href={`/cursos/${curso.id}`}
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