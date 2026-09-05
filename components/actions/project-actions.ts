// actions/project-actions.ts
'use client';

import { Project, ProjectFilters, ProjectsResponse, ProjectResponse, ProjectStats } from "../../types/project";



const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://www.backend.mozshaq.co.mz/api';

// Cache para evitar múltiplas requisições
let cachedProjects: Project[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 60000; // 1 minuto

export const projectActions = {
  /**
   * Buscar todos os projetos da API
   */
  fetchProjects: async (filters?: ProjectFilters): Promise<ProjectsResponse> => {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters) {
        if (filters.search) queryParams.append('search', filters.search);
        if (filters.client) queryParams.append('client', filters.client);
        if (filters.sector) queryParams.append('sector', filters.sector);
        if (filters.category) queryParams.append('category', filters.category);
        if (filters.status) queryParams.append('status', filters.status);
        if (filters.startDate) queryParams.append('startDate', filters.startDate);
        if (filters.endDate) queryParams.append('endDate', filters.endDate);
        if (filters.page) queryParams.append('page', String(filters.page));
        if (filters.limit) queryParams.append('limit', String(filters.limit));
      }

      const url = `${API_BASE_URL}/public/projects${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar projetos: ${response.status}`);
      }

      const data = await response.json();
      
      // Mapear dados para o formato esperado pelo frontend
      const projects = data.projects.map((p: any) => ({
        ...p,
        executionPeriod: {
          start: p.startDate ? p.startDate.split('T')[0] : '',
          end: p.endDate ? p.endDate.split('T')[0] : ''
        },
        hasPhotos: p.photos && p.photos.length > 0,
        mainActivities: p.results?.map((r: any) => r.name) || [],
        // Garantir que status está no formato correto
        status: p.status || 'process'
      }));

      return {
        success: true,
        projects,
        total: data.total || projects.length,
        page: data.page || 1,
        limit: data.limit || 10
      };
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
      return {
        success: false,
        projects: [],
        total: 0,
        error: error instanceof Error ? error.message : 'Erro ao buscar projetos'
      };
    }
  },

  /**
   * Buscar projeto por ID
   */
  fetchProjectById: async (id: string): Promise<ProjectResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/public/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar projeto: ${response.status}`);
      }

      const data = await response.json();
      
      // Mapear dados
      const project = {
        ...data.project,
        executionPeriod: {
          start: data.project.startDate ? data.project.startDate.split('T')[0] : '',
          end: data.project.endDate ? data.project.endDate.split('T')[0] : ''
        },
        hasPhotos: data.project.photos && data.project.photos.length > 0,
        mainActivities: data.project.results?.map((r: any) => r.name) || [],
        status: data.project.status || 'process'
      };

      return {
        success: true,
        project
      };
    } catch (error) {
      console.error(`Erro ao buscar projeto ${id}:`, error);
      return {
        success: false,
        project: {} as Project,
        error: error instanceof Error ? error.message : 'Erro ao buscar projeto'
      };
    }
  },

  /**
   * Buscar todos os projetos com filtros (versão síncrona para compatibilidade)
   */
  getProjects: (filters?: ProjectFilters): Project[] => {
    // Esta função agora faz uma chamada assíncrona
    // Para compatibilidade, retornamos um array vazio e o componente deve usar fetchProjects
    console.warn('getProjects está obsoleto, use fetchProjects assíncrono');
    return [];
  },

  /**
   * Buscar um projeto por ID (versão síncrona para compatibilidade)
   */
  getProjectById: (id: string): Project | undefined => {
    console.warn('getProjectById está obsoleto, use fetchProjectById assíncrono');
    return undefined;
  },

  /**
   * Buscar projetos relacionados
   */
  getRelatedProjects: async (project: Project, limit: number = 4): Promise<Project[]> => {
    try {
      const response = await projectActions.fetchProjects({
        client: project.client,
        limit: limit + 1
      });
      
      if (!response.success) return [];
      
      return response.projects
        .filter(p => p.id !== project.id)
        .slice(0, limit);
    } catch (error) {
      console.error('Erro ao buscar projetos relacionados:', error);
      return [];
    }
  },

  /**
   * Obter estatísticas dos projetos
   */
  getProjectStats: async (): Promise<ProjectStats> => {
    try {
      const response = await projectActions.fetchProjects({ limit: 1000 });
      
      if (!response.success || !response.projects) {
        return {
          total: 0,
          byStatus: {},
          bySector: {},
          byYear: {}
        };
      }

      const projects = response.projects;
      const byStatus: Record<string, number> = {};
      const bySector: Record<string, number> = {};
      const byYear: Record<string, number> = {};

      projects.forEach(p => {
        // Status
        const statusKey = p.status || 'process';
        byStatus[statusKey] = (byStatus[statusKey] || 0) + 1;

        // Sector
        const sectorKey = p.sector || 'Outros';
        bySector[sectorKey] = (bySector[sectorKey] || 0) + 1;

        // Ano
        const year = p.startDate ? p.startDate.split('-')[0] : '2024';
        byYear[year] = (byYear[year] || 0) + 1;
      });

      return {
        total: projects.length,
        byStatus,
        bySector,
        byYear
      };
    } catch (error) {
      console.error('Erro ao obter estatísticas:', error);
      return {
        total: 0,
        byStatus: {},
        bySector: {},
        byYear: {}
      };
    }
  },

  /**
   * Obter clientes únicos
   */
  getUniqueClients: async (): Promise<string[]> => {
    try {
      const response = await projectActions.fetchProjects({ limit: 1000 });
      if (!response.success) return [];
      
      const clients = new Set(response.projects.map(p => p.client));
      return Array.from(clients).sort();
    } catch (error) {
      console.error('Erro ao obter clientes:', error);
      return [];
    }
  },

  /**
   * Obter setores únicos
   */
  getUniqueSectors: async (): Promise<string[]> => {
    try {
      const response = await projectActions.fetchProjects({ limit: 1000 });
      if (!response.success) return [];
      
      const sectors = new Set(response.projects.map(p => p.sector));
      return Array.from(sectors).sort();
    } catch (error) {
      console.error('Erro ao obter setores:', error);
      return [];
    }
  },

  /**
   * Obter localizações únicas
   */
  getUniqueLocations: async (): Promise<string[]> => {
    try {
      const response = await projectActions.fetchProjects({ limit: 1000 });
      if (!response.success) return [];
      
      const locations = new Set(response.projects.map(p => p.location));
      return Array.from(locations).sort();
    } catch (error) {
      console.error('Erro ao obter localizações:', error);
      return [];
    }
  },

  /**
   * Obter anos únicos
   */
  getUniqueYears: async (): Promise<string[]> => {
    try {
      const response = await projectActions.fetchProjects({ limit: 1000 });
      if (!response.success) return [];
      
      const years = new Set(
        response.projects.flatMap(p => [
          p.startDate ? p.startDate.split('-')[0] : '',
          p.endDate ? p.endDate.split('-')[0] : ''
        ]).filter(Boolean)
      );
      return Array.from(years).sort().reverse();
    } catch (error) {
      console.error('Erro ao obter anos:', error);
      return [];
    }
  }
};