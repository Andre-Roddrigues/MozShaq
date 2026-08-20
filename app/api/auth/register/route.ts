import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validação básica dos campos
    const { name, email, password, phone } = body;
    
    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }
    
    // Validação de senha (mínimo 6 caracteres)
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'A senha deve ter no mínimo 6 caracteres' },
        { status: 400 }
      );
    }
    
    // Validação de telefone - Aceita múltiplos formatos
    const phoneRegex = /^(\+258|258)?[0-9]{9}$|^[0-9]{9}$/;
    // Remove caracteres especiais para validação
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    
    // Verifica se o telefone tem 9 dígitos (após limpeza)
    if (!phoneRegex.test(cleanPhone) || cleanPhone.length !== 9) {
      return NextResponse.json(
        { error: 'Telefone inválido. Use 9 dígitos (ex: 841234567 ou +258841234567)' },
        { status: 400 }
      );
    }
    
    // Preparar dados para enviar ao backend
    const backendUrl = 'https://www.backend.mozshaq.co.mz/api/student/auth/register';
    
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone: cleanPhone, // Envia apenas os números limpos
      }),
    });
    
    const data = await response.json();
    
    // Se o backend retornar erro, repassar o erro
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Erro ao registrar usuário' },
        { status: response.status }
      );
    }
    
    // Retornar sucesso com os dados do usuário
    return NextResponse.json(
      { 
        success: true,
        message: 'Usuário registrado com sucesso',
        user: data.user || data 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor', success: false },
      { status: 500 }
    );
  }
}

// Opcional: Método OPTIONS para CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}