import { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeType } from './types';
import theme from '../theme.config';

interface ThemeContextProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: ThemeType;
  changeActiveTheme: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [activeTheme, setActiveTheme] = useState(theme['light']);

  const changeActiveTheme = (name: string) => {
    if (theme[name]) setActiveTheme(theme[name]);
  };

  const contextValue = {
    theme: activeTheme,
    changeActiveTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useThemeCxt(): ThemeContextProps {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error('useThemeCxt must be used within a ThemeContextProvider');
  return context;
}
