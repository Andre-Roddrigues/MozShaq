'use client';
import { CheckCircle2, Calendar, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ConfirmacaoModalProps } from '../../../types/curso.types';

export function ConfirmacaoModal({ isOpen, onClose, curso }: ConfirmacaoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="p-8">
            {/* Ícone de Sucesso com Animação */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Inscrição Realizada!
              </h3>
              
              <p className="text-gray-600">
                Sua inscrição no curso <span className="font-semibold text-brand-main">{curso.titulo}</span> 
                foi recebida com sucesso.
              </p>
            </div>

            {/* Próximos Passos */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Próximos Passos:
              </h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-xs font-bold">1</span>
                  </div>
                  <span className="text-blue-800">
                    Aguarde a confirmação por email em até <strong>24h úteis</strong>
                  </span>
                </li>
                
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-xs font-bold">2</span>
                  </div>
                  <span className="text-blue-800">
                    Após validação do pagamento, sua vaga será garantida
                  </span>
                </li>
                
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 text-xs font-bold">3</span>
                  </div>
                  <span className="text-blue-800">
                    Acesse o painel do aluno para acompanhar o status
                  </span>
                </li>
              </ul>
            </div>

            {/* Informações de Contato */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-600">
                  Fique atento à sua caixa de entrada e spam. 
                  Enviaremos todas as informações por email.
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col gap-3">
              <Link
                href="/user/cursos"
                className="w-full px-4 py-3 bg-brand-main text-white rounded-xl font-semibold 
                         hover:bg-brand-main/90 transition-colors flex items-center justify-center gap-2"
              >
                Ver Meus Cursos
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={onClose}
                className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl 
                         font-semibold hover:bg-gray-50 transition-colors"
              >
                Continuar Navegando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}