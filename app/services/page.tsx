import React from "react";
import ServicesPage from "../../components/ServicesPage/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços que oferecemos para ajudar a impulsionar a sustentabilidade da sua organização.",
};

function page() {
  return (
    <div>
    <ServicesPage />
    </div>
  );
}

export default page;