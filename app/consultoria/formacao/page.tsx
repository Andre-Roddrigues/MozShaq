import FormacaoPage from "../../../components/consultoria/formacao/Formacao";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Formação e Capacitação",
  description:
    "Programas de formação especializados em Segurança, Saúde Ocupacional, Meio Ambiente e Sustentabilidade. Nossa equipe está pronta para ajudar sua empresa a alcançar a excelência em conformidade e desempenho ambiental.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <FormacaoPage />
    </div>
);
}