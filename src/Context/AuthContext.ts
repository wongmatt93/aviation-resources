import { createContext } from "react";

export interface AuthContextModel {
  id: string | null;
}

const defaultValue: AuthContextModel = {
  id: null,
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
