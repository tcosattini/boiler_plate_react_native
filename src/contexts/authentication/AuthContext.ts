import { createContext } from "react";
import { AuthContextType } from "./types";

export const AuthContext = createContext<AuthContextType>({
  user: { id: 12, name: "Thibault", email: "t.cosattini@gmail.com" },
  setUser: () => {},
});
