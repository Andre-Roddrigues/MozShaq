
import { routes } from "../config/routes";

export async function loginRequest(email: string, password: string) {
  const res = await fetch(routes.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Erro ao fazer login");
  }

  return res.json();
}
export async function registerRequest(data: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const res = await fetch(routes.registerStudent, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json(); // 👈 importante

  if (!res.ok) {
    throw new Error(responseData.message || responseData.error || "Erro ao registrar");
  }

  return responseData;
}
export async function getMe(token: string) {
  const res = await fetch(routes.authMe, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar usuário");
  }

  return res.json();
}