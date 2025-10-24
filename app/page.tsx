import type { Metadata } from "next";
import Hero2 from "../components/Landing/Hero2/HeroSection";
import ServicosIndustrias from "../components/Landing/ServicosEmpresas/Servicos";

export const metadata: Metadata = {
  title: "Promet",
  description: "Programa de Melhoria de Empregabilidade e Trabalho que fortalece competências, promove inserção profissional e apoia carreiras sustentáveis.",
};

export default function Home() {

  return (
    <div>
      <div>
        <Hero2 />
      </div>
      <div>
        <ServicosIndustrias />
      </div>
    </div>
  );
}
