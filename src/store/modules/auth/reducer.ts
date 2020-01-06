import { AuthState, AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';

import { getUser } from '~/services/user';

const initialState: AuthState = {
  user: null,
  error: null,
};

export default function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case SIGN_IN: {
      const { email, password } = action.payload;
      if (!email || !password) {
        return {
          user: null,
          error: 'Please enter the email and password.',
        };
      }
      const user = getUser(email);
      if (!user || user.password !== password) {
        return {
          user: null,
          error: 'Invalid email or password.',
        };
      }
      return {
        user,
        error: null,
      };
    }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
