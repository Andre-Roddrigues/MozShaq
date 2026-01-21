import { Metadata } from 'next';
import ProjetosEngenhariaPage from '../../../components/consultoria/projetos-engenharia/Engenharia';

export const metadata: Metadata = {
  title: "Engenharia e Projectos",
  description:
    "",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <ProjetosEngenhariaPage />
    </div>
);
}