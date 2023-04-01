export interface User {
  id: Number;
  name: string;
  email: string;
  authToken?: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginState {
  isLoading: boolean;
  user?: null | User;
  error: any;
  isSignedIn: boolean;
  token: null | string;
}

export type LoginError = {
  error: "ERR_BAD_REQUEST" | "ERR_NETWORK";
};