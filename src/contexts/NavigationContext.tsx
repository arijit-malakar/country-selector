import { ReactElement, createContext, useEffect, useState } from "react";

interface NavigationContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

interface NavigationProviderProps {
  children: ReactElement;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
