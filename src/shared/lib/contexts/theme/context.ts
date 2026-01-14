import { createContext, useContext } from 'react';

interface ThemeContextData {
  theme: string | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: null,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Can not use 'useThemeContext' outside 'ThemeProvider'.");
  }

  return { theme, toggleTheme };
};
