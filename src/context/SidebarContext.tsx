import { useState, createContext, ReactNode } from "react";

type SiderbarProviderProps = {
  children: ReactNode;
};

type SidebarContextProps = {
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  isOpen: boolean;
};

export const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvider({ children }: SiderbarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenSidebar() {
    setIsOpen(true);
  }

  function handleCloseSidebar() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{
        handleOpenSidebar,
        handleCloseSidebar,
        isOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
