// components/SherqAcademy/Cursos/SidebarInscricao.tsx
'use client';
import { Calendar, Users, Award, Clock, CreditCard, Tag } from 'lucide-react';

interface CursoFormatado {
  id: string;
  titulo: string;
  preco: number;
  precoPromocional?: number;
  vagasDisponiveis: number;
  vagasTotais: number; // Adicionado
  duracao: string;
  dataInicio: string;
  dataFim: string;
  nivel: string;
  certificado: boolean;
}

interface SidebarInscricaoProps {
  cursoDetalhes: CursoFormatado;
  onInscricaoClick: () => void;
}

export function SidebarInscricao({ cursoDetalhes, onInscricaoClick }: SidebarInscricaoProps) {
  const formatPrice = (price: number | null | undefined): string => {
    if (!price || price === 0) return 'Grátis';
    return `${price.toLocaleString('pt-MZ')} MZN`;
  };

  const hasDiscount = cursoDetalhes.precoPromocional !== undefined && 
    cursoDetalhes.precoPromocional !== null &&
    cursoDetalhes.precoPromocional < cursoDetalhes.preco;
  
  const displayPrice: number = hasDiscount && cursoDetalhes.precoPromocional 
    ? cursoDetalhes.precoPromocional 
    : cursoDetalhes.preco;
  
  const originalPrice: number | null = hasDiscount && cursoDetalhes.precoPromocional 
    ? cursoDetalhes.preco 
    : null;
  
  const discountPercent = originalPrice && displayPrice
    ? Math.round(((originalPrice - displayPrice) / originalPrice) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-24">
      {/* Preço */}
      <div className="p-6 border-b border-gray-200">
        <div className="mb-4">
          {hasDiscount && originalPrice && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-lg text-sm font-medium">
                -{discountPercent}%
              </span>
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-main">
              {formatPrice(displayPrice)}
            </span>
            {displayPrice !== 0 && (
              <span className="text-gray-500 text-sm">(IVA incluído)</span>
            )}
          </div>
        </div>

        <button
          onClick={onInscricaoClick}
          disabled={cursoDetalhes.vagasDisponiveis === 0}
          className={`
            w-full py-3 rounded-lg font-semibold transition-all duration-200
            ${cursoDetalhes.vagasDisponiveis > 0
              ? 'bg-brand-main text-white hover:bg-brand-main/90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {cursoDetalhes.vagasDisponiveis > 0 ? 'Inscrever-me Agora' : 'Esgotado'}
        </button>

        {cursoDetalhes.vagasDisponiveis > 0 && cursoDetalhes.vagasDisponiveis < 10 && (
          <p className="text-xs text-orange-600 text-center mt-2">
            ⚡ Apenas {cursoDetalhes.vagasDisponiveis} vagas restantes!
          </p>
        )}
      </div>

      {/* Informações do Curso */}
      <div className="p-6 space-y-4">
        <h4 className="font-semibold text-gray-900 mb-3">Informações do Curso</h4>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Duração</p>
              <p className="text-sm text-gray-600">{cursoDetalhes.duracao}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Datas</p>
              <p className="text-sm text-gray-600">
                {cursoDetalhes.dataInicio} - {cursoDetalhes.dataFim}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Vagas Disponíveis</p>
              <p className="text-sm text-gray-600">
                {cursoDetalhes.vagasDisponiveis} de {cursoDetalhes.vagasTotais}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Certificado</p>
              <p className="text-sm text-gray-600">
                {cursoDetalhes.certificado ? 'Sim, incluso' : 'Não incluído'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Garantias */}
      <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CreditCard className="w-4 h-4 text-green-600" />
            <span>Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Tag className="w-4 h-4 text-blue-600" />
            <span>Garantia de qualidade</span>
          </div>
        </div>
      </div>
    </div>
  );
}