import type { Metadata } from "next";
import HeroSlider from "../components/Landing/Hero2/HeroSlide";
import ServicosIndustrias from "../components/Landing/ServicosEmpresas/Servicos";
import AboutSection from "../components/Landing/About/AboutSection";
import TeamSection from "../components/Landing/Team/TeamSection";
import { CardsSharq } from "../components/Landing/Hero2/CardsSharq";
import CardSectionSliders from "../components/Landing/Hero2/CardSectionSliders ";
import HowWeActSection from "../components/Landing/HowWeAct/HowWeActSection";
import ServicesOverviewSection from "../components/Landing/ServicesSurvey/ServicesOverviewSection";

export const metadata: Metadata = {
  title: "MozShaq",
  description: "",
};

export default function Home() {

  return (
    <div>
      <div>
        <HeroSlider />
        <CardSectionSliders />
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
      <div>
        <HowWeActSection />
      </div>
      <div>
        <ServicesOverviewSection />
      </div>
    </div>
  );
}
