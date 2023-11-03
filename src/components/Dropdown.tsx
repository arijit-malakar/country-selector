import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface DropdownProps {
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

function Dropdown({ setSelectedRegion }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Filter By Region <IoChevronDown className="dropdown-arrow" />
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
}

export default Dropdown;
