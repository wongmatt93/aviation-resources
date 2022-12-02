import { createContext } from "react";
import AppUser from "../Models/AppUser";

export interface AuthContextModel {
  user: AppUser | null;
  signedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const defaultValue: AuthContextModel = {
  user: null,
  signedIn: false,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
