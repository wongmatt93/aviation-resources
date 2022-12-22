import { createContext } from "react";
import AppUser from "../Models/AppUser";
import { LoadedResource } from "../Models/Resource";

export interface AuthContextModel {
  user: AppUser | null;
  signedIn: boolean;
  loadedResources: LoadedResource[];
  signIn: (Username: string, Password: string) => Promise<unknown>;
  signOut: () => void;
}

const defaultValue: AuthContextModel = {
  user: null,
  signedIn: false,
  loadedResources: [],
  signIn: async () => {},
  signOut: () => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
