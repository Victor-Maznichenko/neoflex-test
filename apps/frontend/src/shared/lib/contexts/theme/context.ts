import { createContext } from 'react';

interface ThemeContextData {
  theme: string | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: null,
  toggleTheme: () => {}
});
