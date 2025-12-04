"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";
import logo from "@/public/images/logo.png";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Início");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);

  const navLinksConfig = [
    { name: "Início", sectionId: "inicio" },
    { name: "Sobre", sectionId: "sobre" },
    { name: "Áreas de Actuação", sectionId: "areas" },
    { name: "Teams", sectionId: "teams" },
    { name: "Serviços", sectionId: "services-overview" },
    { name: "Cursos", pagePath: "/cursos" },
    { name: "Contacto", pagePath: "/contacte-nos" },
  ];

  // Detecta scroll para background e seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    updateActiveSection(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Atualiza seção ativa
  const updateActiveSection = () => {
    const sections = document.querySelectorAll("section[id], div[id]");
    const scrollPosition = window.scrollY + 100;

    let currentSection = "inicio";

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute("id") || "";

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    const sectionMap: Record<string, string> = {
      inicio: "Início",
      sobre: "Sobre",
      areas: "Áreas de Actuação",
      teams: "Teams",
      "services-overview": "Serviços",
      servicos: "Serviços",
      cursos: "Cursos",
      contacto: "Contacto",
    };

    setActiveLink(sectionMap[currentSection] || "Início");
  };

  // Scroll suave com easing
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const navbarOffset = 80;
    const start = window.pageYOffset;
    const end = targetElement.getBoundingClientRect().top + start - navbarOffset;
    const duration = 600; // ms
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start + (end - start) * easedProgress);

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(animate);
      } else {
        scrollAnimationRef.current = null;
      }
    };

    scrollAnimationRef.current = requestAnimationFrame(animate);
  };

  // Navegação ao clicar
  const handleNavigation = (name: string) => {
    const linkConfig = navLinksConfig.find((item) => item.name === name);
    if (!linkConfig) return;

    if (linkConfig.pagePath) {
      window.location.href = linkConfig.pagePath;
    } else if (linkConfig.sectionId) {
      setActiveLink(name);
      setIsMobileOpen(false);

      setTimeout(() => {
        smoothScrollTo(linkConfig.sectionId!);
      }, 50);
    }
  };

  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const authCheckInterval = setInterval(() => {
      setIsLoggedIn(document.cookie.split("; ").some((row) => row.startsWith("auth_token=")));
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

  const mobileSidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-transparent"
      }`}
    >
      <div className="flex max-w-7xl mx-auto px-6 py-3 items-center justify-end md:justify-between">
        {/* Logo */}
       <Link
  href="/"
  className="relative hidden md:flex w-32 h-16 cursor-pointer" // container precisa de tamanho
  onClick={(e) => {
    e.preventDefault();
    handleNavigation("Início");
  }}
>
  <Image
    src="/images/logo.PNG" // caminho relativo em public/
    alt="UniMentor logo"
    fill
    className="object-contain" // evita cortar a imagem
    sizes="128px"
  />
</Link>




        {/* Links desktop */}
        <NavLinks
          activeLink={activeLink}
          onLinkClick={handleNavigation}
          isScrolled={isScrolled}
        />

        {/* Ações */}
        <div className="flex items-center space-x-3">
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border font-medium hover:bg-brand-main hover:text-white transition"
              >
                Entrar
              </Link>
              <Link
                href="/registro"
                className="px-4 py-2 rounded-lg font-medium bg-brand-main text-white hover:bg-brand-main/90 transition"
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
            className="md:hidden p-2 rounded-lg bg-gray-300 dark:bg-gray-800/50"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
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
                <span
                  className="ml-3 text-xl font-bold text-brand-main dark:text-white cursor-pointer"
                  onClick={() => handleNavigation("Início")}
                >
                  Moz<span className="text-brand-blue">Shaq</span>
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
              </div>

              <nav className="flex-1 bg-white dark:bg-gray-900 px-4 py-6">
                <NavLinks activeLink={activeLink} onLinkClick={handleNavigation} isMobile />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
