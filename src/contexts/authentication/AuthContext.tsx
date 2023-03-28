import React from "react";
import { createContext } from "react";
import { LoginState, UserCredentials } from "../../hooks/authentication/types";
import { useState } from "react";
import { useAsyncStorage } from "../../hooks/authentication/useAsyncStorage";
import { Auth } from "../../services/authentication/authenticationEndpoints";
import { useAuth } from "../../hooks/authentication/useAuth";

const initialAuthContext = {
  loginState: {
    isLoading: false,
    user: null,
    error: null,
    isSignedIn: false,
    token: null,
  },
  login: () => {},
};

type Props = {
  children: React.ReactNode;
};

type AuthContext = {
  loginState: LoginState;
  login: (credentials: UserCredentials) => void;
};

export const AuthContext = createContext<AuthContext>(initialAuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const { loginState, login } = useAuth();

  return (
    <AuthContext.Provider value={{ loginState, login }}>
      {children}
    </AuthContext.Provider>
  );
};
