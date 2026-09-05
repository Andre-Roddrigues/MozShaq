"use client";

import { useMemo } from "react";
import whatsapp from "../../../public/images/whatsapp.png";
import Image from "next/image";

type FloatingWhatsAppProps = {
  phone: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
};

function onlyDigits(s: string) {
  return (s || "").replace(/\D/g, "");
}

function buildWhatsAppLink(phone: string, message?: string) {
  const base = `https://wa.me/${onlyDigits(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export default function FloatingWhatsApp({
  phone,
  message,
  position = "bottom-right",
}: FloatingWhatsAppProps) {
  const href = useMemo(() => buildWhatsAppLink(phone, message), [phone, message]);

  const corner = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  }[position];

  return (
    <div className={`fixed ${corner} z-40`}>
      {/* Mobile: Ícone pequeno */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          lg:hidden
          p-4
          bg-green-500 hover:bg-green-600 
          text-white rounded-full shadow-lg shadow-green-500/30
          transition-all duration-200 hover:scale-110 active:scale-95
          flex items-center justify-center
        "
        aria-label="Fale Connosco"
      >
        <Image 
          src={whatsapp} 
          alt="WhatsApp" 
          className="h-7 w-7" 
          priority 
        />
      </a>

      {/* Desktop: Ícone com label */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden lg:flex
          items-center gap-3 
          bg-green-500 hover:bg-green-600 
          text-white px-5 py-3 rounded-full 
          shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40
          transition-all duration-300 hover:scale-105
        "
        aria-label="Conversar no WhatsApp"
      >
        <Image 
          src={whatsapp} 
          alt="WhatsApp" 
          className="h-6 w-6" 
          priority 
        />
        <span className="font-medium">WhatsApp</span>
      </a>
    </div>
  );
}