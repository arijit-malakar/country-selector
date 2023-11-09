import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error("NavigationContext was used outside of NavigationProvider");
  return context;
};
