"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, FileText } from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <User className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700"
          >
            <Link
              href="/user/perfil"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => setOpen(false)}
            >
              <User className="w-4 h-4 mr-2" />
              <span>Perfil</span>
            </Link>
            <Link
              href="/user/candidaturas"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => setOpen(false)}
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Candidaturas</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
