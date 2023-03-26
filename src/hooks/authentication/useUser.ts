import { useContext } from "react";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { User } from "./types";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  return { user };
};
