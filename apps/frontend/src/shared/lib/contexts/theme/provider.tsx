import { ReactNode, useEffect } from 'react';

import { ThemeContext } from './context';
import { useLocalStorage } from '@/shared/lib/hooks';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage({ key: 'theme' });

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
      return;
    }

    setTheme('dark');
    document.body.setAttribute('data-theme', 'dark');
  }, [theme, setTheme]);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
