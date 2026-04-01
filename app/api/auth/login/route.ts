import { NextResponse } from "next/server";
import { loginRequest } from "../../../../services/authService";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const data = await loginRequest(email, password);

    const token = data?.accessToken; 
    const student = data?.student;

    if (!token) {
      return NextResponse.json(
        { error: "Token não recebido" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: student, 
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, 
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  }
}