import { SignInPayload, AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';

export function signIn(payload: SignInPayload): AuthActionTypes {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signOut(): AuthActionTypes {
  return {
    type: SIGN_OUT,
  };
}
