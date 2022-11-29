import { ReactNode, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId("65edcf49-c7aa-4389-a842-66733ba2e867");
  }, []);

  return <AuthContext.Provider value={{ id }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
