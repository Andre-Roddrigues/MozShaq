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
    const error = await res.json();
    throw new Error(error.error || "Erro ao fazer login");
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

  const responseData = await res.json();

  if (!res.ok) {
    throw new Error(responseData.message || responseData.error || "Erro ao registrar");
  }

  if (responseData.success && responseData.user) {
    return {
      success: true,
      student: responseData.user.student || responseData.user,
      accessToken: responseData.user.accessToken || null
    };
  }

  return responseData;
}

export async function getMe(token: string) {
  const res = await fetch(routes.authMe, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar usuário");
  }

  const data = await res.json();
  
  // Ajusta a estrutura para ser consistente
  if (data.success && data.user) {
    return data.user.student || data.user;
  }
  
  return data;
}