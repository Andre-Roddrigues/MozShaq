// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getMe } from "../../../../services/authService";
import { routes } from "../../../../config/routes";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Não autenticado" },
        { status: 401 }
      );
    }

    const data = await getMe(token);
    
    // Ajusta a estrutura de resposta para ser consistente
    let userData = data;
    
    // Se a resposta tiver aninhamento, extrai os dados corretos
    if (data.success && data.user) {
      userData = data.user.student || data.user;
    } else if (data.student) {
      userData = data.student;
    }
    
    // Busca os enrollments do usuário se disponível
    let enrollments = [];
    try {
      const enrollmentsRes = await fetch(routes.enroll, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (enrollmentsRes.ok) {
        const enrollmentsData = await enrollmentsRes.json();
        enrollments = enrollmentsData.enrollments || [];
      }
    } catch (err) {
      console.error('Erro ao buscar enrollments:', err);
    }
    
    return NextResponse.json({
      success: true,
      user: {
        ...userData,
        enrollments
      },
    });
  } catch (error: any) {
    console.error('Erro no /api/auth/me:', error);
    
    const response = NextResponse.json(
      { success: false, error: "Sessão inválida" },
      { status: 401 }
    );

    response.cookies.set("token", "", {
      path: "/",
      maxAge: 0,
    });

    return response;
  }
}