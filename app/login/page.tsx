import { Metadata } from 'next';
import LoginPage from '../../components/login/LoginPage';

export const metadata: Metadata = {
  title: "Acessar Conta",
  description:
    "Faça login para acessar seus cursos e acompanhar seu progresso",
};

export default function Page() {
return(
    <div className="container mx-auto px-6 py-8">
    <LoginPage />
    </div>
);
}