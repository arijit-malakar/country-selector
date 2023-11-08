import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface DropdownProps {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedRegion,
  setSelectedRegion,
  setQuery,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown">
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
