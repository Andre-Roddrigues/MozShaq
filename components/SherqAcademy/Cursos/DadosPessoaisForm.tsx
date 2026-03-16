'use client';
import { User, Mail, Phone, CreditCard } from 'lucide-react';

interface DadosPessoaisFormProps {
  formData: any;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DadosPessoaisForm({ formData, errors, onChange }: DadosPessoaisFormProps) {
  const campos = [
    {
      name: 'nome',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo',
      icon: User
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'seu@email.com',
      icon: Mail
    },
    {
      name: 'telefone',
      label: 'Telefone',
      type: 'tel',
      placeholder: '84 123 4567',
      icon: Phone
    },
    {
      name: 'nui',
      label: 'NUI (Número Único de Identificação)',
      type: 'text',
      placeholder: 'Digite seu NUI',
      icon: CreditCard
    }
  ];

  return (
    <div className="space-y-4">
      {campos.map((campo) => {
        const IconComponent = campo.icon;
        return (
          <div key={campo.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {campo.label} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconComponent className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type={campo.type}
                name={campo.name}
                value={formData[campo.name] || ''}
                onChange={onChange}
                className={`
                  w-full pl-10 pr-4 py-2 border rounded-lg 
                  focus:ring-2 focus:ring-brand-main focus:border-transparent
                  ${errors[campo.name] ? 'border-red-500' : 'border-gray-300'}
                `}
                placeholder={campo.placeholder}
              />
            </div>
            {errors[campo.name] && (
              <p className="mt-1 text-xs text-red-500">{errors[campo.name]}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}