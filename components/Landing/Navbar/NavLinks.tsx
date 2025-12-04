"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinksProps {
  activeLink: string;
  onLinkClick: (name: string) => void;
  isScrolled?: boolean;
  isScrolling?: boolean;
  isMobile?: boolean;
}

const menuItems = [
  { name: "Início", id: "inicio", href: "/#inicio", type: "section" },
  { name: "Sobre", id: "sobre", href: "/#sobre", type: "section" },
  { name: "Áreas de Actuação", id: "areas", href: "/#areas", type: "section" },
  { name: "Teams", id: "teams", href: "/#teams", type: "section" },
  { name: "Serviços", id: "services-overview", href: "/#services-overview", type: "section" },
  { name: "Cursos", id: "/cursos",  type: "page" },
  { name: "Contacto", id: "/contacte-nos",  type: "page" },
];

export default function NavLinks({
  activeLink,
  onLinkClick,
  isScrolled = false,
  isScrolling = false,
  isMobile = false,
}: NavLinksProps) {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClick = async (
    e: React.MouseEvent,
    itemName: string,
    itemId: string,
    itemType: string
  ) => {
    e.preventDefault();

    if (itemType === "page") {
      router.push(itemId);
      onLinkClick(itemName);
      return;
    }

    onLinkClick(itemName);

    if (pathname === "/") {
      scrollToSection(itemId);
    } else {
      router.push(`/#${itemId}`);

      // delay para garantir scroll após carregamento
      setTimeout(() => scrollToSection(itemId), 400);
    }
  };

  const getTextColor = (isActive: boolean) => {
    if (isActive) return "text-brand-main font-semibold";
    return "text-gray-700 dark:text-gray-300 hover:text-brand-main";
  };

  return (
    <div
      className={`${
        isMobile ? "flex flex-col space-y-6" : "hidden md:flex space-x-8"
      } font-medium`}
    >
      {menuItems.map((item) => {
        const isActive = activeLink === item.name;
        const isDisabled = isScrolling && isActive;

        return (
          <button
            key={item.name}
            onClick={(e) => handleClick(e, item.name, item.id, item.type)}
            className={`flex items-center ${
              getTextColor(isActive)
            } transition-all duration-300 ${
              isDisabled ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
            } ${isMobile ? "text-lg py-2 text-left" : "text-base"}`}
            disabled={isDisabled}
          >
            <div className="relative">
              <span className={`transition-all duration-300 ${isActive ? "font-semibold" : ""}`}>
                {item.name}
              </span>

              {isActive && !isMobile && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-main"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
