'use client';
import { useState } from 'react';
import { BookOpen, Target, User, CheckCircle } from 'lucide-react';

export function TabsNavigacao({ cursoDetalhes }: { cursoDetalhes: any }) {
  const [activeTab, setActiveTab] = useState('sobre');

  const tabs = [
    { id: 'sobre', label: 'Sobre o Curso', icon: BookOpen },
    { id: 'modulos', label: 'Módulos', icon: Target },
    { id: 'formador', label: 'Formador', icon: User },
    { id: 'metodologia', label: 'Metodologia', icon: CheckCircle }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-brand-main text-brand-main'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'sobre' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Objetivo do Curso</h3>
              <p className="text-gray-700 leading-relaxed">{cursoDetalhes.objetivo}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competências a Desenvolver</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cursoDetalhes.competencias.map((competencia: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{competencia}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modulos' && (
          <div className="space-y-6">
            {cursoDetalhes.modulos.map((modulo: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Módulo {index + 1}: {modulo.titulo}
                </h4>
                <p className="text-gray-600 text-sm mb-4">Duração: {modulo.duracao}</p>
                <ul className="space-y-2">
                  {modulo.temas.map((tema: string, temaIndex: number) => (
                    <li key={temaIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-main rounded-full"></div>
                      <span className="text-gray-700">{tema}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'formador' && (
          <div className="flex flex-col md:flex-row gap-6">
            <img 
              src={cursoDetalhes.formador.foto} 
              alt={cursoDetalhes.formador.nome}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{cursoDetalhes.formador.nome}</h3>
              <p className="text-brand-main font-semibold mb-4">{cursoDetalhes.formador.especializacao}</p>
              <p className="text-gray-700">{cursoDetalhes.formador.bio}</p>
            </div>
          </div>
        )}

        {activeTab === 'metodologia' && (
          <div>
            <p className="text-gray-700">{cursoDetalhes.metodologia}</p>
          </div>
        )}
      </div>
    </div>
  );
}