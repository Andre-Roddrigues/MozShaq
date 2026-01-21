import { Metadata } from 'next';
import ProjetosEngenhariaPage from "../../../components/consultoria/projetos-engenharia/Engenharia";

export const metadata: Metadata = {
  title: "Projetos de Engenharia",
  description:
    "Consultoria em projetos de engenharia civil, estrutural e ambiental para soluções inovadoras e sustentáveis.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <ProjetosEngenhariaPage />
    </div>
);
}