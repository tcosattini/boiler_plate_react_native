import { useState } from "react";
import { Auth } from "../../services/authentication/authenticationEndpoints";
import { LoginState, UserCredentials } from "./types";
import { useAsyncStorage } from "./useAsyncStorage";
const loginInitialState = {
  isLoading: false,
  user: null,
  error: null,
  isSignedIn: false,
  token: null,
};

export const useAuth = () => {
  const { value, setStorageItem } = useAsyncStorage();
  const [loginState, setLoginState] = useState<LoginState>(loginInitialState);
  const login = async (credentials: UserCredentials) => {
    try {
      setLoginState({ ...loginState, isLoading: true });
      const response = await Auth.login(credentials);
      setStorageItem("token", response.data.token);
      setLoginState({
        isLoading: false,
        isSignedIn: true,
        error: null,
        token: value,
      });
    } catch (e: any) {
      setLoginState({
        isLoading: false,
        isSignedIn: false,
        error: e?.toJSON().code,
        token: null,
      });
    }
  };

  return { login, loginState };
};
