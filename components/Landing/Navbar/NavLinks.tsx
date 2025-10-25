"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Info } from "lucide-react";

interface NavLinksProps {
  activeLink: string;
  onLinkClick: (name: string) => void;
  isScrolled?: boolean;
}

const menuItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Áreas de Actuação", href: "#areas" },
  { name: "Contacto", href: "/#contacto" },
];

export default function NavLinks({ activeLink, onLinkClick, isScrolled = false }: NavLinksProps) {
  return (
    <div className="hidden md:flex space-x-8 font-medium">
      {menuItems.map((item) => {
        const isActive = activeLink === item.name;
        
        // Lógica para cores baseadas no scroll
        const getTextColor = () => {
          if (isActive) {
            return "text-brand-main dark:text-brand-lime";
          }
          if (isScrolled) {
            return "text-brand-blue dark:text-gray-200 hover:text-brand-main dark:hover:text-brand-lime";
          }
          return "text-white hover:text-brand-main dark:hover:text-brand-lime";
        };

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-1 transition-colors duration-300 ${getTextColor()}`}
            onClick={() => onLinkClick(item.name)}
          >
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}