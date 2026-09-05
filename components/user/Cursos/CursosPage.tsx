// components/user/Cursos/CursosPage.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Clock, CheckCircle, XCircle, AlertCircle, 
  CreditCard, FileText, Calendar, Loader2, Search, 
  Eye, PlayCircle, DollarSign, RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../../hooks/useAuth';
import { PaymentModal } from '../../SherqAcademy/Cursos/PaymentModal';

interface Enrollment {
  id: string;
  courseId: string;
  status: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'PAID' | 'APPROVED' | 'REJECTED';
  enrollmentDate: string;
  paymentProof?: string;
  progress?: number;
  course?: {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    level: string;
    price: number;
  };
}

export function UserCursosPage() {
  const { user, loading: authLoading } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'pending' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<{ id: string; title: string; price: number } | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    }
  }, [user]);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/students/enrollments');
      const data = await response.json();
      
      console.log('API Response:', data); // Para debug
      
      if (data.success) {
        // Verifica se data.enrollments é um array
        let enrollmentsData = data.enrollments || data.data || [];
        
        // Se for objeto, tenta extrair o array
        if (!Array.isArray(enrollmentsData)) {
          if (enrollmentsData.enrollments && Array.isArray(enrollmentsData.enrollments)) {
            enrollmentsData = enrollmentsData.enrollments;
          } else if (enrollmentsData.data && Array.isArray(enrollmentsData.data)) {
            enrollmentsData = enrollmentsData.data;
          } else {
            enrollmentsData = [];
          }
        }
    
        setEnrollments(enrollmentsData);
      } else {
        console.error('Erro na resposta:', data.error);
        setEnrollments([]);
      }
    } catch (error) {
      console.error('Erro ao buscar inscrições:', error);
      setEnrollments([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusConfig = (status: string, paymentStatus: string) => {
    if (status === 'ACTIVE') {
      return {
        label: 'Ativo',
        color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        icon: CheckCircle,
        message: 'Acesso liberado',
        action: 'Decorrendo'
      };
    }
    if (status === 'COMPLETED') {
      return {
        label: 'Concluído',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        icon: CheckCircle,
        message: 'Curso finalizado',
        action: 'Ver Certificado'
      };
    }
    if (paymentStatus === 'APPROVED') {
      return {
        label: 'Pagamento Aprovado',
        color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        icon: CheckCircle,
        message: 'Aguardando liberação do acesso',
        action: 'Aguardando'
      };
    }
    if (paymentStatus === 'PENDING') {
      return {
        label: 'Pagamento Pendente',
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: AlertCircle,
        message: 'Realize o pagamento para liberar o acesso',
        action: 'Pagar Agora'
      };
    }
    if (paymentStatus === 'REJECTED') {
      return {
        label: 'Pagamento Rejeitado',
        color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        icon: XCircle,
        message: 'Comprovante rejeitado. Reenvie o comprovante',
        action: 'Reenviar Comprovante'
      };
    }
    return {
      label: 'Pendente',
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
      icon: Clock,
      message: 'Processando inscrição',
      action: 'Aguardando'
    };
  };

  const handlePaymentClick = (courseId: string, courseTitle: string, price: number) => {
    setSelectedCourse({ id: courseId, title: courseTitle, price });
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    fetchEnrollments(); // Recarrega os dados
  };

  // Filtra os enrollments garantindo que é um array
  const filteredEnrollments = Array.isArray(enrollments) ? enrollments.filter(enrollment => {
    // Filtro por status
    if (filter === 'active') return enrollment.status === 'ACTIVE';
    if (filter === 'pending') return enrollment.paymentStatus === 'PENDING' || enrollment.paymentStatus === 'REJECTED';
    if (filter === 'completed') return enrollment.status === 'COMPLETED';
    return true;
  }).filter(enrollment => {
    // Filtro por busca
    if (!searchTerm) return true;
    const courseTitle = enrollment.course?.title || '';
    return courseTitle.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

  const stats = {
    total: Array.isArray(enrollments) ? enrollments.length : 0,
    active: Array.isArray(enrollments) ? enrollments.filter(e => e.status === 'ACTIVE').length : 0,
    pending: Array.isArray(enrollments) ? enrollments.filter(e => e.paymentStatus === 'PENDING' || e.paymentStatus === 'REJECTED').length : 0,
    completed: Array.isArray(enrollments) ? enrollments.filter(e => e.status === 'COMPLETED').length : 0,
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-brand-main mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Carregando seus cursos...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Acesso Restrito</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Faça login para ver seus cursos</p>
          <Link href="/login" className="inline-block px-6 py-2 bg-brand-main text-white rounded-lg">
            Fazer Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Meus Cursos
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gerencie seus cursos, acompanhe o progresso e veja os pagamentos
              </p>
            </div>
            <button
              onClick={fetchEnrollments}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total de Cursos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
              <BookOpen className="w-8 h-8 text-brand-main opacity-75" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cursos Ativos</p>
                <p className="text-2xl font-bold text-green-600">{stats.active}</p>
              </div>
              <PlayCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pagamentos Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Concluídos</p>
                <p className="text-2xl font-bold text-blue-600">{stats.completed}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-brand-main text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Todos ({stats.total})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'active'
                  ? 'bg-brand-main text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Ativos ({stats.active})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'pending'
                  ? 'bg-brand-main text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Pendentes ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'completed'
                  ? 'bg-brand-main text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Concluídos ({stats.completed})
            </button>
          </div>
          
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-main bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Courses Grid */}
        {filteredEnrollments.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {searchTerm ? 'Nenhum curso corresponde à sua busca' : 'Você ainda não está inscrito em nenhum curso'}
            </p>
            <Link href="/cursos" className="inline-block px-6 py-2 bg-brand-main text-white rounded-lg">
              Explorar Cursos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEnrollments.map((enrollment, index) => {
              const statusConfig = getStatusConfig(enrollment.status, enrollment.paymentStatus);
              const StatusIcon = statusConfig.icon;
              const coursePrice = enrollment.course?.price || 0;
              
              return (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={enrollment.course?.thumbnail || '/images/placeholder-course.jpg'}
                      alt={enrollment.course?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-lg text-xs font-medium ${statusConfig.color}`}>
                      <div className="flex items-center gap-1">
                        <StatusIcon className="w-3 h-3" />
                        <span>{statusConfig.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {enrollment.course?.title || 'Curso sem título'}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{enrollment.course?.duration || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(enrollment.enrollmentDate).toLocaleDateString('pt-MZ')}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {statusConfig.message}
                    </p>

                    {/* Progress Bar for Active Courses */}
                    {/* {enrollment.status === 'ACTIVE' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Progresso</span>
                          <span>{enrollment.progress || 0}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-brand-main rounded-full h-2 transition-all duration-500"
                            style={{ width: `${enrollment.progress || 0}%` }}
                          />
                        </div>
                      </div>
                    )} */}

                    {/* Action Button */}
                    {enrollment.status === 'ACTIVE' ? (
                      <Link
                        href={`/cursos/${enrollment.courseId}`}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition"
                      >
                        {/* <PlayCircle className="w-4 h-4" /> */}
                        {statusConfig.action}
                      </Link>
                    ) : enrollment.paymentStatus === 'PENDING' || enrollment.paymentStatus === 'REJECTED' ? (
                      <button
                        onClick={() => handlePaymentClick(enrollment.courseId, enrollment.course?.title || '', coursePrice)}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                      >
                        <CreditCard className="w-4 h-4" />
                        {statusConfig.action}
                      </button>
                    ) : enrollment.status === 'COMPLETED' ? (
                      <Link
                        href={`/certificados/${enrollment.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        <Eye className="w-4 h-4" />
                        {statusConfig.action}
                      </Link>
                    ) : (
                      <div className="text-center py-2 text-gray-500 text-sm flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        {statusConfig.action}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {selectedCourse && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedCourse(null);
          }}
          courseId={selectedCourse.id}
          courseTitle={selectedCourse.title}
          amount={selectedCourse.price}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}