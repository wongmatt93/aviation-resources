import { useQuery } from "@apollo/client";
import { ReactNode, useEffect, useState } from "react";
import { GET_APP_USERS } from "../GraphQL/Queries";
import AppUser from "../Models/AppUser";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const { error, loading, data } = useQuery(GET_APP_USERS, {
    variables: { id: "65edcf49-c7aa-4389-a842-66733ba2e867" },
  });

  useEffect(() => {
    data && setUser(data.app_user[0]);
  }, [data]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
