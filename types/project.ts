// types/project.ts

export interface ProjectResult {
  id: string;
  name: string;
  description: string | null;
  projectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectService {
  id: string;
  name: string;
  description: string | null;
  projectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectPartner {
  id: string;
  name: string;
  area: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectPhoto {
  id: string;
  url: string;
  description: string | null;
  projectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  client: string;
  sector: string;
  objective: string;
  observation: string | null;
  coverImage: string | null;
  category: string;
  status: string; // 'done' | 'inProgress' | 'process'
  createdAt: string;
  updatedAt: string;
  results: ProjectResult[];
  servicesProvided: ProjectService[];
  partners: ProjectPartner[];
  photos: ProjectPhoto[];
  // Campos mapeados para compatibilidade com o frontend
  executionPeriod: {
    start: string;
    end: string;
  };
  hasPhotos: boolean;
  mainActivities: string[];
}

export interface ProjectsResponse {
  success: boolean;
  projects: Project[];
  total?: number;
  page?: number;
  limit?: number;
  error?: string;
}

export interface ProjectResponse {
  success: boolean;
  project: Project;
  error?: string;
}

export interface ProjectFilters {
  search?: string;
  client?: string;
  sector?: string;
  category?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export interface ProjectStats {
  total: number;
  byStatus: Record<string, number>;
  bySector: Record<string, number>;
  byYear: Record<string, number>;
}

// Mapeamento de status para exibição
export const STATUS_MAP: Record<string, { label: string; color: string }> = {
  done: { label: 'Concluído', color: 'green' },
  inProgress: { label: 'Em Andamento', color: 'blue' },
  process: { label: 'Em Processo', color: 'amber' }
};

export const STATUS_ICON_MAP: Record<string, any> = {
  done: 'CheckCircle',
  inProgress: 'Clock',
  process: 'Loader2'
};