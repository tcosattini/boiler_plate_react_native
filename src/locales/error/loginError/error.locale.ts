import { LoginError } from "../../../hooks/authentication/types";
import { Locale } from "../../locales";

type LocaleLoginError = {
  [error in LoginError["error"]]: {
    [code in Locale["code"]]?: { errorMessage: string };
  };
};

type ErrorMessage = {
  errorMessage: string;
};

const loginErrorMessages: LocaleLoginError = {
  ERR_BAD_REQUEST: {
    fr: { errorMessage: "Identifiants incorrects" },
    en: { errorMessage: "Incorrect login" },
  },
  ERR_NETWORK: {
    fr: { errorMessage: "Service indisponible" },
    en: { errorMessage: "Network error" },
  },
};
type Props = {
  error: LoginError["error"];
  localeCode: Locale["code"];
};
export const getLocaleLoginErrorMessage = ({ error, localeCode }: Props) => {
  let selectedError = Object.entries(loginErrorMessages).find(
    (err) => err[0] === error
  );
  if (selectedError?.[1][localeCode])
    return selectedError?.[1][localeCode]?.errorMessage;
  return "Untranslated login error";
};
