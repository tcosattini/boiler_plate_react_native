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
  error: null | LoginError;
  isSignedIn: boolean;
  token: null | string;
}

export enum LoginError {
  ERR_BAD_REQUEST = "Identifiants invalides",
}