// components/SherqAcademy/Cursos/ConfirmacaoModal.tsx
'use client';

import { useEffect } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ConfirmacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export function ConfirmacaoModal({ isOpen, onClose, courseTitle }: ConfirmacaoModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50">
        <div className="p-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Inscrição Confirmada!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Parabéns! Você foi inscrito no curso <strong>{courseTitle}</strong> com sucesso.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Em breve você receberá mais informações sobre o curso no seu email/telefone de contato.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Fechar
            </button>
            <Link
              href="/user/cursos"
              className="flex-1 py-2 px-4 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition flex items-center justify-center gap-2"
            >
              Ver Meus Cursos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}