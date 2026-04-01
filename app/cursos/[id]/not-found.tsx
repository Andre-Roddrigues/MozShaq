// app/cursos/[id]/not-found.tsx
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <BookOpen className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Curso não encontrado
        </h1>
        <p className="text-gray-600 mb-8">
          O curso que você está procurando não existe ou foi removido da nossa plataforma.
        </p>
        <Link 
          href="/cursos"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Ver todos os cursos
        </Link>
      </div>
    </div>
  );
}