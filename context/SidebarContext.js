import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({});

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  function changeSidebar() {
    setSidebarCollapsed(!sidebarCollapsed);
  }

  return (
    <SidebarContext.Provider value={{ changeSidebar, toggleSidebar, isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
