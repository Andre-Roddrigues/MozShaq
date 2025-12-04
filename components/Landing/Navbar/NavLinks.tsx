"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface NavLinksProps {
  activeLink: string;
  onLinkClick: (name: string) => void;
  isScrolled?: boolean;
  isScrolling?: boolean;
  isMobile?: boolean;
}

const menuItems = [
  { name: "Início", id: "inicio", type: "section" },
  { name: "Sobre", id: "sobre", type: "section" },
  { name: "Áreas de Actuação", id: "areas", type: "section" },
  { name: "Teams", id: "teams", type: "section" },
  { name: "Serviços", id: "services-overview", type: "section" },
  { name: "Cursos", id: "/cursos", type: "page" },
  { name: "Contacto", id: "/contacte-nos", type: "page" },
];

export default function NavLinks({ 
  activeLink, 
  onLinkClick, 
  isScrolled = false, 
  isScrolling = false,
  isMobile = false 
}: NavLinksProps) {
  
  const handleClick = (e: React.MouseEvent, itemName: string, itemId: string, itemType: string) => {
    e.preventDefault();
    
    if (itemType === "page") {
      // Navegação para página
      onLinkClick(itemName);
    } else {
      // Scroll para seção
      onLinkClick(itemName);
    }
  };

  // Lógica para cores baseadas no scroll e estado ativo
  const getTextColor = (isActive: boolean) => {
    if (isActive) {
      return "text-brand-main dark:text-brand-main font-semibold";
    }
    if (isScrolled) {
      return "text-gray-700 dark:text-gray-300 hover:text-brand-main dark:hover:text-brand-main";
    }
    return "text-gray-700 dark:text-gray-300 hover:text-brand-main dark:hover:text-brand-main";
  };

  const getLinkContent = (itemName: string, isActive: boolean) => (
    <div className="relative">
      <span className={`transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}>
        {itemName}
      </span>
      {isActive && !isMobile && (
        <motion.span 
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-main dark:bg-brand-main"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {isActive && isMobile && (
        <motion.div 
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-main rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );

  return (
    <div className={`${isMobile ? 'flex flex-col space-y-6' : 'hidden md:flex space-x-8'} font-medium`}>
      {menuItems.map((item) => {
        const isActive = activeLink === item.name;
        const isDisabled = isScrolling && isActive;
        
        if (item.type === "page") {
          return (
            <a
              key={item.name}
              href={item.id}
              onClick={(e) => handleClick(e, item.name, item.id, item.type)}
              className={`flex items-center ${getTextColor(isActive)} transition-all duration-300 ${
                isDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
              } ${isMobile ? 'text-lg py-2' : 'text-base'}`}
              aria-current={isActive ? "page" : undefined}
            >
              {getLinkContent(item.name, isActive)}
            </a>
          );
        }

        // Para seções
        return (
          <button
            key={item.name}
            onClick={(e) => handleClick(e, item.name, item.id, item.type)}
            className={`flex items-center ${getTextColor(isActive)} transition-all duration-300 ${
              isDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
            } ${isMobile ? 'text-lg py-2 text-left' : 'text-base'}`}
            aria-current={isActive ? "page" : undefined}
            disabled={isDisabled}
          >
            {getLinkContent(item.name, isActive)}
          </button>
        );
      })}
    </div>
  );
}