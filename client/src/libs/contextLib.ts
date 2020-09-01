import { useContext, createContext } from 'react';

export interface AppContextInterface {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<Partial<AppContextInterface>>({});

export function useAppContext(): Partial<AppContextInterface> {
  return useContext(AppContext);
}
