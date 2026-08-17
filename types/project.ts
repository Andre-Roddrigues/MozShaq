// types/project.ts
export interface Project {
  id: string;
  client: string;
  name: string;
  location: string;
  executionPeriod: {
    start: string;
    end: string;
  };
  sector: string;
  objective: string;
  servicesProvided: string[];
  mainActivities: string[];
  results: string[];
  description: string;
  partners: string[];
  hasPhotos: boolean;
  photos?: string[]; // URLs das fotos
  coverImage?: string; // URL da foto de capa
  observations?: string;
  status: 'concluido' | 'em_andamento' | 'planejado';
  category: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFilters {
  search?: string;
  client?: string;
  sector?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  year?: string;
  location?: string;
  hasPhotos?: boolean;
}

export interface ProjectStats {
  total: number;
  byStatus: Record<string, number>;
  bySector: Record<string, number>;
  byYear: Record<string, number>;
}