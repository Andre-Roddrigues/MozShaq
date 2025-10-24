"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Info } from "lucide-react";

interface NavLinksProps {
  activeLink: string;
  onLinkClick: (name: string) => void;
}

const menuItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Áreas de Formação", href: "/cursos" },
  { name: "Como Funciona", href: "/#funcionamento" },
  { name: "Benefícios", href: "/#beneficios" },
  { name: "Contacto", href: "/#contacto" },
];

export default function NavLinks({ activeLink, onLinkClick }: NavLinksProps) {
  return (
    <div className="hidden md:flex space-x-8 font-medium">
      {menuItems.map((item) => {
        // const Icon = item.icon;
        const isActive = activeLink === item.name;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-1 text-gray-600 hover:text-brand-main dark:hover:text-brand-lime transition ${
              isActive ? "text-brand-main dark:text-brand-lime" : ""
            }`}
            onClick={() => onLinkClick(item.name)}
          >
            {/* <Icon className="w-4 h-4" /> */}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
