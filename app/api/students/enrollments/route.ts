import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { routes } from "../../../../config/routes";

export async function POST(request: Request) {
  try {
    // Obter token do cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Não autenticado. Faça login para continuar." },
        { status: 401 }
      );
    }

    // Obter dados do corpo da requisição
    const body = await request.json();
    const { courseId, contact } = body;

    // Validações
    if (!courseId) {
      return NextResponse.json(
        { success: false, error: "ID do curso é obrigatório" },
        { status: 400 }
      );
    }

    if (!contact) {
      return NextResponse.json(
        { success: false, error: "Contacto é obrigatório" },
        { status: 400 }
      );
    }

    // Validação do formato do contacto (telefone ou email)
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[0-9]{9}$/.test(contact.replace(/\D/g, ''));
    
    if (!isEmail && !isPhone) {
      return NextResponse.json(
        { success: false, error: "Contacto deve ser um email válido ou telefone com 9 dígitos" },
        { status: 400 }
      );
    }

    // Limpar telefone se for o caso
    const cleanContact = isPhone ? contact.replace(/\D/g, '') : contact;

    // URL do backend
    const backendUrl = routes.enroll;
    const enrollUrl = `${backendUrl}`;

    // Fazer requisição para o backend
    const response = await fetch(enrollUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        courseId,
        contact: cleanContact,
      }),
    });

    const data = await response.json();

    // Verificar se a requisição foi bem-sucedida
    if (!response.ok) {
      // Tratar diferentes códigos de erro
      if (response.status === 400) {
        return NextResponse.json(
          { success: false, error: data.error || "Dados inválidos para inscrição" },
          { status: 400 }
        );
      }
      
      if (response.status === 404) {
        return NextResponse.json(
          { success: false, error: "Curso não encontrado" },
          { status: 404 }
        );
      }
      
      if (response.status === 409) {
        return NextResponse.json(
          { success: false, error: "Você já está inscrito neste curso" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { success: false, error: data.error || "Erro ao realizar inscrição" },
        { status: response.status }
      );
    }

    // Retornar sucesso
    return NextResponse.json({
      success: true,
      message: "Inscrição realizada com sucesso!",
      enrollment: data.enrollment || data,
    }, { status: 201 });

  } catch (error: any) {
    console.error("Erro na inscrição:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Erro interno do servidor. Tente novamente mais tarde." 
      },
      { status: 500 }
    );
  }
}

// Método GET para listar inscrições do usuário
export async function GET(request: Request) {
  try {
    // Obter token do cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Não autenticado" },
        { status: 401 }
      );
    }

    // URL do backend
    const backendUrl = routes.enroll;
    const enrollmentsUrl = `${backendUrl}`;

    // Buscar inscrições do usuário
    const response = await fetch(enrollmentsUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      cache: "force-cache",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.error || "Erro ao buscar inscrições" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      enrollments: data.enrollments || data,
    });

  } catch (error: any) {
    console.error("Erro ao buscar inscrições:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}