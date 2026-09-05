import CursosPage from "../../components/SherqAcademy/Cursos/CursosPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cursos | SherqAcademy",
  description:
    "Explore nossos cursos especializados em Segurança, Saúde Ocupacional, Meio Ambiente e Sustentabilidade. Capacite-se com profissionais experientes e impulsione sua carreira com a SherqAcademy.",
};

export default function Page() {
    return (
        <div className="mt-4">
            <CursosPage />
        </div>
    );
}