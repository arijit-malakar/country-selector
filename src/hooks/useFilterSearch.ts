import { useContext } from "react";
import { FilterSearchContext } from "../contexts/FilterSearchContext";

export const useFilterSearch = () => {
  const context = useContext(FilterSearchContext);
  if (context === undefined)
    throw new Error(
      "FilterSearchContext was used outside of FilterSearchProvider"
    );
  return context;
};
