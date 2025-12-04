"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Início");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  // Configuração dos links e mapeamento
  const navLinksConfig = [
    { name: "Início", sectionId: "inicio" },
    { name: "Sobre", sectionId: "sobre" },
    { name: "Áreas de Actuação", sectionId: "areas" },
    { name: "Teams", sectionId: "teams" },
    { name: "Serviços", sectionId: "services-overview" },
    { name: "Cursos", pagePath: "/cursos" },
    { name: "Contacto", pagePath: "/contacte-nos" },
  ];

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Atualiza a seção ativa baseada no scroll
      if (!isScrolling) {
        updateActiveSection();
      }
    };

    const handleScrollStart = () => {
      setIsScrolling(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleScrollEnd = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        updateActiveSection();
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('scroll', handleScrollEnd, { passive: true });

    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('scroll', handleScrollEnd);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (scrollAnimationRef.current) cancelAnimationFrame(scrollAnimationRef.current);
    };
  }, [isScrolling]);

  // Função para atualizar a seção ativa baseada no scroll
  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const scrollPosition = window.scrollY + 100;
    const windowHeight = window.innerHeight;

    let closestSection = { id: "inicio", distance: Infinity };

    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      // Verifica se a seção está visível ou próxima
      const isInView = scrollPosition >= sectionTop && 
                       scrollPosition < sectionTop + sectionHeight;
      
      if (isInView) {
        closestSection = { id: sectionId, distance: 0 };
      } else {
        // Calcula a distância até a seção
        const distance = Math.abs(sectionTop - scrollPosition);
        if (distance < closestSection.distance) {
          closestSection = { id: sectionId, distance };
        }
      }
    });

    // Mapeia IDs das seções para nomes de links
    const sectionIdToLinkName: Record<string, string> = {
      'inicio': 'Início',
      'sobre': 'Sobre',
      'areas': 'Áreas de Actuação',
      'team': 'Teams',
      'teams': 'Teams',
      'TeamSection': 'Teams',
      'services-overview': 'Serviços',
      'servicos': 'Serviços',
      'cursos': 'Cursos',
      'contacto': 'Contacto',
    };

    const linkName = sectionIdToLinkName[closestSection.id] || 'Início';
    
    if (activeLink !== linkName && !isScrolling) {
      setActiveLink(linkName);
    }
  };

  // Função de scroll suave inteligente (sobe ou desce)
  const smoothScrollTo = (targetId: string, duration: number = 1000) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      if (targetId === "inicio") {
        scrollToTop(duration);
      }
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 80; // Offset
    let startTime: number | null = null;

    // Determina se está descendo ou subindo
    const isScrollingDown = distance > 0;
    
    // Ajusta a função de easing baseado na direção
    const getEasing = (t: number) => {
      if (isScrollingDown) {
        // Mais suave ao descer
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      } else {
        // Mais rápido ao subir
        return 1 - Math.pow(1 - t, 3);
      }
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = getEasing(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (timeElapsed < duration) {
        scrollAnimationRef.current = requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
        updateActiveSection();
      }
    };

    setIsScrolling(true);
    scrollAnimationRef.current = requestAnimationFrame(animation);
  };

  const scrollToTop = (duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    let startTime: number | null = null;

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (timeElapsed < duration) {
        scrollAnimationRef.current = requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
        updateActiveSection();
      }
    };

    setIsScrolling(true);
    scrollAnimationRef.current = requestAnimationFrame(animation);
  };

  const handleNavigation = (name: string) => {
    // Cancela qualquer animação em andamento
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      setIsScrolling(false);
    }

    const linkConfig = navLinksConfig.find(item => item.name === name);
    
    if (!linkConfig) return;
    
    if (linkConfig.pagePath) {
      // Navegação para página separada
      setIsMobileOpen(false);
      window.location.href = linkConfig.pagePath;
    } else if (linkConfig.sectionId) {
      // Scroll para seção na mesma página
      setIsMobileOpen(false);
      setActiveLink(name);
      smoothScrollTo(linkConfig.sectionId, 1000);
    }
  };

  const mobileSidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const checkAuthToken = () => {
    return document.cookie
      .split("; ")
      .some(row => row.startsWith("auth_token="));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    setIsLoggedIn(checkAuthToken());

    const authCheckInterval = setInterval(() => {
      setIsLoggedIn(checkAuthToken());
    }, 1000);

    return () => clearInterval(authCheckInterval);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm" 
        : "bg-white dark:bg-transparent"
    }`}>
      <div className="flex max-w-7xl mx-auto px-6 py-3 items-center justify-end md:justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="hidden text-2xl font-bold text-brand-main dark:text-brand-lime md:flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("Início");
          }}
        >
          <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-brand-main" : "text-brand-main"
          }`}>
            Moz<span className="text-brand-blue">Shaq</span>
          </span>
        </Link>

        {/* Links desktop */}
        <NavLinks 
          activeLink={activeLink} 
          onLinkClick={handleNavigation}
          isScrolled={isScrolled}
          isScrolling={isScrolling}
        />

        {/* Ações */}
        <div className="flex items-center space-x-3">
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className={`px-4 py-2 rounded-lg border font-medium hover:bg-brand-main hover:text-white transition ${
                  isScrolled 
                    ? "border-brand-main text-brand-main hover:bg-brand-main hover:text-white" 
                    : "border-brand-main text-brand-main hover:bg-brand-main hover:text-slate-800"
                }`}
              >
                Entrar
              </Link>
              <Link
                href="/registro"
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  isScrolled 
                    ? "bg-brand-main text-white hover:bg-brand-main/90" 
                    : "bg-brand-main text-white hover:bg-brand-main/90"
                }`}
              >
                Registro
              </Link>
            </>
          ) : (
            <ProfileDropdown />
          )}

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? "bg-gray-300 dark:bg-gray-800" 
                : "bg-gray-300 dark:bg-gray-800/50"
            }`}
            aria-label="Abrir menu"
          >
            <Menu className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 dark:text-gray-200" 
                : "text-gray-700 dark:text-gray-200"
            }`} />
          </button>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-screen bg-black/70 z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileSidebarVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <span 
                    className="ml-3 text-xl font-bold text-brand-main dark:text-white cursor-pointer"
                    onClick={() => handleNavigation("Início")}
                  >
                    Moz<span className="text-brand-blue">Shaq</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Controles mobile */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
              </div>

              {/* Links mobile */}
              <nav className="flex-1 bg-white dark:bg-gray-900 px-4 py-6">
                <NavLinks 
                  activeLink={activeLink} 
                  onLinkClick={handleNavigation} 
                  isMobile={true}
                />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;