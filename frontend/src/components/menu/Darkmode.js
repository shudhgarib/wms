import React from "react";
import {useEffect, useState} from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="DarkTheme">
        <a href="#" className="btn" onClick={() => toggleTheme()}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/stickers/100/black-and-white.png"
            alt="black-and-white"
          />
        </a>
      </div>
    </>
  );
};

export default Darkmode;
