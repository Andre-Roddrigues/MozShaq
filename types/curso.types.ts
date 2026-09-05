export interface ContaBancaria {
  banco: string;
  nib: string;
  titular: string;
}

export interface InscricaoFormData {
  nome: string;
  email: string;
  telefone: string;
  nui: string;
  metodoPagamento: 'transferencia' | 'deposito' | 'paytech';
  comprovativo: File | null;
  termosAceitos: boolean;
}

export interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  duracao: string;
  vagas: number;
  vagasDisponiveis: number;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  preco: number;
  precoPromocional?: number;
  rating: number;
  totalAvaliacoes: number;
  imagem: string;
  categoria: string;
  dataInicio: string;
  dataFim: string;
  certificado: boolean;
  formador: {
    nome: string;
    foto: string;
    especializacao: string;
    experiencia: string;
    bio: string;
    formacao: string;
  };
  objetivo: string;
  competencias: string[];
  modulos: Array<{
    titulo: string;
    duracao: string;
    temas: string[];
  }>;
  metodologia: string;
  publicoAlvo: string;
  requisitos: string;
  incluido: string[];
}

export interface InscricaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  curso: Curso;
  onSuccess: () => void;
}

export interface ConfirmacaoModalProps {
  isOpen: boolean;
  onClose: () => void;
  curso: Curso;
}

export interface DadosPessoaisFormProps {
  formData: InscricaoFormData;
  errors: Partial<Record<keyof InscricaoFormData, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface UploadComprovativoProps {
  file: File | null;
  error?: string;
  onFileChange: (file: File | null) => void;
}

export interface ResumoPagamentoProps {
  preco: number;
  precoPromocional?: number;
}

export interface ProgressStepsProps {
  currentStep: 'dados' | 'pagamento' | 'confirmacao';
}