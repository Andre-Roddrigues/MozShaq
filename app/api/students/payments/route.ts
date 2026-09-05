// app/api/student/payments/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { routes } from "../../../../config/routes";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Não autenticado" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const courseId = formData.get("courseId");
    const paymentProof = formData.get("paymentProof") as File;

    if (!courseId) {
      return NextResponse.json(
        { success: false, error: "ID do curso é obrigatório" },
        { status: 400 }
      );
    }

    if (!paymentProof) {
      return NextResponse.json(
        { success: false, error: "Comprovante de pagamento é obrigatório" },
        { status: 400 }
      );
    }

    // Validar tipo de arquivo
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(paymentProof.type)) {
      return NextResponse.json(
        { success: false, error: "Formato inválido. Use JPEG, PNG ou PDF" },
        { status: 400 }
      );
    }

    // Validar tamanho (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (paymentProof.size > maxSize) {
      return NextResponse.json(
        { success: false, error: "Arquivo muito grande. Máximo 5MB" },
        { status: 400 }
      );
    }

    // Converter File para Buffer
    const bytes = await paymentProof.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Criar novo FormData para enviar ao backend
    const backendFormData = new FormData();
    backendFormData.append("courseId", courseId as string);
    backendFormData.append("paymentProof", new Blob([buffer], { type: paymentProof.type }), paymentProof.name);

    const backendUrl = routes.backend_url;
    const response = await fetch(`${backendUrl}/student/payments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: backendFormData,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.error || "Erro ao processar pagamento" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Comprovante enviado com sucesso! Aguardando aprovação.",
      payment: data.payment || data,
    });

  } catch (error: any) {
    console.error("Erro no pagamento:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// GET - Buscar pagamentos do usuário
export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Não autenticado" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");

    let url = `${routes.backend_url}/student/payments`;
    if (courseId) {
      url += `?courseId=${courseId}`;
    }

    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data.error || "Erro ao buscar pagamentos" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      payments: data.payments || data,
    });

  } catch (error: any) {
    console.error("Erro ao buscar pagamentos:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}