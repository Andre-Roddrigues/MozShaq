import { Metadata } from 'next';
import ConteudoLocalPage from '../../../components/consultoria/conteudo-local/ConteudoLocal';

export const metadata: Metadata = {
  title: "Conteúdo Local e Responsabilidade Social",
  description:
    "Consultoria em políticas de conteúdo local e responsabilidade social corporativa para promover o desenvolvimento sustentável e a inclusão comunitária.",
};

export default function Page() {
return(
    <div className="">
    <ConteudoLocalPage />
    </div>
);
}