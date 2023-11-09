import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h2 className="heading-logo">Where in the world?</h2>
      <button
        className="btn btn-with-icon btn-theme-toggle"
        onClick={toggleTheme}
      >
        <span className="btn-icon-wrapper">
          {isDarkMode ? (
            <IoMoon className="moon-icon" />
          ) : (
            <IoMoonOutline className="moon-icon" />
          )}
        </span>
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
