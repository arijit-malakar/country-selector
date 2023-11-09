import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import Button from "./Button";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h2 className="heading-logo">Where in the world?</h2>
      <Button
        type="theme-switch"
        icon={
          isDarkMode ? (
            <IoMoon className="moon-icon" />
          ) : (
            <IoMoonOutline className="moon-icon" />
          )
        }
        onClick={toggleTheme}
      >
        Dark Mode
      </Button>
    </header>
  );
};

export default Header;
