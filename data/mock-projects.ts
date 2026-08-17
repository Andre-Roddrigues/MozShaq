// data/mock-projects.ts

import { Project } from "../types/project";

// URLs de imagens placeholder para demonstração
const projectImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581092335874-1d5e9b1a5a1a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
];

export const mockProjects: Project[] = [
  {
    id: '1',
    client: 'Vale Moçambique',
    name: 'Avaliação de Impacto Ambiental - Mina de Moatize',
    location: 'Moatize, Tete',
    executionPeriod: {
      start: '2023-01',
      end: '2024-06'
    },
    sector: 'Mineração',
    objective: 'Avaliar os impactos ambientais da expansão da mina de carvão e propor medidas de mitigação eficazes.',
    servicesProvided: [
      'Avaliação de Impacto Ambiental (AIA)',
      'Plano de Gestão Ambiental',
      'Auditoria Ambiental',
      'Reassentamento e Compensação'
    ],
    mainActivities: [
      'Levantamento de campo da biodiversidade local',
      'Análise de qualidade da água e do solo',
      'Consulta pública com comunidades afectadas',
      'Elaboração do Relatório de Impacto Ambiental',
      'Plano de mitigação e monitorização'
    ],
    results: [
      'Relatório de AIA aprovado pelo MICOA',
      'Plano de gestão ambiental implementado',
      'Programa de reassentamento para 200 famílias',
      'Sistema de monitorização contínua instalado'
    ],
    description: 'Este projecto envolveu uma avaliação abrangente dos impactos ambientais da expansão da mina de carvão em Moatize. A equipa da Mozshaq realizou estudos detalhados de campo, consultas comunitárias e desenvolveu planos de mitigação alinhados com os padrões internacionais e a legislação moçambicana.',
    partners: [
      'Vale Moçambique',
      'Ministério da Terra e Ambiente',
      'Universidade Eduardo Mondlane',
      'Consultores Ambientais Internacionais'
    ],
    hasPhotos: true,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop'
    ],
    status: 'concluido',
    category: ['Mineração', 'AIA', 'Gestão Ambiental'],
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: '2024-06-20T14:30:00Z'
  },
  {
    id: '2',
    client: 'Portos de Moçambique',
    name: 'Reabilitação Ambiental - Porto de Pemba',
    location: 'Pemba, Cabo Delgado',
    executionPeriod: {
      start: '2023-03',
      end: '2024-09'
    },
    sector: 'Infraestrutura Portuária',
    objective: 'Reabilitar a área portuária com foco na gestão costeira e proteção dos ecossistemas marinhos.',
    servicesProvided: [
      'Gestão Costeira',
      'Estudos de Biodiversidade Marinha',
      'Plano de Gestão Ambiental',
      'Monitorização Ambiental'
    ],
    mainActivities: [
      'Levantamento de ecossistemas marinhos',
      'Monitorização da qualidade da água',
      'Plano de proteção costeira',
      'Programa de educação ambiental',
      'Reabilitação de mangais'
    ],
    results: [
      'Área de 50 hectares de mangais reabilitados',
      'Melhoria de 40% na qualidade da água',
      'Plano de gestão costeira implementado',
      'Programa comunitário de conservação iniciado'
    ],
    description: 'Projecto de reabilitação ambiental do Porto de Pemba com foco na proteção dos ecossistemas costeiros e envolvimento comunitário para conservação da biodiversidade marinha.',
    partners: [
      'Portos de Moçambique',
      'Administração Nacional das Áreas de Conservação',
      'WWF Moçambique'
    ],
    hasPhotos: true,
    coverImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    ],
    status: 'em_andamento',
    category: ['Infraestrutura', 'Gestão Costeira', 'Conservação'],
    createdAt: '2023-03-10T09:00:00Z',
    updatedAt: '2024-08-15T16:45:00Z'
  },
  {
    id: '3',
    client: 'EDM - Electricidade de Moçambique',
    name: 'Linha de Transmissão Norte',
    location: 'Nampula - Niassa',
    executionPeriod: {
      start: '2022-06',
      end: '2024-12'
    },
    sector: 'Energia',
    objective: 'Realizar estudos ambientais para a construção da linha de transmissão de 400kV entre Nampula e Niassa.',
    servicesProvided: [
      'Avaliação de Impacto Ambiental',
      'Plano de Reassentamento',
      'Estudos de Fauna e Flora',
      'Monitorização Ambiental'
    ],
    mainActivities: [
      'Inventário de espécies ao longo do corredor',
      'Estudos de corredores de migração',
      'Consulta com comunidades locais',
      'Plano de compensação ambiental',
      'Programa de monitorização'
    ],
    results: [
      'AIA aprovada com condicionantes',
      'Plano de reassentamento para 350 famílias',
      'Corredor ecológico preservado',
      'Plano de compensação implementado'
    ],
    description: 'Estudo ambiental para a linha de transmissão de energia que conecta Nampula ao Niassa, garantindo minimização de impactos à biodiversidade e comunidades locais.',
    partners: [
      'EDM',
      'Banco Mundial',
      'Ministério dos Recursos Minerais e Energia'
    ],
    hasPhotos: true,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092335874-1d5e9b1a5a1a?w=800&h=600&fit=crop'
    ],
    status: 'concluido',
    category: ['Energia', 'AIA', 'Infraestrutura'],
    createdAt: '2022-06-01T11:00:00Z',
    updatedAt: '2024-12-10T10:20:00Z'
  },
  {
    id: '4',
    client: 'Parque Industrial de Maputo',
    name: 'Gestão Ambiental - Parque Industrial',
    location: 'Matola, Maputo',
    executionPeriod: {
      start: '2023-09',
      end: '2025-03'
    },
    sector: 'Indústria',
    objective: 'Desenvolver e implementar um sistema de gestão ambiental integrado para o parque industrial.',
    servicesProvided: [
      'Auditorias Ambientais',
      'Plano de Gestão Ambiental',
      'Monitorização',
      'Capacitação e Formação'
    ],
    mainActivities: [
      'Auditoria ambiental das 45 fábricas',
      'Elaboração de planos de gestão por setor',
      'Programa de capacitação para gestores',
      'Monitorização de efluentes',
      'Gestão de resíduos industriais'
    ],
    results: [
      'Sistema de gestão ambiental certificado',
      'Redução de 35% na geração de resíduos',
      '100 gestores capacitados',
      'Plano de gestão integrada implementado'
    ],
    description: 'Implementação de sistema de gestão ambiental para o parque industrial de Matola, promovendo práticas sustentáveis e conformidade com a legislação.',
    partners: [
      'IPEM',
      'Associação Industrial de Maputo',
      'Fundação para o Meio Ambiente'
    ],
    hasPhotos: true,
    coverImage: 'https://images.unsplash.com/photo-1581092335874-1d5e9b1a5a1a?w=800&h=600&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1581092335874-1d5e9b1a5a1a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop'
    ],
    status: 'em_andamento',
    category: ['Indústria', 'Gestão Ambiental', 'Auditoria'],
    createdAt: '2023-09-05T14:00:00Z',
    updatedAt: '2024-07-20T09:30:00Z'
  },
  {
    id: '5',
    client: 'Cahora Bassa - Hidroeléctrica',
    name: 'Estudo de Impacto Ambiental - Barragem',
    location: 'Cahora Bassa, Tete',
    executionPeriod: {
      start: '2023-11',
      end: '2025-08'
    },
    sector: 'Energia Hidroeléctrica',
    objective: 'Avaliar os impactos ambientais da operação da barragem e propor medidas de gestão sustentável.',
    servicesProvided: [
      'Avaliação de Impacto Ambiental',
      'Plano de Gestão de Recursos Hídricos',
      'Estudos de Ictiofauna',
      'Reassentamento e Compensação'
    ],
    mainActivities: [
      'Estudos de hidrologia e qualidade da água',
      'Inventário de espécies aquícolas',
      'Análise de impactos a jusante',
      'Consulta com comunidades ribeirinhas',
      'Plano de gestão integrada'
    ],
    results: [
      'Modelo de gestão de recursos hídricos',
      'Programa de conservação de peixes',
      'Plano de compensação para comunidades',
      'Sistema de monitorização contínua'
    ],
    description: 'Estudo abrangente dos impactos ambientais da barragem de Cahora Bassa, focando na gestão de recursos hídricos e conservação da biodiversidade aquícola.',
    partners: [
      'HCB',
      'Ministério da Energia',
      'Universidade do Zambeze',
      'Banco de Desenvolvimento Africano'
    ],
    hasPhotos: true,
    coverImage: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    ],
    status: 'planejado',
    category: ['Energia', 'Recursos Hídricos', 'AIA'],
    createdAt: '2023-11-20T08:00:00Z',
    updatedAt: '2024-05-10T13:15:00Z'
  }
];

// Gerar mais projetos para teste de scroll
export const generateMoreProjects = (count: number = 10): Project[] => {
  const additionalProjects: Project[] = [];
  const projectNames = [
    'Estudo de Impacto Ambiental - Projecto de Gás',
    'Plano de Gestão Costeira - Região Sul',
    'Auditoria Ambiental - Indústria de Processamento',
    'Reassentamento - Projecto de Infraestrutura',
    'Monitorização Ambiental - Linha Férrea',
    'Gestão de Resíduos - Cidade de Maputo',
    'Conservação da Biodiversidade - Gorongosa',
    'Plano de Gestão de Recursos Hídricos - Bacia do Limpopo',
    'Avaliação de Impacto Social - Projecto Mineiro',
    'Plano de Compensação Ambiental - Estrada Nacional'
  ];

  const clients = [
    'Sasol Moçambique',
    'Anadarko Moçambique',
    'CFM - Caminhos de Ferro de Moçambique',
    'Águas de Moçambique',
    'Parque Nacional da Gorongosa',
    'ANAC - Administração Nacional das Áreas de Conservação',
    'Ministério das Obras Públicas',
    'Fundação para o Meio Ambiente',
    'Banco de Moçambique',
    'Portos de Moçambique'
  ];

  const locations = [
    'Inhambane',
    'Maputo',
    'Sofala',
    'Zambézia',
    'Nampula',
    'Cabo Delgado',
    'Niassa',
    'Tete',
    'Manica',
    'Gaza'
  ];

  const sectors = [
    'Energia',
    'Infraestrutura',
    'Mineração',
    'Agricultura',
    'Turismo',
    'Transportes',
    'Indústria',
    'Recursos Hídricos'
  ];

  const statuses: ('concluido' | 'em_andamento' | 'planejado')[] = [
    'concluido',
    'em_andamento',
    'planejado'
  ];

  for (let i = 0; i < count; i++) {
    const year = Math.floor(Math.random() * 4) + 2022;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const endYear = year + Math.floor(Math.random() * 2) + 1;
    const endMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');

    additionalProjects.push({
      id: `extra-${i + 6}`,
      client: clients[i % clients.length],
      name: projectNames[i % projectNames.length],
      location: locations[i % locations.length],
      executionPeriod: {
        start: `${year}-${month}`,
        end: `${endYear}-${endMonth}`
      },
      sector: sectors[i % sectors.length],
      objective: `Realizar estudos e implementar medidas para garantir a sustentabilidade ambiental do projecto.`,
      servicesProvided: [
        'Avaliação de Impacto Ambiental',
        'Plano de Gestão Ambiental',
        'Monitorização Ambiental',
        'Consultoria Técnica'
      ],
      mainActivities: [
        'Levantamento de campo',
        'Análise de dados ambientais',
        'Consultas comunitárias',
        'Elaboração de relatórios'
      ],
      results: [
        'Relatório técnico aprovado',
        'Plano de gestão implementado',
        'Monitorização contínua estabelecida'
      ],
      description: `Projecto de consultoria ambiental para ${clients[i % clients.length]} na área de ${sectors[i % sectors.length]}, com foco na sustentabilidade e conformidade ambiental.`,
      partners: [
        clients[i % clients.length],
        'Ministério da Terra e Ambiente',
        'Consultores Independentes'
      ],
      hasPhotos: true,
      coverImage: projectImages[i % projectImages.length],
      photos: [
        projectImages[i % projectImages.length],
        projectImages[(i + 1) % projectImages.length]
      ],
      status: statuses[i % 3],
      category: [sectors[i % sectors.length], 'AIA', 'Gestão Ambiental'],
      createdAt: `${year}-01-15T10:00:00Z`,
      updatedAt: `${endYear}-06-20T14:30:00Z`
    });
  }

  return additionalProjects;
};

// Combinar todos os projetos
export const allProjects = [...mockProjects, ...generateMoreProjects(15)];