import React from "react";
import { useState, useEffect } from "react";

const ThemeContext = React.createContext([{}, () => {}]);

const ThemeContextProvider = (props) => {
  document.documentElement.setAttribute("data-theme", "light");
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);
  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
