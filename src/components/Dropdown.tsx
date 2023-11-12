import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useFilterSearch } from "../hooks/useFilterSearch";

const Dropdown: React.FC = () => {
  const { selectedRegion, setQuery, setSelectedRegion } = useFilterSearch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownEl.current &&
        !dropdownEl.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownEl}>
      <div
        className="dropdown-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedRegion ? selectedRegion : "Filter By Region"}{" "}
        <IoChevronDown className="dropdown-arrow" />
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          {["Africa", "America", "Asia", "Europe", "Ocenia"].map(
            (region, index) => (
              <div
                className="dropdown-item"
                key={index}
                onClick={() => {
                  setSelectedRegion(region);
                  setShowDropdown(false);
                  setQuery("");
                }}
              >
                {region}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
