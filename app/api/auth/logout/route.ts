// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logout realizado com sucesso" });
  
  response.cookies.set("token", "", {
    path: "/",
    maxAge: 0,
  });
  
  return response;
}