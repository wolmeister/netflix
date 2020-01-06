import User from '~/models/User';

export const SIGN_IN = '@@auth/SIGN_IN';

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

export type AuthActionTypes = SignInAction;
