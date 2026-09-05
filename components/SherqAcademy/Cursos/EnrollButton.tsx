// components/SherqAcademy/Cursos/EnrollButton.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

interface EnrollButtonProps {
  courseId: string;
  courseTitle: string;
  onSuccess?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function EnrollButton({ 
  courseId, 
  courseTitle, 
  onSuccess, 
  fullWidth = false,
  variant = 'primary'
}: EnrollButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contact, setContact] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      case 'outline':
        return 'border-2 border-brand-main text-brand-main hover:bg-brand-main/10';
      default:
        return 'bg-brand-main text-white hover:bg-brand-main/90';
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      router.push(`/login?redirect=/cursos/${courseId}`);
      return;
    }

    // Se o usuário já tem email, usa ele como contato padrão
    if (user.email) {
      setContact(user.email);
    }
    
    setShowContactModal(true);
  };

  const submitEnrollment = async () => {
    if (!contact.trim()) {
      setError('Por favor, informe seu email ou telefone');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/students/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId,
          contact: contact.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao realizar inscrição');
      }

      setShowContactModal(false);
      
      if (onSuccess) {
        onSuccess();
      } else {
        // Mostrar toast ou mensagem de sucesso
        alert('Inscrição realizada com sucesso!');
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao conectar com o servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleEnroll}
        disabled={isLoading}
        className={`
          ${fullWidth ? 'w-full' : ''}
          flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200
          ${getVariantClasses()}
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <FileText className="w-5 h-5" />
        )}
        <span>Inscrever-se Gratuitamente</span>
      </button>

      {/* Modal de Contato */}
      {showContactModal && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => !isLoading && setShowContactModal(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Confirmar Inscrição
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Para se inscrever no curso <strong>{courseTitle}</strong>, informe seu email ou telefone para contato.
            </p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email ou Telefone *
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  setError(null);
                }}
                placeholder="exemplo@email.com ou 841234567"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enviaremos informações do curso para este contato
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button
                onClick={submitEnrollment}
                disabled={isLoading || !contact.trim()}
                className="flex-1 py-2 px-4 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <CheckCircle className="w-4 h-4" />
                )}
                Confirmar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}