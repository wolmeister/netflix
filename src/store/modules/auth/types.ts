import User from '~/models/User';

export const SIGN_IN = '@@auth/SIGN_IN';
export const SIGN_OUT = '@@auth/SIGN_OUT';

export type AuthState = {
  user: User | null;
  error: string | null;
};

export type SignInPayload = {
  email: string;
  password: string;
};

interface SignInAction {
  type: typeof SIGN_IN;
  payload: SignInPayload;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type AuthActionTypes = SignInAction | SignOutAction;
