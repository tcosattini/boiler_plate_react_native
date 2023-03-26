import { User } from "../../hooks/authentication/types";

export interface AuthContextType {
  user: User | null;
  setUser?: (user: User | null) => void;
}
