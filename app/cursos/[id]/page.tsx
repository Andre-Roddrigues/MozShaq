// app/cursos/[id]/page.tsx
import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CursoDetalhesClient } from '../../../components/SherqAcademy/Cursos/CursoDetalhesClient';
import { fetchCourseById } from '../../../components/actions/courseActions';

interface CursoDetalhesPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Gerar metadados dinamicamente baseado no curso
export async function generateMetadata({ params }: CursoDetalhesPageProps): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const curso = await fetchCourseById(id);
    
    return {
      title: `${curso.titulo} | MozShaq Academy`,
      description: curso.descricao,
      openGraph: {
        title: curso.titulo,
        description: curso.descricao,
        images: [curso.thumbnail],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: curso.titulo,
        description: curso.descricao,
        images: [curso.thumbnail],
      },
    };
  } catch (error) {
    console.error('Erro ao gerar metadata:', error);
    return {
      title: 'Curso | MozShaq Academy',
      description: 'Detalhes do curso',
    };
  }
}

// Server Component
export default async function CursoDetalhesPage({ params }: CursoDetalhesPageProps) {
  const { id } = await params;
  
  try {
    // Buscar dados reais da API
    const curso = await fetchCourseById(id);
    
    return (
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-main mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando curso...</p>
          </div>
        </div>
      }>
        <CursoDetalhesClient cursoDetalhes={curso} cursoId={id} />
      </Suspense>
    );
    
  } catch (error) {
    console.error('Erro ao carregar curso:', error);
    notFound();
  }
}