'use client';

import { ResumoPagamentoProps } from "../../../types/curso.types";

export function ResumoPagamento({ preco, precoPromocional }: ResumoPagamentoProps) {
  const valorFinal = precoPromocional || preco;
  const desconto = precoPromocional ? preco - precoPromocional : 0;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
      <h4 className="font-semibold text-blue-900 mb-4">Resumo do Pagamento</h4>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-blue-800">Valor do Curso:</span>
          <span className="font-medium text-blue-900">
            {preco.toLocaleString('pt-MZ')} MZN
          </span>
        </div>
        
        {desconto > 0 && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-800">Desconto:</span>
            <span className="font-medium text-green-600">
              -{desconto.toLocaleString('pt-MZ')} MZN
            </span>
          </div>
        )}
        
        <div className="border-t border-blue-200 pt-3 mt-3">
          <div className="flex justify-between items-center font-semibold">
            <span className="text-blue-900">Total a Pagar:</span>
            <span className="text-xl text-blue-900">
              {valorFinal.toLocaleString('pt-MZ')} MZN
            </span>
          </div>
          <p className="text-xs text-blue-600 mt-1">
            *Valor já com todos os impostos incluídos
          </p>
        </div>
      </div>
    </div>
  );
}