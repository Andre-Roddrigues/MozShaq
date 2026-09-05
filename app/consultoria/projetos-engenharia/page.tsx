import { Metadata } from 'next';
import ProjetosEngenhariaPage from '../../../components/consultoria/projetos-engenharia/Engenharia';

export const metadata: Metadata = {
  title: "Engenharia e Projectos",
  description:
    "",
};

export default function Page() {
return(
    <div className="">
    <ProjetosEngenhariaPage />
    </div>
);
}