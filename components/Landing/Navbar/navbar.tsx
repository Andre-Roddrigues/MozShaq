"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Home, Users, Briefcase, BookOpen, Phone, Info, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Início");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);

  const navLinksConfig = [
    { name: "Início", sectionId: "inicio", icon: Home },
    { name: "Sobre", sectionId: "sobre", icon: Info },
    { name: "Consultoria", sectionId: "areas", icon: Briefcase },
    { name: "Teams", sectionId: "teams", icon: Users },
    { name: "Serviços", sectionId: "services-overview", icon: Wrench },
    { name: "Cursos", pagePath: "/cursos", icon: BookOpen },
    { name: "Contacto", pagePath: "/contacte-nos", icon: Phone },
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
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-32 h-12 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("Início");
            }}
          >
            <Image
              src="/images/logom.png"
              alt="MozShaq logo"
              fill
              className="object-contain"
              sizes="128px"
              priority
            />
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks
              activeLink={activeLink}
              onLinkClick={handleNavigation}
              isScrolled={isScrolled}
            />
          </div>

          {/* Ações */}
          <div className="flex items-center space-x-3">
            <span className="md:flex hidden">
            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            </span>
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="hidden dark:text-white sm:inline-block px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  href="/registro"
                  className="hidden sm:inline-block px-4 py-2 rounded-lg text-sm font-medium bg-brand-main text-white hover:bg-brand-main/90 transition-colors"
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
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileSidebarVariants}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("Início");
                    setIsMobileOpen(false);
                  }}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/logom.png"
                      alt="MozShaq logo"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">MozShaq</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Consultoria & Formação</div>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-1 px-4">
                  {navLinksConfig.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeLink === item.name;
                    
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          handleNavigation(item.name);
                          setIsMobileOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-brand-main/10 text-brand-main dark:bg-brand-main/20"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="font-medium text-sm">{item.name}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-brand-main" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* User Actions Section */}
                <div className="mt-8 px-4">
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Tema
                      </span>
                      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
                    </div>

                    {!isLoggedIn ? (
                      <div className="space-y-3">
                        <Link
                          href="/login"
                          onClick={() => setIsMobileOpen(false)}
                          className="block w-full py-3 px-4 text-center rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          Entrar na Conta
                        </Link>
                        <Link
                          href="/registro"
                          onClick={() => setIsMobileOpen(false)}
                          className="block w-full py-3 px-4 text-center rounded-lg bg-brand-main text-white text-sm font-medium hover:bg-brand-main/90 transition-colors"
                        >
                          Criar Conta
                        </Link>
                      </div>
                    ) : (
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brand-main/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-brand-main" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              Utilizador
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Conta ativa
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            // Handle logout
                            setIsMobileOpen(false);
                          }}
                          className="w-full py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          Terminar Sessão
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;