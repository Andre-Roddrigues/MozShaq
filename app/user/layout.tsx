import React from "react";
import Sidebar from "../../components/Landing/SideBar/SideBar";
import { SidebarProvider } from "../../context/SidebarContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen md:flex lg:flex  dark:bg-gray-900">
      {/* Sidebar fixa à esquerda */}

      {/* Conteúdo principal */}
      <Sidebar />
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
