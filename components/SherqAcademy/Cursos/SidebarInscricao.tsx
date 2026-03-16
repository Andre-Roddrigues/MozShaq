'use client';
import { Clock, Calendar, Users } from 'lucide-react';

interface SidebarInscricaoProps {
  cursoDetalhes: any;
  onInscricaoClick: () => void;
}

export function SidebarInscricao({ cursoDetalhes, onInscricaoClick }: SidebarInscricaoProps) {
  return (
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

      <button 
        onClick={onInscricaoClick}
        className="w-full bg-brand-main text-white py-4 rounded-lg font-semibold hover:bg-brand-main/90 transition-colors mb-4"
      >
        Inscrever-se Agora
      </button>

      <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
        Adicionar à Lista de Desejos
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800 text-center">
          <strong>Garanta sua vaga!</strong> Restam apenas {cursoDetalhes.vagasDisponiveis} vagas disponíveis.
        </p>
      </div>
    </div>
  );
}