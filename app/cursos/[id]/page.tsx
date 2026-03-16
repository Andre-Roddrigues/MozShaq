import { Suspense } from 'react';
import { Metadata } from 'next';
import { CursoDetalhesClient } from '../../../components/SherqAcademy/Cursos/CursoDetalhesClient';

// Metadata para SEO
export const metadata: Metadata = {
  title: 'Detalhes do Curso | Gestão de Segurança',
  description: 'Informações detalhadas sobre o curso de Gestão de Segurança e Saúde no Trabalho',
};

// Dados mockados do curso (em produção, viria de uma API)
const cursoDetalhes = {
  id: '1',
  titulo: 'Gestão de Segurança e Saúde no Trabalho',
  descricao: 'Curso completo sobre normas de segurança...',
  descricaoLonga: 'Este curso oferece uma formação abrangente em Segurança e Saúde no Trabalho...',
  duracao: '40 horas',
  vagas: 25,
  vagasDisponiveis: 15,
  nivel: 'Intermediário' as const,
  preco: 15000,
  precoPromocional: 12000,
  rating: 4.8,
  totalAvaliacoes: 47,
  imagem: '/images/services/consultoria.jpg',
  categoria: 'Segurança',
  dataInicio: '15 Jan 2024',
  dataFim: '26 Jan 2024',
  certificado: true,
  formador: {
    nome: 'Eng. Andre Rodrigues',
    foto: '/images/mentorhero.jpg',
    especializacao: 'Segurança e Saúde no Trabalho',
    experiencia: '12 anos',
    bio: 'Engenheiro de Segurança com vasta experiência...',
    formacao: 'Mestrado em Engenharia de Segurança - UEM'
  },
  objetivo: 'Capacitar os participantes a implementar...',
  competencias: [
    'Identificar e avaliar riscos ocupacionais',
    'Elaborar planos de prevenção de acidentes',
    'Implementar sistemas de gestão de SST',
  ],
  modulos: [
    {
      titulo: 'Introdução à Segurança e Saúde no Trabalho',
      duracao: '4 horas',
      temas: ['Conceitos fundamentais', 'Legislação moçambicana']
    }
  ],
  metodologia: 'Aulas teóricas expositivas, estudos de caso...',
  publicoAlvo: 'Técnicos de segurança, engenheiros, gestores...',
  requisitos: 'Conhecimentos básicos em gestão...',
  incluido: ['Material didático completo', 'Certificado de conclusão']
};

interface CursoDetalhesPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Server Component (sem 'use client')
export default async function CursoDetalhesPage({ params }: CursoDetalhesPageProps) {
  const { id } = await params;
  
  // Em produção, buscar dados da API baseado no ID
  // const curso = await fetchCursoById(id);
  
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CursoDetalhesClient cursoDetalhes={cursoDetalhes} cursoId={id} />
    </Suspense>
  );
}