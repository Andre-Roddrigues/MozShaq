'use client';
import { CheckCircle2 } from 'lucide-react';
import { ProgressStepsProps } from '../../../types/curso.types';

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  const steps = [
    { id: 'dados', label: 'Dados Pessoais', number: 1 },
    { id: 'pagamento', label: 'Pagamento', number: 2 }
  ];

  const getStepStatus = (stepId: string) => {
    if (stepId === 'dados') {
      return currentStep === 'dados' ? 'current' : 'completed';
    }
    if (stepId === 'pagamento') {
      return currentStep === 'pagamento' ? 'current' : 'pending';
    }
    return 'pending';
  };

  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const status = getStepStatus(step.id);
        
        return (
          <>
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  transition-all duration-300
                  ${status === 'completed' ? 'bg-green-500 text-white' : ''}
                  ${status === 'current' ? 'bg-brand-main text-white ring-4 ring-brand-main/20' : ''}
                  ${status === 'pending' ? 'bg-gray-200 text-gray-600' : ''}
                `}>
                  {status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                
                <div className="ml-3">
                  <p className={`
                    text-sm font-medium
                    ${status === 'current' ? 'text-brand-main' : ''}
                    ${status === 'completed' ? 'text-gray-900' : ''}
                    ${status === 'pending' ? 'text-gray-400' : ''}
                  `}>
                    {step.label}
                  </p>
                </div>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className={`
                  h-1 rounded-full
                  ${status === 'completed' ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}