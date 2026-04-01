"use client";

import { useAuth } from "../../../hooks/useAuth";


export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;

  if (!user) return <p>Não autenticado</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Bem-vindo, {user.name}
      </h1>

      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>

      <div className="mt-4">
        <p>Total Cursos: {user.totalCursos}</p>
        <p>Cursos Ativos: {user.cursosActivos}</p>
        <p>Total Investido: {user.totalInvestido} MZN</p>
      </div>
    </div>
  );
}