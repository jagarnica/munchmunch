import { useContext, createContext } from 'react';
import { User } from 'types/';
import { authReducerActions } from './reducers';

export interface AppContextInterface {
  isAuthenticated: boolean;
  user: User | undefined;
}
export interface AppContectStoreInterface {
  state: AppContextInterface;
  dispatch: React.Dispatch<authReducerActions>;
}
export const AppContext = createContext<Partial<AppContectStoreInterface>>({});

export function useAppContext(): Partial<AppContectStoreInterface> {
  return useContext(AppContext);
}
