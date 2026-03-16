'use client';
import { Info } from 'lucide-react';

interface TermosCheckboxProps {
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}

export function TermosCheckbox({ checked, error, onChange }: TermosCheckboxProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 w-4 h-4 text-brand-main border-gray-300 rounded focus:ring-brand-main"
        />
        
        <div className="flex-1">
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            Li e aceito os{' '}
            <button 
              type="button"
              className="text-brand-main hover:text-brand-main/80 font-medium"
              onClick={(e) => {
                e.preventDefault();
                // Abrir modal de termos
              }}
            >
              termos e condições
            </button>
            {' '}da inscrição, incluindo a política de cancelamento e reembolso.
            <span className="text-red-500 ml-1">*</span>
          </span>
        </div>
      </label>
      
      {error && (
        <div className="flex items-center gap-1 text-xs text-red-500 ml-7">
          <Info className="w-3 h-3" />
          <span>{error}</span>
        </div>
      )}
      
      <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-500">
        <p className="flex items-start gap-2">
          <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <span>
            Ao se inscrever, você concorda com o processamento dos seus dados pessoais 
            conforme nossa política de privacidade.
          </span>
        </p>
      </div>
    </div>
  );
}