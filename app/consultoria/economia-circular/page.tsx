// app/consultoria/economia-circular/page.tsx
import { Metadata } from 'next';
import EconomiaCircularPage from '../../../components/consultoria/Circular/EconomiaCircular';
export const metadata: Metadata = {
  title: "Economia Circular | MozShaq",
  description: "Serviços especializados em gestão de resíduos e implementação de economia circular.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <EconomiaCircularPage />
    </div>
  );
}