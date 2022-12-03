import { useQuery } from "@apollo/client";
import { ReactNode, useEffect, useState } from "react";
import { GET_APP_USERS } from "../GraphQL/Queries";
import AppUser from "../Models/AppUser";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  //Default ID is guest profile
  const [id, setId] = useState<string>("2d2d5461-50ec-4e5f-bf5e-b868b2b10aac");
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<AppUser | null>(null);
  const { error, data } = useQuery(GET_APP_USERS, {
    variables: { id },
  });

  const signIn = (): void => {
    //hard coded personal ID into sign in until we can get actual user sign in
    setId("65edcf49-c7aa-4389-a842-66733ba2e867");
    setSignedIn(true);
  };
  const signOut = (): void => {
    //signing out sets ID to guest profile again
    setId("2d2d5461-50ec-4e5f-bf5e-b868b2b10aac");
    setSignedIn(false);
  };

  useEffect(() => {
    data && setUser(data.app_user[0]);
  }, [data]);

  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <AuthContext.Provider value={{ user, signedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
