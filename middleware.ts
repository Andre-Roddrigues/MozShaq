import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  // Rotas públicas (acessíveis sem login)
  const publicRoutes = [
    "/",
    "/duvidas",
    "/services",
    "/recuperar-senha",
    "/sherq-academy/inicio",
    "/formulario/parceiro",
    "/nossos-termos",
    "/nova-senha",
    "/nova-senha/[otp]",
  ];

  // Rotas especiais que não podem ser acessadas após login
  const authRoutes = ["/login", "/registro", "/nova-senha", "/nova-senha/[otp]"];

  // Ignorar assets e APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Se o usuário tentar acessar /nova-senha → sempre permitir
  if (pathname.startsWith("/nova-senha")) {
    return NextResponse.next();
  }

  // Se o usuário estiver logado e tentar ir para login/registro → redirecionar para perfil
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/user/perfil", req.url));
  }

  // Se rota pública ou cursos → liberar
  if (
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/cursos") || // ✅ libera /cursos e /cursos/[id]
    authRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }

  // Se não houver token → redireciona para login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Senão, libera
  return NextResponse.next();
}

// Todas as rotas de páginas
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
