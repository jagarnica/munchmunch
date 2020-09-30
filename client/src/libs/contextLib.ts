import { useContext, createContext } from 'react';
import { User } from 'types/';

export interface AppContextInterface {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}
export const AppContext = createContext<Partial<AppContextInterface>>({});

export function useAppContext(): Partial<AppContextInterface> {
  return useContext(AppContext);
}
