import { Metadata } from 'next';
import SistemasGestaoPage from "../../../components/consultoria/sistemaGestao/SistemaGestao";

export const metadata: Metadata = {
  title: "Sistemas de Gestão",
  description:
    "Consultoria em implementação e certificação de sistemas de gestão ISO para melhorar a eficiência e conformidade organizacional.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <SistemasGestaoPage />
    </div>
);
}