'use client';
import { Banknote, AlertCircle, Phone, Mail, Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PagamentoFormProps {
  curso: any;
  formData: any;
  errors: Record<string, string>;
  onFileChange: (file: File | null) => void;
  onTermosChange: (checked: boolean) => void;
}

export function PagamentoForm({ 
  curso, 
  formData, 
  errors, 
  onFileChange, 
  onTermosChange 
}: PagamentoFormProps) {
  const [copiado, setCopiado] = useState<string | null>(null);

  const contasBancarias = [
    { banco: 'BCI', nib: '123456789', titular: 'Eng. Andre Rodrigues' },
    { banco: 'Millennium BIM', nib: '987654321', titular: 'Eng. Andre Rodrigues' },
    { banco: 'Standard Bank', nib: '456789123', titular: 'Eng. Andre Rodrigues' }
  ];

  const copiarNIB = async (nib: string, banco: string) => {
    try {
      await navigator.clipboard.writeText(nib);
      setCopiado(banco);
      setTimeout(() => setCopiado(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const valorFinal = curso.precoPromocional || curso.preco;

  return (
    <div className="space-y-6">
      {/* Resumo do Pagamento */}
      <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
        <h4 className="font-semibold text-blue-900 mb-3">Resumo do Pagamento</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-blue-800">Valor do Curso:</span>
            <span className="font-medium text-blue-900">
              {curso.preco.toLocaleString('pt-MZ')} MZN
            </span>
          </div>
          {curso.precoPromocional && (
            <div className="flex justify-between text-sm">
              <span className="text-blue-800">Desconto:</span>
              <span className="font-medium text-green-600">
                -{(curso.preco - curso.precoPromocional).toLocaleString('pt-MZ')} MZN
              </span>
            </div>
          )}
          <div className="border-t border-blue-200 pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span className="text-blue-900">Total a Pagar:</span>
              <span className="text-lg text-blue-900">
                {valorFinal.toLocaleString('pt-MZ')} MZN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contas Bancárias */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Dados Bancários para Transferência/Depósito
        </label>
        <div className="space-y-3">
          {contasBancarias.map((conta, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-brand-main transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">{conta.banco}</span>
                </div>
                <button
                  onClick={() => copiarNIB(conta.nib, conta.banco)}
                  className="text-sm text-brand-main hover:text-brand-main/80 font-medium px-3 py-1 rounded-lg hover:bg-brand-main/5"
                >
                  {copiado === conta.banco ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      Copiado!
                    </span>
                  ) : (
                    'Copiar NIB'
                  )}
                </button>
              </div>
              <p className="text-sm font-mono text-gray-600">{conta.nib}</p>
              <p className="text-xs text-gray-500 mt-1">Titular: {conta.titular}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contato para Pagamentos Alternativos */}
      <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-medium text-yellow-800 mb-2">
              Pagamentos por Paytech, M-Pesa ou EMOLA
            </h5>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-700">84 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-700">pagamentos@dominio.co.mz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload do Comprovativo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Comprovativo de Pagamento <span className="text-red-500">*</span>
        </label>
        <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors
          ${errors.comprovativo ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-brand-main'}`}
        >
          <input
            type="file"
            id="comprovativo"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => onFileChange(e.target.files?.[0] || null)}
            className="hidden"
          />
          <label htmlFor="comprovativo" className="cursor-pointer block">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600 mb-1">
              {formData.comprovativo ? (
                <span className="font-medium text-green-600">
                  ✓ {formData.comprovativo.name}
                </span>
              ) : (
                'Clique para fazer upload do comprovativo'
              )}
            </p>
            <p className="text-xs text-gray-500">
              PDF, JPG ou PNG (max. 5MB)
            </p>
          </label>
        </div>
        {errors.comprovativo && (
          <p className="mt-1 text-xs text-red-500">{errors.comprovativo}</p>
        )}
      </div>

      {/* Termos */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termosAceitos}
            onChange={(e) => onTermosChange(e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-main border-gray-300 rounded focus:ring-brand-main"
          />
          <span className="text-sm text-gray-600">
            Li e aceito os termos e condições da inscrição, incluindo a política de cancelamento e reembolso.
            <span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        {errors.termos && (
          <p className="text-xs text-red-500">{errors.termos}</p>
        )}
      </div>
    </div>
  );
}