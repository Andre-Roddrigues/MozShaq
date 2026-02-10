import { Metadata } from 'next';
import ProjetosEngenhariaPage from "../../../components/consultoria/projetos-engenharia/Engenharia";

export const metadata: Metadata = {
  title: "Projetos de Engenharia",
  description:
    "Consultoria em projetos de engenharia civil, estrutural e ambiental para soluções inovadoras e sustentáveis.",
};

export default function Page() {
return(
    <div className="">
    <ProjetosEngenhariaPage />
    </div>
);
}