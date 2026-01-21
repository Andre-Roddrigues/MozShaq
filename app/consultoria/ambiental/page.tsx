import EstudosAmbientaisPage from "../../../components/consultoria/ambiental/Ambiental";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Estudos Ambientais",
  description:
    "Consultoria em estudos de impacto ambiental, licenciamento e gestão ambiental para projetos sustentáveis.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <EstudosAmbientaisPage />
    </div>
);
}