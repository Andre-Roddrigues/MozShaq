import { NextResponse } from "next/server";
import { registerRequest } from "../../../../services/authService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await registerRequest(body);

    const token = data?.accessToken; 
    const student = data?.student;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token não recebido" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: student, 
    });

    // 🍪 cookie seguro
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 dia
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro ao registrar usuário" },
      { status: 400 }
    );
  }
}