import React from "react";
import type { Metadata } from "next";
import AboutSection from "../../../components/SherqAcademy/About/AboutUs";
import CoursesHeroSection from "../../../components/Landing/Hero2/HeroSherq";
import CoursesCTA from "../../../components/SherqAcademy/CTACursos/CTA"
export const metadata: Metadata = {
  title: "Sherq Academy",
  description: "Explore os cursos especializados da Sherq Academy em sustentabilidade, segurança e gestão para impulsionar sua carreira e negócios.",
};

function page() {
  return (
    <div>
      <CoursesHeroSection />
      <AboutSection />
      <CoursesCTA />
    </div>
  );
}

export default page;