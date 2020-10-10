import { User } from 'types/';
import { AppContextInterface } from './contextLib';

export type authReducerActions =
  | {
      type: 'LOGIN_SUCCESS';
      payload: {
        user: User;
      };
    }
  | { type: 'LOGOUT_SUCCESS' };
export const authReducer = (prevState: AppContextInterface, action: authReducerActions): AppContextInterface => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...prevState,
        isAuthenticated: true,
        user: action.payload?.user,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...prevState,
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return prevState;
  }
};
