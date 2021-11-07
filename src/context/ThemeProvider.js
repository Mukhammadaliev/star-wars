import React, { createContext, useContext, useState } from "react";
import { changeBG } from "../hooks/useChangeTheme";

export const DEFAULT_THEME = 'default';
export const DARK_THEME = 'dark'

const ThemeContext = createContext();
const ThemeProvider = ({ children, ...props }) => {

  const [theme, setTheme] = useState(null)

  const change = name => {
    setTheme(name);
    changeBG(name)
  }
  return (
    <ThemeContext.Provider
      value={
        {
          theme,
          change
        }
      }
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext)