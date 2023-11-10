import { ReactElement, createContext, useState } from "react";

interface FilterSearchContextType {
  query: string;
  selectedRegion: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterSearchContext = createContext<
  FilterSearchContextType | undefined
>(undefined);

interface FilterSearchProviderProps {
  children: ReactElement;
}

export const FilterSearchProvider: React.FC<FilterSearchProviderProps> = ({
  children,
}) => {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const value: FilterSearchContextType = {
    query,
    selectedRegion,
    setQuery,
    setSelectedRegion,
  };

  return (
    <FilterSearchContext.Provider value={value}>
      {children}
    </FilterSearchContext.Provider>
  );
};
