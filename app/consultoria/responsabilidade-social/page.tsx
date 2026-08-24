import { Metadata } from 'next';
import ResponsabilidadeSocialPage from '../../../components/consultoria/responsabilidadeSocial/ResponsabilidadeSocial';

export const metadata: Metadata = {
  title: "Responsabilidade Social | MozShaq",
  description: "Serviços especializados em responsabilidade social, engajamento comunitário e avaliações de impacto social.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <ResponsabilidadeSocialPage />
    </div>
  );
}