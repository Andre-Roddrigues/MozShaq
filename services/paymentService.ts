// services/paymentService.ts
export interface PaymentData {
  courseId: string;
  paymentProof: File;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  payment?: any;
}

export async function submitPayment(data: PaymentData): Promise<PaymentResponse> {
  const formData = new FormData();
  formData.append('courseId', data.courseId);
  formData.append('paymentProof', data.paymentProof);

  const response = await fetch('/api/student/payments', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Erro ao enviar comprovante');
  }

  return result;
}

export async function getUserPayments(courseId?: string) {
  const url = courseId ? `/api/student/payments?courseId=${courseId}` : '/api/student/payments';
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Erro ao buscar pagamentos');
  }

  return result;
}