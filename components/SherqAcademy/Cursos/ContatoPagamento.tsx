'use client';
import { AlertCircle, Phone, Mail, MessageCircle } from 'lucide-react';

interface ContatoPagamentoProps {
  contatos: {
    telefone: string;
    email: string;
    whatsapp?: string;
  };
}

export function ContatoPagamento({ contatos }: ContatoPagamentoProps) {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border border-yellow-200">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-yellow-100 rounded-lg">
          <AlertCircle className="w-5 h-5 text-yellow-600" />
        </div>
        
        <div className="flex-1">
          <h5 className="font-semibold text-yellow-800 mb-2">
            Pagamentos por Paytech, M-Pesa ou EMOLA
          </h5>
          
          <p className="text-sm text-yellow-700 mb-4">
            Para pagamentos via carteira móvel ou outros métodos, entre em contato:
          </p>
          
          <div className="space-y-3">
            <a 
              href={`tel:${contatos.telefone}`}
              className="flex items-center gap-3 p-2 bg-white/50 rounded-lg hover:bg-white transition-colors"
            >
              <div className="p-1.5 bg-yellow-100 rounded-full">
                <Phone className="w-4 h-4 text-yellow-700" />
              </div>
              <div>
                <p className="text-xs text-yellow-600">Ligue agora</p>
                <p className="font-medium text-yellow-800">{contatos.telefone}</p>
              </div>
            </a>
            
            <a 
              href={`mailto:${contatos.email}`}
              className="flex items-center gap-3 p-2 bg-white/50 rounded-lg hover:bg-white transition-colors"
            >
              <div className="p-1.5 bg-yellow-100 rounded-full">
                <Mail className="w-4 h-4 text-yellow-700" />
              </div>
              <div>
                <p className="text-xs text-yellow-600">Envie um email</p>
                <p className="font-medium text-yellow-800">{contatos.email}</p>
              </div>
            </a>
            
            {contatos.whatsapp && (
              <a 
                href={`https://wa.me/${contatos.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 bg-white/50 rounded-lg hover:bg-white transition-colors"
              >
                <div className="p-1.5 bg-green-100 rounded-full">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-green-600">WhatsApp</p>
                  <p className="font-medium text-green-700">Iniciar conversa</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}