'use client';
import { useState } from 'react';
import { Banknote, CheckCircle2 } from 'lucide-react';
import { ContaBancaria } from '../../../types/curso.types';

interface ContasBancariasProps {
  contas: ContaBancaria[];
}

export function ContasBancarias({ contas }: ContasBancariasProps) {
  const [copiado, setCopiado] = useState<string | null>(null);

  const copiarNIB = async (nib: string, banco: string) => {
    try {
      await navigator.clipboard.writeText(nib);
      setCopiado(banco);
      setTimeout(() => setCopiado(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className="space-y-3">
      {contas.map((conta, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-brand-main transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Banknote className="w-5 h-5 text-gray-400" />
              <span className="font-semibold text-gray-900">{conta.banco}</span>
            </div>
            <button
              onClick={() => copiarNIB(conta.nib, conta.banco)}
              className="relative px-3 py-1 text-sm text-brand-main hover:text-brand-main/80 font-medium"
            >
              {copiado === conta.banco ? (
                <span className="flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Copiado!
                </span>
              ) : (
                'Copiar NIB'
              )}
            </button>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm">
              <span className="text-gray-500">NIB:</span>{' '}
              <span className="font-mono text-gray-900">{conta.nib}</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Titular:</span>{' '}
              <span className="text-gray-900">{conta.titular}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}