import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getMe } from "../../../../services/authService";

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

    return NextResponse.json({
      success: true,
      user: data,
    });
  } catch (error: any) {
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