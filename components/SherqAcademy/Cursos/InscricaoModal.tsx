'use client';
import { useState } from 'react';
import { X, Loader } from 'lucide-react';
import { DadosPessoaisForm } from './DadosPessoaisForm';
import { PagamentoForm } from './PagamentoForm';

interface InscricaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  curso: any;
  onSuccess: () => void;
}

export function InscricaoModal({ isOpen, onClose, curso, onSuccess }: InscricaoModalProps) {
  const [step, setStep] = useState<'dados' | 'pagamento'>('dados');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    nui: '',
    comprovativo: null as File | null,
    termosAceitos: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpar erro do campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({ ...prev, comprovativo: file }));
    if (errors.comprovativo) {
      setErrors(prev => ({ ...prev, comprovativo: '' }));
    }
  };

  const validateDadosForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.nui.trim()) newErrors.nui = 'NUI é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePagamentoForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.comprovativo) {
      newErrors.comprovativo = 'Comprovativo de pagamento é obrigatório';
    }
    if (!formData.termosAceitos) {
      newErrors.termos = 'Deve aceitar os termos e condições';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateDadosForm()) {
      setStep('pagamento');
    }
  };

  const handleSubmit = async () => {
    if (!validatePagamentoForm()) return;
    
    setLoading(true);
    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Inscrição:', { cursoId: curso.id, ...formData });
      onSuccess();
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        {/* Modal */}
        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step === 'dados' ? 'Inscrição no Curso' : 'Pagamento'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{curso.titulo}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center">
              <div className={`flex items-center ${step === 'dados' ? 'text-brand-main' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 'dados' ? 'bg-brand-main text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="ml-2 text-sm font-medium">Dados Pessoais</span>
              </div>
              <div className="flex-1 mx-4 h-px bg-gray-300" />
              <div className={`flex items-center ${step === 'pagamento' ? 'text-brand-main' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 'pagamento' ? 'bg-brand-main text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="ml-2 text-sm font-medium">Pagamento</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
            {step === 'dados' ? (
              <DadosPessoaisForm 
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            ) : (
              <PagamentoForm
                curso={curso}
                formData={formData}
                errors={errors}
                onFileChange={handleFileChange}
                onTermosChange={(checked) => 
                  setFormData(prev => ({ ...prev, termosAceitos: checked }))
                }
              />
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-end gap-3">
              {step === 'pagamento' && (
                <button
                  onClick={() => setStep('dados')}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Voltar
                </button>
              )}
              <button
                onClick={step === 'dados' ? handleNext : handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-brand-main text-white rounded-lg font-semibold 
                         hover:bg-brand-main/90 transition-colors disabled:opacity-50 
                         disabled:cursor-not-allowed min-w-[160px]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Processando...
                  </span>
                ) : (
                  step === 'dados' ? 'Continuar' : 'Finalizar Inscrição'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}