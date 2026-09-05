import { Metadata } from 'next';
import ContactPage from '../../components/Landing/contacto/contacte-nos';

export const metadata: Metadata = {
  title: "Contacte-nos",
  description:
    "Entre em contato com a MozShaq para soluções especializadas em Segurança, Saúde Ocupacional, Meio Ambiente e Sustentabilidade. Nossa equipe está pronta para ajudar sua empresa a alcançar a excelência em conformidade e desempenho ambiental.",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <ContactPage />
    </div>
);
}