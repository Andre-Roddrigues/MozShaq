// hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  status: string;
  joinDate: string;
  enrollments?: any[];
  totalCursos?: number;
  cursosActivos?: number;
  totalInvestido?: number;
}

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/auth/me');
      const data = await response.json();
      
      if (data.success && data.user) {
        // Calcula estatísticas baseadas nos enrollments
        const enrollments = data.user.enrollments || [];
        const totalCursos = enrollments.length;
        const cursosActivos = enrollments.filter((e: any) => 
          e.status === 'ACTIVE' || e.status === 'IN_PROGRESS'
        ).length;
        
        // Exemplo de cálculo de investimento total (ajuste conforme sua necessidade)
        const totalInvestido = enrollments.reduce((total: number, e: any) => 
          total + (e.price || 0), 0
        );
        
        setUser({
          ...data.user,
          totalCursos,
          cursosActivos,
          totalInvestido
        });
      } else {
        setUser(null);
        if (data.error === 'Não autenticado') {
          // Não redireciona automaticamente para não causar loop
          console.log('Usuário não autenticado');
        }
      }
    } catch (err) {
      console.error('Erro ao buscar usuário:', err);
      setError('Erro ao carregar dados do usuário');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
    logout
  };
}