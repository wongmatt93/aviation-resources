import { useQuery } from "@apollo/client";
import { ReactNode, useEffect, useState } from "react";
import { GET_APP_USERS, GET_RESOURCES } from "../GraphQL/Queries";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import Pool from "../UserPool";
import AppUser from "../Models/AppUser";
import AuthContext from "./AuthContext";
import Resource, { LoadedResource } from "../Models/Resource";
import { getURLfromS3Key } from "../services/s3Services";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  //Default ID is guest profile
  const [email, setEmail] = useState<string>("guest@aviationresources.io");
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<AppUser | null>(null);
  const { error, data } = useQuery(GET_APP_USERS, {
    variables: { email },
  });
  const resResources = useQuery(GET_RESOURCES);
  const [loadedResources, setLoadedResources] = useState<LoadedResource[]>([]);

  const getSession = async (): Promise<unknown> => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err: any, session: CognitoUserSession) => {
          if (err) {
            reject();
          } else {
            const idToken = session.getIdToken();
            setEmail(idToken.payload.email);
            setSignedIn(true);
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const signIn = async (
    Username: string,
    Password: string
  ): Promise<unknown> => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          const idToken = data.getIdToken();
          setEmail(idToken.payload.email);
          setSignedIn(true);
          resolve(data);
        },
        onFailure: (err) => {
          console.error("onFailure: ", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });
  };

  const signOut = (): void => {
    //signing out sets ID to guest profile again
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
    setEmail("guest@aviationresources.io");
    setSignedIn(false);
  };

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
    });
  }, []);

  useEffect(() => {
    resResources.data &&
      resResources.data.resources.length > 0 &&
      resResources.data.resources.map(async (resource: Resource) => {
        const resourceObject: LoadedResource = {
          id: resource.id,
          thumbnailURL: "",
          pdfURL: "",
          documentName: resource.documentName,
          updated_at: resource.updated_at,
        };
        const response = await getURLfromS3Key(resource.thumbnail_s3_key);
        resourceObject.thumbnailURL = response.url;
        getURLfromS3Key(resource.s3_key).then((response_1) => {
          resourceObject.pdfURL = response_1.url;
          setLoadedResources((prev) => [...prev, resourceObject]);
        });
      });
  }, [resResources.data]);

  useEffect(() => {
    data && setUser(data.app_user[0]);
  }, [data]);

  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <AuthContext.Provider
      value={{
        user,
        signedIn,
        loadedResources,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
