// components/SherqAcademy/Cursos/TabsNavigacao.tsx
'use client';
import { useState } from 'react';
import { BookOpen, Target, Award, Users, FileText, GraduationCap, CheckCircle, Clock } from 'lucide-react';

interface CursoFormatado {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  duracao: string;
  vagas: number;
  vagasDisponiveis: number;
  nivel: string;
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

interface TabsNavigacaoProps {
  cursoDetalhes: CursoFormatado;
}

export function TabsNavigacao({ cursoDetalhes }: TabsNavigacaoProps) {
  const [activeTab, setActiveTab] = useState('sobre');

  const tabs = [
    { id: 'sobre', label: 'Sobre o Curso', icon: BookOpen },
    { id: 'conteudo', label: 'Conteúdo Programático', icon: FileText },
    { id: 'metodologia', label: 'Metodologia', icon: GraduationCap },
    { id: 'formador', label: 'Formador', icon: Users },
    // { id: 'certificado', label: 'Certificado', icon: Award },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Tabs Header */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap
                  transition-all duration-200 border-b-2
                  ${isActive 
                    ? 'border-brand-main text-brand-main' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="p-6">
        {/* Sobre o Curso */}
        {activeTab === 'sobre' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Objetivo do Curso</h3>
              <p className="text-gray-700 leading-relaxed">
                {cursoDetalhes.objetivo || cursoDetalhes.descricao}
              </p>
            </div>

            {cursoDetalhes.competencias && cursoDetalhes.competencias.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Competências a Desenvolver</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cursoDetalhes.competencias.map((competencia, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{competencia}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Público-Alvo</h3>
              <p className="text-gray-700 leading-relaxed">{cursoDetalhes.publicoAlvo}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pré-requisitos</h3>
              <p className="text-gray-700 leading-relaxed">{cursoDetalhes.requisitos}</p>
            </div>
          </div>
        )}

        {/* Conteúdo Programático */}
        {activeTab === 'conteudo' && (
          <div className="space-y-6">
            {cursoDetalhes.modulos && cursoDetalhes.modulos.length > 0 ? (
              cursoDetalhes.modulos.map((modulo, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Módulo {index + 1}: {modulo.titulo}
                      </h3>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {modulo.duracao}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {modulo.temas.map((tema, temaIndex) => (
                        <li key={temaIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-main rounded-full mt-2" />
                          <span className="text-gray-700">{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">
                Conteúdo programático em breve.
              </p>
            )}
          </div>
        )}

        {/* Metodologia */}
        {activeTab === 'metodologia' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Metodologia de Ensino</h3>
              <p className="text-gray-700 leading-relaxed">{cursoDetalhes.metodologia}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">O que está incluído?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cursoDetalhes.incluido.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Formador */}
        {activeTab === 'formador' && (
          <div>
            {cursoDetalhes.formador ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={cursoDetalhes.formador.foto || '/images/avatar-placeholder.jpg'}
                    alt={cursoDetalhes.formador.nome}
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                    onError={(e) => {
                      e.currentTarget.src = '/images/avatar-placeholder.jpg';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {cursoDetalhes.formador.nome}
                  </h3>
                  <p className="text-brand-main mb-2">{cursoDetalhes.formador.especializacao}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{cursoDetalhes.formador.experiencia} de experiência</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{cursoDetalhes.formador.bio}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Formação Acadêmica:</span> {cursoDetalhes.formador.formacao}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Informações do formador em breve.</p>
              </div>
            )}
          </div>
        )}

        {/* Certificado */}
        {activeTab === 'certificado' && (
          <div className="text-center py-8">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Certificado de Conclusão
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Ao concluir este curso com aproveitamento mínimo de 75%, você receberá um certificado 
              de conclusão reconhecido pelo mercado.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto text-left">
              <h4 className="font-semibold text-gray-900 mb-3">O certificado inclui:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Nome completo do participante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Título e carga horária do curso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Conteúdo programático abordado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Assinatura digital do formador</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Código de autenticação para verificação online</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}