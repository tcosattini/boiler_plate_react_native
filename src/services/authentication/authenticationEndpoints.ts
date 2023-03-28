import { UserCredentials } from "../../hooks/authentication/types";
import { post } from "../api/base";
export const Auth = {
  login: (credentials: UserCredentials) => {
    return post("api/login_check", credentials);
  },
};
