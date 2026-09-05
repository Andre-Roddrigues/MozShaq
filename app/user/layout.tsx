import React from "react";
import Sidebar from "../../components/Landing/SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 min-h-0">
      {/* Sidebar fixa */}
      <div className="hidden lg:block fixed left-0 top-[60px] h-[calc(100vh-60px)] z-40">
        <Sidebar />
      </div>

      {/* Conteúdo principal com scroll */}
      <main className="flex-1 lg:ml-64 min-h-full overflow-y-auto">
        <div className="p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-900 min-h-[calc(100vh-60px)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;