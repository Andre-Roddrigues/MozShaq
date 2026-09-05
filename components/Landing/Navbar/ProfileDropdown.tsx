// components/ProfileDropdown.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, FileText, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";


export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  
  const toggle = () => setOpen(!open);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = async () => {
    setOpen(false);
    await logout();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800">
        <div className="w-5 h-5 border-2 border-gray-300 border-t-brand-main rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const initials = getInitials(user.name);
  const userInitials = initials || "U";

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition group"
      >
        <div className="w-8 h-8 rounded-full bg-brand-main/20 flex items-center justify-center">
          <span className="text-sm font-semibold text-brand-main">
            {userInitials}
          </span>
        </div>
        <ChevronDown 
          size={16} 
          className={`text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* User Info Header */}
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-main/20 flex items-center justify-center">
                    <span className="text-base font-bold text-brand-main">
                      {userInitials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link
                  href="/user/perfil"
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition group"
                  onClick={() => setOpen(false)}
                >
                  <User size={18} className="text-gray-400 group-hover:text-brand-main transition" />
                  <span className="text-sm">Meu Perfil</span>
                </Link>
                
                <Link
                  href="/user/cursos"
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition group"
                  onClick={() => setOpen(false)}
                >
                  <FileText size={18} className="text-gray-400 group-hover:text-brand-main transition" />
                  <span className="text-sm">Meus Cursos</span>
                </Link>

                <div className="border-t border-gray-100 dark:border-gray-700 my-1" />
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition group"
                >
                  <LogOut size={18} className="text-red-500 group-hover:text-red-600 transition" />
                  <span className="text-sm">Sair da Conta</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}