// app/consultoria/relatorios-sustentabilidade/page.tsx
import { Metadata } from 'next';
import RelatoriosSustentabilidadePage from '../../components/consultoria/Relatorio/RelatoriosSustentabilidade';

export const metadata: Metadata = {
  title: "Relatórios de Sustentabilidade | MozShaq",
  description: "Serviços especializados em reporte ESG e métricas de desempenho sustentável.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <RelatoriosSustentabilidadePage />
    </div>
  );
}