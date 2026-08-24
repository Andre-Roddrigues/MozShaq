// app/consultoria/conformidade-industrial/page.tsx
import { Metadata } from 'next';
import ConformidadeIndustrialPage from '../../../components/consultoria/Conformidade/ConformidadeIndustrial';
export const metadata: Metadata = {
  title: "Conformidade Industrial | MozShaq",
  description: "Serviços especializados em conformidade regulatória e padrões de segurança industrial.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <ConformidadeIndustrialPage />
    </div>
  );
}