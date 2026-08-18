// actions/courseActions.ts

'use server';

import { CoursesQueryParams, CoursesResponse, Course, CourseResponse } from "../../types/courseTypes";

const API_BASE_URL = 'https://www.backend.mozshaq.co.mz/api/public';

/**
 * Busca todos os cursos com filtros opcionais
 */
export async function fetchCourses(params?: CoursesQueryParams): Promise<CoursesResponse> {
  try {
    // Construir URL com parâmetros
    const queryParams = new URLSearchParams();
    
    if (params) {
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.limit) queryParams.append('limit', params.limit.toString());
      if (params.categoryId) queryParams.append('categoryId', params.categoryId);
      if (params.level) queryParams.append('level', params.level);
      if (params.type) queryParams.append('type', params.type);
      if (params.search) queryParams.append('search', params.search);
      if (params.status) queryParams.append('status', params.status);
      if (params.sortBy) queryParams.append('sortBy', params.sortBy);
      if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);
    }
    
    const url = `${API_BASE_URL}/courses`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Para dados sempre atualizados
      // next: { revalidate: 3600 } // Opcional: revalidar a cada hora
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar cursos: ${response.status} ${response.statusText}`);
    }
    
    const data: CoursesResponse = await response.json();
    return data;
    
  } catch (error) {
    console.error('Erro em fetchCourses:', error);
    throw error;
  }
}

/**
 * Busca um curso específico por ID
 */
export async function fetchCourseById(id: string): Promise<Course> {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar curso: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Verifica se a resposta tem a estrutura esperada
    if (!data.success) {
      throw new Error(data.message || 'Curso não encontrado');
    }
    
    // A API retorna o curso dentro da propriedade "course"
    if (!data.course) {
      throw new Error('Curso não encontrado na resposta');
    }
    
    return data.course;
    
  } catch (error) {
    console.error(`Erro em fetchCourseById (${id}):`, error);
    throw error;
  }
}

/**
 * Busca cursos por categoria
 */
export async function fetchCoursesByCategory(categoryId: string, limit?: number): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      categoryId,
      limit: limit || 10,
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error(`Erro em fetchCoursesByCategory (${categoryId}):`, error);
    throw error;
  }
}

/**
 * Busca cursos populares (ordenados por rating ou número de alunos)
 */
export async function fetchPopularCourses(limit: number = 6): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      limit,
      sortBy: 'rating',
      sortOrder: 'desc',
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Erro em fetchPopularCourses:', error);
    throw error;
  }
}

/**
 * Busca cursos em destaque (recentes ou com desconto)
 */
export async function fetchFeaturedCourses(limit: number = 4): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      limit,
      sortBy: 'createdAt',
      sortOrder: 'desc',
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Erro em fetchFeaturedCourses:', error);
    throw error;
  }
}

/**
 * Busca cursos por nível
 */
export async function fetchCoursesByLevel(level: string, limit?: number): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      level,
      limit: limit || 10,
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error(`Erro em fetchCoursesByLevel (${level}):`, error);
    throw error;
  }
}

/**
 * Busca cursos por tipo (PRESENCIAL, ONLINE, etc)
 */
export async function fetchCoursesByType(type: string, limit?: number): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      type,
      limit: limit || 10,
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error(`Erro em fetchCoursesByType (${type}):`, error);
    throw error;
  }
}

/**
 * Busca cursos com desconto
 */
export async function fetchCoursesWithDiscount(limit?: number): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      limit: limit || 10,
      status: 'PUBLICADO',
    });
    
    // Filtrar cursos que têm desconto
    const coursesWithDiscount = response.data.filter(course => course.temDesconto === true);
    
    return coursesWithDiscount;
    
  } catch (error) {
    console.error('Erro em fetchCoursesWithDiscount:', error);
    throw error;
  }
}

/**
 * Busca cursos por termo de pesquisa
 */
export async function searchCourses(searchTerm: string, limit?: number): Promise<Course[]> {
  try {
    const response = await fetchCourses({
      search: searchTerm,
      limit: limit || 20,
      status: 'PUBLICADO',
    });
    
    return response.data;
    
  } catch (error) {
    console.error(`Erro em searchCourses (${searchTerm}):`, error);
    throw error;
  }
}

/**
 * Busca cursos paginados
 */
export async function fetchCoursesPaginated(
  page: number = 1,
  limit: number = 10,
  filters?: Omit<CoursesQueryParams, 'page' | 'limit'>
): Promise<CoursesResponse> {
  try {
    return await fetchCourses({
      page,
      limit,
      ...filters,
      status: 'PUBLICADO',
    });
    
  } catch (error) {
    console.error('Erro em fetchCoursesPaginated:', error);
    throw error;
  }
}