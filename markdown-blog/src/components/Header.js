import React, { useContext } from "react";
import styles from "../css/header.module.css";
import { LogoIcon, MoonIcon, SunIcon } from "../assets/icon";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={`container ${styles["header__container"]}`}>
        <div className={styles["logo-wrapper"]}>
          <LogoIcon />
          <span>Code Snippets</span>
        </div>
        <button
          className="icon"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
