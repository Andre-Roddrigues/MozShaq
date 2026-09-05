// components/SherqAcademy/Cursos/CursoDetalhesClient.tsx
'use client';
import { useState, useEffect } from 'react';
import { 
  Clock, Users, Star, Calendar, User, BookOpen, Target, CheckCircle, 
  ArrowLeft, Share2, Bookmark, MapPin, Award, Tag, GraduationCap,
  CreditCard, FileText, Lock, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { InscricaoModal } from './InscricaoModal';
import { ConfirmacaoModal } from './ConfirmacaoModal';
import { TabsNavigacao } from './TabsNavigacao';
import { EnrollButton } from './EnrollButton';
import { PayButton } from './PayButton';
import type { Course, CursoFormatado } from '../../../types/courseTypes';

interface CursoDetalhesClientProps {
  cursoDetalhes: Course;
  cursoId: string;
}

// Função auxiliar para formatar preço
const formatPrice = (price: number) => {
  if (price === 0) return 'Grátis';
  return `${price.toLocaleString('pt-MZ')} MZN`;
};

// Função auxiliar para obter o texto do nível
const getNivelText = (level: string) => {
  switch (level.toUpperCase()) {
    case 'INICIANTE': return 'Iniciante';
    case 'INTERMEDIÁRIO': return 'Intermediário';
    case 'AVANÇADO': return 'Avançado';
    default: return level;
  }
};

// Função auxiliar para obter a cor do nível
const getNivelColor = (level: string) => {
  switch (level.toUpperCase()) {
    case 'INICIANTE': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'INTERMEDIÁRIO': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    case 'AVANÇADO': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
  }
};

export function CursoDetalhesClient({ cursoDetalhes, cursoId }: CursoDetalhesClientProps) {
  const [showInscricaoModal, setShowInscricaoModal] = useState(false);
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checkingEnrollment, setCheckingEnrollment] = useState(true);
  const [enrollmentStatus, setEnrollmentStatus] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [hasEnrollmentRecord, setHasEnrollmentRecord] = useState(false);

  // Verificar se o usuário já está inscrito
  useEffect(() => {
    const checkEnrollmentStatus = async () => {
      try {
        setCheckingEnrollment(true);
        const response = await fetch('/api/students/enrollments');
        const data = await response.json();
        
        console.log('Enrollments response:', data);
        
        if (data.success && data.enrollments) {
          // Extrair o array de inscrições da estrutura aninhada
          let enrollmentsArray: any[] = [];
          
          if (Array.isArray(data.enrollments)) {
            enrollmentsArray = data.enrollments;
          } else if (data.enrollments.data && Array.isArray(data.enrollments.data)) {
            enrollmentsArray = data.enrollments.data;
          } else if (data.data && Array.isArray(data.data)) {
            enrollmentsArray = data.data;
          } else if (data.enrollments.enrollments && Array.isArray(data.enrollments.enrollments)) {
            enrollmentsArray = data.enrollments.enrollments;
          }
          
          // Verifica se o curso atual está na lista de inscrições
          const enrollment = enrollmentsArray.find(
            (e: any) => e.courseId === cursoId || e.course?.id === cursoId
          );
          
          const enrolled = !!enrollment;
          setIsEnrolled(enrolled);
          setHasEnrollmentRecord(enrolled);
          
          // Se estiver inscrito, pega o status
          if (enrolled && enrollment) {
            setEnrollmentStatus(enrollment.status);
            setPaymentStatus(enrollment.paymentStatus);
          }
        }
      } catch (error) {
        console.error('Erro ao verificar inscrição:', error);
      } finally {
        setCheckingEnrollment(false);
      }
    };

    checkEnrollmentStatus();
  }, [cursoId]);

  // Verificar se o curso está salvo nos favoritos
  useEffect(() => {
    const bookmarked = localStorage.getItem(`bookmarked_${cursoId}`);
    if (bookmarked === 'true') {
      setIsBookmarked(true);
    }
  }, [cursoId]);

  const handleBookmark = () => {
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    if (newState) {
      localStorage.setItem(`bookmarked_${cursoId}`, 'true');
    } else {
      localStorage.removeItem(`bookmarked_${cursoId}`);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: cursoDetalhes.titulo,
        text: cursoDetalhes.descricao,
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const handleEnrollSuccess = () => {
    setIsEnrolled(true);
    setHasEnrollmentRecord(true);
    setEnrollmentStatus('PENDING');
    setPaymentStatus('PENDING');
    setShowConfirmacaoModal(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus('PENDING');
    setShowConfirmacaoModal(true);
  };

  // Formatar dados para os componentes filhos
  const cursoFormatado: CursoFormatado = {
    id: cursoDetalhes.id,
    titulo: cursoDetalhes.titulo,
    descricao: cursoDetalhes.descricao,
    descricaoLonga: cursoDetalhes.descricaoLonga,
    duracao: cursoDetalhes.duration,
    vagas: cursoDetalhes.vagasTotais,
    vagasTotais: cursoDetalhes.vagasTotais,
    vagasDisponiveis: cursoDetalhes.vagasDisponiveis,
    nivel: getNivelText(cursoDetalhes.level) as 'Iniciante' | 'Intermediário' | 'Avançado',
    preco: cursoDetalhes.preco,
    precoPromocional: cursoDetalhes.precoPromocional,
    rating: cursoDetalhes.avaliacao,
    totalAvaliacoes: cursoDetalhes.totalAvaliacoes,
    imagem: cursoDetalhes.thumbnail,
    categoria: cursoDetalhes.categoria,
    dataInicio: cursoDetalhes.createdAt ? new Date(cursoDetalhes.createdAt).toLocaleDateString('pt-MZ') : 'A definir',
    dataFim: 'A definir',
    certificado: true,
    formador: cursoDetalhes.formadores && cursoDetalhes.formadores.length > 0 ? {
      nome: cursoDetalhes.formadores[0].name,
      foto: cursoDetalhes.formadores[0].photo,
      especializacao: cursoDetalhes.formadores[0].specialization,
      experiencia: cursoDetalhes.formadores[0].experience,
      bio: cursoDetalhes.instructors[0]?.instructor.bio || 'Instrutor experiente na área',
      formacao: cursoDetalhes.instructors[0]?.instructor.education || 'Formação especializada'
    } : null,
    objetivo: cursoDetalhes.objectives?.join(' ') || cursoDetalhes.objective || '',
    competencias: cursoDetalhes.skills,
    modulos: cursoDetalhes.modulos.map(modulo => ({
      titulo: modulo.title,
      duracao: modulo.duration,
      temas: modulo.topics
    })),
    metodologia: 'Aulas teóricas e práticas com projetos reais, utilizando metodologias ativas de aprendizagem.',
    publicoAlvo: cursoDetalhes.targetAudience?.join(', ') || '',
    requisitos: cursoDetalhes.requirements?.join(', ') || '',
    incluido: [
      'Material didático completo',
      'Certificado de conclusão',
      'Suporte aos alunos',
      'Acesso à plataforma por 12 meses'
    ]
  };

  // Preço atual (promocional ou normal)
  const precoAtual = cursoDetalhes.precoPromocional || cursoDetalhes.preco;
  const precoOriginal = cursoDetalhes.preco;
  const temDesconto = cursoDetalhes.temDesconto && cursoDetalhes.precoPromocional;
  const isFreeCourse = precoAtual === 0;

  // Lógica para mostrar os botões:
  // - Botão de pagamento: SEMPRE aparece se o curso for pago (precoAtual > 0)
  // - Botão de inscrição: só aparece se NÃO estiver inscrito (e curso for gratuito OU pago)
  const showPayButton = !isFreeCourse; // SEMPRE aparece para cursos pagos
  const showEnrollButton = !hasEnrollmentRecord; // Só aparece se não tiver inscrição

  return (
    <>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/cursos" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar aos Cursos</span>
            </Link>
            <div className="flex items-center gap-4">
              {temDesconto && (
                <div className="flex items-center gap-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm font-medium">-{cursoDetalhes.percentagemDesconto}%</span>
                </div>
              )}
              <button 
                onClick={handleBookmark}
                className={`p-2 transition-colors ${isBookmarked ? 'text-brand-main' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna da Esquerda - Conteúdo */}
          <div className="lg:col-span-2">
            
            {/* Banner do Curso */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
              <div className="relative">
                <img 
                  src={cursoDetalhes.thumbnail || '/images/placeholder-course.jpg'} 
                  alt={cursoDetalhes.titulo}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-course.jpg';
                  }}
                />
                {temDesconto && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg">
                    <span className="font-bold">-{cursoDetalhes.percentagemDesconto}%</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                    {cursoDetalhes.categoria}
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${getNivelColor(cursoDetalhes.level)}`}>
                    {getNivelText(cursoDetalhes.level)}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-sm rounded-full">
                    {cursoDetalhes.type}
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Com Certificado
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {cursoDetalhes.titulo}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{cursoDetalhes.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{cursoDetalhes.locationDefault}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{cursoDetalhes.studentsCount} alunos matriculados</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{cursoDetalhes.avaliacao.toFixed(1)} ({cursoDetalhes.totalAvaliacoes} avaliações)</span>
                  </div> */}
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cursoDetalhes.descricaoLonga}
                </p>
              </div>
            </div>

            {/* Tabs de Navegação */}
            <TabsNavigacao cursoDetalhes={cursoFormatado} />
          </div>

          {/* Coluna da Direita - Sidebar de Inscrição */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4">
                  {temDesconto ? (
                    <>
                      <span className="text-3xl font-bold text-brand-main">
                        {formatPrice(precoAtual)}
                      </span>
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {formatPrice(precoOriginal)}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-brand-main">
                      {formatPrice(precoAtual)}
                    </span>
                  )}
                  {temDesconto && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Economize {formatPrice(precoOriginal - precoAtual)}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex justify-between">
                    <span>Vagas disponíveis:</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">{cursoDetalhes.vagasDisponiveis} vagas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duração:</span>
                    <span className="font-medium">{cursoDetalhes.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Certificado:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Incluído</span>
                  </div>
                </div>

                {/* Status de Inscrição */}
                {hasEnrollmentRecord && enrollmentStatus === 'ACTIVE' && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <p className="text-sm font-medium text-green-800 dark:text-green-400">
                        Você está inscrito e tem acesso ao curso!
                      </p>
                    </div>
                  </div>
                )}

                {hasEnrollmentRecord && paymentStatus === 'PENDING' && (
                  <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400">
                          Pagamento Pendente
                        </p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1">
                          Envie o comprovante para liberar o acesso.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {hasEnrollmentRecord && paymentStatus === 'REJECTED' && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="text-sm font-medium text-red-800 dark:text-red-400">
                          Pagamento Rejeitado
                        </p>
                        <p className="text-xs text-red-600 dark:text-red-500 mt-1">
                          Seu comprovante foi rejeitado. Reenvie um comprovante válido.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botões de Ação */}
                {checkingEnrollment ? (
                  <div className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-main"></div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Botão de Pagamento - SEMPRE aparece para cursos pagos */}
                    {showPayButton && (
                      <PayButton
                        courseId={cursoId}
                        courseTitle={cursoDetalhes.titulo}
                        amount={precoAtual}
                        onSuccess={handlePaymentSuccess}
                        fullWidth
                      />
                    )}

                    {/* Botão de Inscrição - Só aparece se NÃO estiver inscrito */}
                    {showEnrollButton && (
                      <>
                        {isFreeCourse ? (
                          <EnrollButton
                            courseId={cursoId}
                            courseTitle={cursoDetalhes.titulo}
                            onSuccess={handleEnrollSuccess}
                            fullWidth
                          />
                        ) : (
                          <EnrollButton
                            courseId={cursoId}
                            courseTitle={cursoDetalhes.titulo}
                            onSuccess={handleEnrollSuccess}
                            fullWidth
                            variant="outline"
                          />
                        )}
                      </>
                    )}

                    {/* Botão de Continuar para usuários com acesso ativo */}
                    {hasEnrollmentRecord && enrollmentStatus === 'ACTIVE' && (
                      <Link
                        href={`/cursos/${cursoId}`}
                        className="block w-full text-center py-3 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition font-semibold"
                      >
                        Continuar Curso
                      </Link>
                    )}

                    {/* Mensagem de ajuda para cursos pagos sem inscrição */}
                    {showPayButton && !hasEnrollmentRecord && (
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        Para pagar, primeiro inscreva-se no curso clicando no botão acima.
                      </p>
                    )}

                    {/* Mensagem para inscrição realizada, aguardando pagamento */}
                    {hasEnrollmentRecord && paymentStatus === 'PENDING' && !isFreeCourse && (
                      <p className="text-xs text-center text-yellow-600 dark:text-yellow-400 mt-2">
                        Após o pagamento, seu acesso será liberado em até 24h.
                      </p>
                    )}

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                      Ao se inscrever, você concorda com nossos Termos de Serviço e Política de Privacidade.
                    </p>
                  </div>
                )}
              </div>

              {/* Benefícios */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">O que está incluído:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Acesso vitalício ao curso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Certificado de conclusão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Suporte do instrutor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Projetos práticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modais */}
      <InscricaoModal 
        isOpen={showInscricaoModal}
        onClose={() => setShowInscricaoModal(false)}
        courseId={cursoId}
        courseTitle={cursoDetalhes.titulo}
        onSuccess={handleEnrollSuccess}
      />

      <ConfirmacaoModal 
        isOpen={showConfirmacaoModal}
        onClose={() => setShowConfirmacaoModal(false)}
        courseTitle={cursoDetalhes.titulo}
      />
    </>
  );
}