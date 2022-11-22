import React from "react";
import { MdOutlineDarkMode,MdOutlineLightMode} from "react-icons/md";

function Header({ setDarkMode, darkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="header">
      <h1>Notes</h1>
      <div
        onClick={handleDarkMode}
        className={`mode--toggle ${darkMode ? "dark" : ""}`}
      >
        {darkMode ? <MdOutlineDarkMode size="1.6em" /> : <MdOutlineLightMode size="1.6em" />}
      </div>
    </header>
  );
}

export default Header;
