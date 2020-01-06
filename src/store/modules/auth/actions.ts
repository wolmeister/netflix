import { SignInPayload, AuthActionTypes, SIGN_IN } from './types';

export function signIn(payload: SignInPayload): AuthActionTypes {
  return {
    type: SIGN_IN,
    payload,
  };
}
