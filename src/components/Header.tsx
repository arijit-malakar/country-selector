import { IoMoonOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <h2>Where in the world?</h2>
      <button className="btn-theme-toggle">
        <IoMoonOutline />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
