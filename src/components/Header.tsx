import { IoMoonOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <h2 className="heading-logo">Where in the world?</h2>
      <button className="btn-theme-toggle">
        <IoMoonOutline className="moon-icon" />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
