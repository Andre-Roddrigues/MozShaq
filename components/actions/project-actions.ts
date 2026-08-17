// actions/project-actions.ts

import { allProjects, mockProjects } from "../../data/mock-projects";
import { ProjectFilters, Project, ProjectStats } from "../../types/project";

export const projectActions = {
  // Buscar todos os projetos com filtros
  getProjects: (filters?: ProjectFilters): Project[] => {
    let projects = [...allProjects];

    if (!filters) return projects;

    // Filtro por busca (cliente, nome, localização, descrição)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      projects = projects.filter(p =>
        p.client.toLowerCase().includes(searchLower) ||
        p.name.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.servicesProvided.some(s => s.toLowerCase().includes(searchLower))
      );
    }

    // Filtro por cliente
    if (filters.client) {
      projects = projects.filter(p =>
        p.client.toLowerCase().includes(filters.client!.toLowerCase())
      );
    }

    // Filtro por setor
    if (filters.sector) {
      projects = projects.filter(p =>
        p.sector.toLowerCase().includes(filters.sector!.toLowerCase())
      );
    }

    // Filtro por status
    if (filters.status) {
      projects = projects.filter(p => p.status === filters.status);
    }

    // Filtro por localização
    if (filters.location) {
      projects = projects.filter(p =>
        p.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Filtro por ano
    if (filters.year) {
      projects = projects.filter(p =>
        p.executionPeriod.start.includes(filters.year!) ||
        p.executionPeriod.end.includes(filters.year!)
      );
    }

    // Filtro por data de início
    if (filters.dateFrom) {
      projects = projects.filter(p =>
        p.executionPeriod.start >= filters.dateFrom!
      );
    }

    // Filtro por data de fim
    if (filters.dateTo) {
      projects = projects.filter(p =>
        p.executionPeriod.end <= filters.dateTo!
      );
    }

    // Filtro por fotos
    if (filters.hasPhotos !== undefined) {
      projects = projects.filter(p => p.hasPhotos === filters.hasPhotos);
    }

    return projects;
  },

  // Buscar um projeto por ID
  getProjectById: (id: string): Project | undefined => {
    return allProjects.find(p => p.id === id);
  },

  // Buscar projetos relacionados (mesmo cliente ou mesmo setor)
  getRelatedProjects: (project: Project, limit: number = 4): Project[] => {
    return allProjects
      .filter(p => 
        p.id !== project.id && 
        (p.client === project.client || p.sector === project.sector)
      )
      .slice(0, limit);
  },

  // Obter estatísticas dos projetos
  getProjectStats: (): ProjectStats => {
    const projects = allProjects;
    
    const byStatus: Record<string, number> = {};
    const bySector: Record<string, number> = {};
    const byYear: Record<string, number> = {};

    projects.forEach(p => {
      // Status
      byStatus[p.status] = (byStatus[p.status] || 0) + 1;

      // Sector
      bySector[p.sector] = (bySector[p.sector] || 0) + 1;

      // Ano
      const year = p.executionPeriod.start.split('-')[0];
      byYear[year] = (byYear[year] || 0) + 1;
    });

    return {
      total: projects.length,
      byStatus,
      bySector,
      byYear,
    };
  },

  // Obter clientes únicos
  getUniqueClients: (): string[] => {
    const clients = new Set(allProjects.map(p => p.client));
    return Array.from(clients).sort();
  },

  // Obter setores únicos
  getUniqueSectors: (): string[] => {
    const sectors = new Set(allProjects.map(p => p.sector));
    return Array.from(sectors).sort();
  },

  // Obter localizações únicas
  getUniqueLocations: (): string[] => {
    const locations = new Set(allProjects.map(p => p.location));
    return Array.from(locations).sort();
  },

  // Obter anos únicos
  getUniqueYears: (): string[] => {
    const years = new Set(
      allProjects.flatMap(p => [
        p.executionPeriod.start.split('-')[0],
        p.executionPeriod.end.split('-')[0]
      ])
    );
    return Array.from(years).sort().reverse();
  }
};