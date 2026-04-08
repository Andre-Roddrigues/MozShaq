'use client';

import { useState, useRef } from 'react';
import { X, Upload, Loader2, CheckCircle, AlertCircle, FileText, Image } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseTitle: string;
  amount: number;
  onSuccess?: () => void;
}

export function PaymentModal({ isOpen, onClose, courseId, courseTitle, amount, onSuccess }: PaymentModalProps) {
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('pt-MZ')} MZN`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setError('Formato inválido. Use JPEG, PNG ou PDF');
        return;
      }

      // Validar tamanho (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Arquivo muito grande. Máximo 5MB');
        return;
      }

      setPaymentProof(file);
      setError(null);

      // Criar preview para imagens
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentProof) {
      setError('Por favor, selecione o comprovante de pagamento');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('courseId', courseId);
      formData.append('paymentProof', paymentProof);

      const response = await fetch('/api/students/payments', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar comprovante');
      }

      setSuccess(true);
      
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
          onClose();
        }, 2000);
      } else {
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao processar pagamento');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => !isLoading && onClose()} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Pagamento do Curso
          </h3>
          <button 
            onClick={() => !isLoading && onClose()} 
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Comprovante Enviado!
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Seu comprovante foi enviado com sucesso. Aguarde a aprovação da equipe.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  ⏳ O acesso ao curso será liberado em até 24h após a aprovação do pagamento.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Informações do Pagamento */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Curso:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{courseTitle}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Valor:</span>
                  <span className="text-2xl font-bold text-brand-main">{formatPrice(amount)}</span>
                </div>
              </div>

              {/* Dados Bancários */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Dados para Transferência
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Banco:</span>
                    <span className="font-medium text-gray-900 dark:text-white">BCI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Titular:</span>
                    <span className="font-medium text-gray-900 dark:text-white">MozShaq Lda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">NIB:</span>
                    <span className="font-medium text-gray-900 dark:text-white">0002 1234 5678 9012 3456 7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Valor:</span>
                    <span className="font-medium text-brand-main">{formatPrice(amount)}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Upload do Comprovante */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Comprovante de Pagamento *
                  </label>
                  
                  <div 
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition
                      ${paymentProof ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-brand-main'}
                    `}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    
                    {previewUrl ? (
                      <div className="space-y-3">
                        <img src={previewUrl} alt="Preview" className="max-h-40 mx-auto rounded-lg" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {paymentProof?.name}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPaymentProof(null);
                            setPreviewUrl(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="text-red-500 text-sm hover:underline"
                        >
                          Remover
                        </button>
                      </div>
                    ) : paymentProof?.type === 'application/pdf' ? (
                      <div className="space-y-3">
                        <FileText className="w-12 h-12 text-red-500 mx-auto" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {paymentProof.name}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPaymentProof(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="text-red-500 text-sm hover:underline"
                        >
                          Remover
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Clique para selecionar o comprovante
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            Formatos: JPEG, PNG, PDF (Max. 5MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                  </div>
                )}

                {/* Instruções */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      Após realizar a transferência, faça o upload do comprovante. 
                      Seu acesso será liberado em até 24h após a confirmação do pagamento.
                    </span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                    disabled={isLoading}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !paymentProof}
                    className="flex-1 py-3 px-4 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    Enviar Comprovante
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}