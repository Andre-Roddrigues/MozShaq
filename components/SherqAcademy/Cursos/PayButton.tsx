// components/SherqAcademy/Cursos/PayButton.tsx
'use client';

import { useState } from 'react';
import { CreditCard, Loader2, Lock } from 'lucide-react';
import { PaymentModal } from './PaymentModal';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/navigation';

interface PayButtonProps {
  courseId: string;
  courseTitle: string;
  amount: number;
  onSuccess?: () => void;
  fullWidth?: boolean;
}

export function PayButton({ 
  courseId, 
  courseTitle, 
  amount, 
  onSuccess, 
  fullWidth = false 
}: PayButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('pt-MZ')} MZN`;
  };

  const handlePayClick = () => {
    if (!user) {
      router.push(`/login?redirect=/cursos/${courseId}`);
      return;
    }
    setShowPaymentModal(true);
  };

  if (amount === 0) {
    return null;
  }

  return (
    <>
      <button
        onClick={handlePayClick}
        className={`
          ${fullWidth ? 'w-full' : ''}
          flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200
          bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white
        `}
      >
        <CreditCard className="w-5 h-5" />
        <span>Pagar {formatPrice(amount)}</span>
      </button>

      <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
        <Lock className="w-3 h-3" />
        <span>Pagamento 100% seguro</span>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        courseId={courseId}
        courseTitle={courseTitle}
        amount={amount}
        onSuccess={onSuccess}
      />
    </>
  );
}