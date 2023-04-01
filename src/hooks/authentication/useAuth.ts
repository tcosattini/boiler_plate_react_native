import { useState } from "react";
import { getLocaleLoginErrorMessage } from "../../locales/error/loginError/error.locale";
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
      console.log(e?.toJSON().code);
      setLoginState({
        isLoading: false,
        isSignedIn: false,
        error: getLocaleLoginErrorMessage({
          error: e?.toJSON().code,
          localeCode: "fr",
        }),
        token: null,
      });
    }
  };

  const resetLoginState = () => {
    setLoginState(loginInitialState);
  };

  return { login, loginState, resetLoginState };
};
