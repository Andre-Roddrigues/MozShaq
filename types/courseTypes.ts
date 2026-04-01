// types/courseTypes.ts

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Instructor {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  yearsExperience: number;
  bio: string;
  education: string;
  phone: string;
  professionalEmail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CourseInstructor {
  courseId: string;
  instructorId: string;
  assignedAt: string;
  instructor: Instructor;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  order: number;
  status: string;
  duration: string;
  topics: string[];
  createdAt: string;
  updatedAt: string;
  lessons?: any[];
}

export interface Class {
  // Definir conforme necessário
}

export interface Formador {
  name: string;
  photo: string;
  specialization: string;
  experience: string;
}

export interface ModuloFormatado {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  order: number;
  lessons: any[];
}

export interface Course {
  // Campos originais da API
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  categoryId: string;
  level: string;
  type: string;
  status: string;
  objectives: string[];
  targetAudience: string[];
  requirements: string[];
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  locationDefault: string;
  price: number;
  discountPrice: number;
  longDescription: string;
  objective: string | null;
  skills: string[];
  createdAt: string;
  updatedAt: string;
  
  // Relacionamentos
  category: Category;
  instructors: CourseInstructor[];
  classes: Class[];
  modules: Module[];
  
  // Campos adicionais mapeados da API (já vêm no response)
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  preco: number;
  precoPromocional: number;
  precoFinal: number;
  temDesconto: boolean;
  percentagemDesconto: number;
  vagasTotais: number;
  vagasDisponiveis: number;
  estaCheio: boolean;
  avaliacao: number;
  totalAvaliacoes: number;
  isPublished: boolean;
  isActive: boolean;
  isClosed: boolean;
  categoria: string;
  formadores: Formador[];
  modulos: ModuloFormatado[];
}

export interface CoursesResponse {
  success: boolean;
  total: number;
  page: number;
  limit: number;
  data: Course[];
}

export interface CourseResponse {
  success: boolean;
  course: Course; 
}

export interface CoursesQueryParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  level?: string;
  type?: string;
  search?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Tipo auxiliar para o formato usado nos componentes filhos
export interface CursoFormatado {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  duracao: string;
  vagas: number;
  vagasTotais: number;
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
  } | null;
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