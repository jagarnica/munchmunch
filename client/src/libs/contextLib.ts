import { useContext, createContext } from 'react';

export interface AppContextInterface {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextInterface | null>(null);

export function useAppContext(): AppContextInterface | null {
  return useContext(AppContext);
}
