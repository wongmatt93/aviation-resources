import { createContext } from "react";
import AppUser from "../Models/AppUser";

export interface AuthContextModel {
  user: AppUser | null;
}

const defaultValue: AuthContextModel = {
  user: null,
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
