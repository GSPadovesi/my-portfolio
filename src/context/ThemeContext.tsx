import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme, darkTheme } from "../styles/Themes";

type ThemeName = "theme" | "darkTheme";

const themeMap = {
  theme,
  darkTheme
};

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}


export const ThemeContext = createContext<ThemeContextType>({
  themeName: "theme",
  setThemeName: () => { },
});


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>("theme");

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={themeMap[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};