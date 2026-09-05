import SegurancaSaudePage from "../../../components/consultoria/seguranca-saude/SegurancaSaude";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Segurança e Saúde Ocupacional",
  description:
    "Consultoria especializada em segurança e saúde no trabalho para promover ambientes laborais seguros e saudáveis.",
};

export default function Page() {
return(
    <div className="">
    <SegurancaSaudePage />
    </div>
);
}