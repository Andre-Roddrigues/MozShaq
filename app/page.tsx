import type { Metadata } from "next";
import HeroSlider from "../components/Landing/Hero2/HeroSlide";
import ServicosIndustrias from "../components/Landing/ServicosEmpresas/Servicos";
import AboutSection from "../components/Landing/About/AboutSection";
import TeamSection from "../components/Landing/Team/TeamSection";

export const metadata: Metadata = {
  title: "MozShaq",
  description: "",
};

export default function Home() {

  return (
    <div>
      <div>
        <HeroSlider />
      </div>
      <div>
        <ServicosIndustrias />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <TeamSection />
      </div>
    </div>
  );
}
