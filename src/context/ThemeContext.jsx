/* eslint-disable react/prop-types */
import { useState, useCallback, createContext } from "react";

import { getData, saveData } from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const ThemeContext = createContext();

const isCurrentThemeDark = getData("isDark");
const initialValue = isCurrentThemeDark !== null ? isCurrentThemeDark : false;

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(initialValue);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    saveData("isDark", isDark);
  }, [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
