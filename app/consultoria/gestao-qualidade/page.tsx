// app/consultoria/gestao-qualidade/page.tsx
import { Metadata } from 'next';
import GestaoQualidadePage from '../../../components/consultoria/Qualidade/GestaoQualidade';

export const metadata: Metadata = {
  title: "Gestão da Qualidade | MozShaq",
  description: "Serviços especializados em certificação ISO e implementação de sistemas de controlo de qualidade.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <GestaoQualidadePage />
    </div>
  );
}