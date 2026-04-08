"use client";

import { useAuth } from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, DollarSign, User, Mail, Phone, Calendar, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user, loading, error, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-main mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando seus dados...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Erro ao carregar</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-gray-900">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-yellow-500 text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Não autenticado</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Faça login para acessar esta página</p>
          <button
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Gerencie seus cursos e acompanhe seu progresso
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Sair
          </button>
        </motion.div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-brand-main to-brand-main/70 rounded-2xl p-6 mb-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-2">
            Bem-vindo(a), {user.name}!
          </h2>
          <p className="opacity-90">
            Continue sua jornada de aprendizado. Você está no caminho certo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações do Usuário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Perfil
                </h3>
                <div className="w-12 h-12 bg-brand-main/20 rounded-full flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User size={24} className="text-brand-main" />
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nome</p>
                    <p className="text-gray-900 dark:text-white font-medium">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Telefone</p>
                    <p className="text-gray-900 dark:text-white">{user.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Membro desde</p>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Status: {user.status === 'PENDING' ? 'Pendente' : user.status === 'ACTIVE' ? 'Ativo' : user.status}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Total Cursos */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen size={32} className="text-brand-main" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {user.totalCursos || 0}
                  </span>
                </div>
                <h4 className="text-gray-600 dark:text-gray-400 font-medium">Total de Cursos</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Cursos matriculados
                </p>
              </div>

              {/* Cursos Ativos */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap size={32} className="text-green-500" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {user.cursosActivos || 0}
                  </span>
                </div>
                <h4 className="text-gray-600 dark:text-gray-400 font-medium">Cursos em Andamento</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Cursos ativos
                </p>
              </div>

              {/* Total Investido */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign size={32} className="text-yellow-500" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {user.totalInvestido || 0}
                  </span>
                </div>
                <h4 className="text-gray-600 dark:text-gray-400 font-medium">Total Investido</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Em cursos
                </p>
              </div>
            </div>

            {/* Últimos Cursos */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Seus Cursos
              </h3>
              
              {user.enrollments && user.enrollments.length > 0 ? (
                <div className="space-y-4">
                  {user.enrollments.slice(0, 5).map((enrollment: any, index: number) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {enrollment.courseName || `Curso ${index + 1}`}
                      </h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Status: {enrollment.status || 'Matriculado'}
                        </span>
                        <button className="text-brand-main hover:text-brand-main/80 text-sm font-medium">
                          Continuar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen size={48} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Você ainda não está matriculado em nenhum curso.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90">
                    Explorar Cursos
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}