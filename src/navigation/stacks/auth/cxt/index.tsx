import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);

  const contextValue = {
    authenticated,
    setAuthenticated,
  };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuthCxt(): AuthContextProps {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuthCxt must be used within a AuthContextProvider');
  return context;
}
