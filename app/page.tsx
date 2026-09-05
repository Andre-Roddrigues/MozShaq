import type { Metadata } from "next";
import HeroSlider from "../components/Landing/Hero2/HeroSlide";
import ServicosIndustrias from "../components/Landing/ServicosEmpresas/Servicos";
import AboutSection from "../components/Landing/About/AboutSection";
import TeamSection from "../components/Landing/Team/TeamSection";
import CardSectionSliders from "../components/Landing/Hero2/CardSectionSliders ";
import HowWeActSection from "../components/Landing/HowWeAct/HowWeActSection";
import ServicesOverviewSection from "../components/Landing/ServicesSurvey/ServicesOverviewSection";
import PartnerSlider from "../components/Landing/Partners/Partnes";
import HeroSectionSherq from "../components/Landing/Hero2/HeroSherq";
import AreasConsultoria from "../components/Landing/ServicosEmpresas/Servicos";
import ProjectsShowcase from "../components/projectos/ProjectsShowcase";
import MarketingBanner from "../components/SherqAcademy/CTACursos/CTA";

export const metadata: Metadata = {
  title: "MozShaq",
  description: "",
};

export default function Home() {

  return (
    <main>
      <section id="inicio">
        <HeroSectionSherq />
        {/* <CardSectionSliders /> */}
      </section>
      <section id="sobre">
        <AboutSection />
      </section>
      <section id="areas">
        <AreasConsultoria />
      </section>
      <section id="partners">
        <PartnerSlider />
      </section>
      <section id="howweact" >
        <HowWeActSection />
      </section>
      {/* <section id="services-overview">
        <ServicesOverviewSection />
      </section> */}
      <section id="services-overview">
        <ProjectsShowcase />
      </section>
      <section id="sherq">
        <MarketingBanner />
      </section>
    </main>
  );
}
