import { Metadata } from 'next';
import RegisterPage from '../../components/registro/registroPage';

export const metadata: Metadata = {
  title: "Criar Conta",
  description:
    "Registre-se para acessar nossos cursos, acompanhar seu progresso",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <RegisterPage />
    </div>
);
}