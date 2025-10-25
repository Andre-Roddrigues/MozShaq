"use client";

//Importacao de Librarys
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Briefcase, User, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/images/prometlogo.png";
//Componentes Externos
import NavLinks from "./NavLinks";
// import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDropdown from "./ProfileDropdown";
// import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Início");
  const [isScrolled, setIsScrolled] = useState(false);
//   const [language, setLanguage] = useState("PT");
// const { language, setLanguage } = useLanguage();

  // Effect para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Muda o background quando scroll for maior que 50px
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mobileSidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const checkAuthToken = () => {
    const hasAuthToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));
    return !!hasAuthToken;
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // const savedLanguage = localStorage.getItem("language") || "PT";
    // setLanguage(savedLanguage);

    setIsLoggedIn(checkAuthToken());

    const authCheckInterval = setInterval(() => {
      setIsLoggedIn(checkAuthToken());
    }, 1000);

    return () => clearInterval(authCheckInterval);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // const toggleLanguage = (lang: string) => {
  //   setLanguage(lang);
  //   localStorage.setItem("language", lang);
  // };

  const handleNavigation = (name: string) => {
    setActiveLink(name);
    setIsMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent dark:bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-brand-main dark:text-brand-lime flex items-center"
        >
          {/* <Image src={logo} alt="PROMET" width={50} height={50} /> */}
          <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-brand-main text-xl" : "text-brand-main"
          }`}>
            Moz<span className={isScrolled ? "text-brand-blue" : "text-brand-blue"}>Shaq</span>
          </span>
        </Link>

        {/* Links desktop */}
       <NavLinks 
          activeLink={activeLink} 
          onLinkClick={handleNavigation}
          isScrolled={isScrolled}
        />

        {/* Ações */}
        <div className="flex items-center space-x-3">
          {/* <LanguageSwitcher /> */}
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className={`px-4 py-2 rounded-lg border font-medium hover:bg-brand-main hover:text-white transition ${
                  isScrolled 
                    ? "border-brand-main text-brand-main hover:bg-brand-main hover:text-white" 
                    : "border-white text-white hover:bg-white hover:text-slate-800"
                }`}
              >
                Entrar
              </Link>
              <Link
                href="/registro"
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  isScrolled 
                    ? "bg-brand-main text-white hover:bg-brand-main/90" 
                    : "bg-white text-slate-800 hover:bg-white/90"
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
                ? "bg-gray-100 dark:bg-gray-800" 
                : "bg-white/20 dark:bg-gray-800/50"
            }`}
          >
            <Menu className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled 
                ? "text-gray-700 dark:text-gray-200" 
                : "text-white dark:text-gray-200"
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
                  {/* <div className="w-8 h-8 rounded-lg bg-brand-main flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div> */}
                  <span className="ml-3 text-xl font-bold text-brand-main dark:text-white">
                    Moz<span className="text-brand-blue">Shaq</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Controles mobile */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                {/* <LanguageSwitcher /> */}
                <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
              </div>

              {/* Links mobile */}
              <nav className="flex-1 bg-white dark:bg-gray-900 px-4 py-6">
                <NavLinks activeLink={activeLink} onLinkClick={handleNavigation} />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;