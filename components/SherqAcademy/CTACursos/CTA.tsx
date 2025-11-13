import Link from "next/link";

export default function MarketingBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Formas geométricas de fundo */}
        <div className="hidden md:block absolute  top-0 right-0 w-64 h-64 bg-brand-main transform rotate-12 translate-x-20 -translate-y-20 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue transform -rotate-12 translate-x-32 -translate-y-10 rounded-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-main transform rotate-12 translate-x-32 translate-y-32 rounded-3xl"></div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">
          {/* Lado esquerdo - Conteúdo */}
          <div className="space-y-6 z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-main rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">SHERQ</div>
                <div className="text-xs text-gray-500">ACADEMY</div>
              </div>
            </div>

            {/* Título */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Formação
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-brand-main">PROFISSIONAL</span>{' '}
                <span className="text-gray-800">DE EXCELÊNCIA</span>
              </h2>
            </div>

            {/* Descrição */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Descubra mais de 50 cursos especializados em Saúde e Segurança, Gestão, 
              Operação de Equipamentos e Soft Skills. Formação certificada com instrutores 
              qualificados e reconhecimento oficial.
            </p>

            {/* CTA e Contato */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/cursos"
                className="bg-brand-main hover:bg-brand-blue text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                VER CURSOS
              </Link>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span className="text-sm font-medium">+258825598146</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito - Imagem com moldura */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="relative">
              {/* Moldura branca com sombra */}
              <div className="relative bg-white p-6 rounded-full shadow-xl transform hover:scale-105 transition-transform">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-inner">
                  <img 
                    src="/images/sherqcta.jpg" 
                    alt="Formação Profissional"
                    className="w-full h-full object-cover transition-all"
                  />
                </div>
              </div>
              
              {/* Texto curvo "SUA CARREIRA AQUI" */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="curve"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0"
                      fill="transparent"
                    />
                    <text className="text-[6px] fill-gray-400 uppercase tracking-wider">
                      {/* <textPath href="#curve" startOffset="0%">
                        SUA CARREIRA AQUI •
                      </textPath> */}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}