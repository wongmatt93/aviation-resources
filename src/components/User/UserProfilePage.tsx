import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./UserProfilePage.css";
import { FaUserCircle } from "react-icons/fa";
import Pool from "../../UserPool";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { useMutation } from "@apollo/client";
import { DELETE_APP_USER } from "../../GraphQL/Mutations";

const UserProfilePage = () => {
  const { user, signOut } = useContext(AuthContext);
  const [deleteUser] = useMutation(DELETE_APP_USER);
  const navigate = useNavigate();

  const deleteAccount = async (email: string): Promise<unknown> => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err: any, session: CognitoUserSession) => {
          if (err) {
            reject();
          } else {
            user.deleteUser((err, result) => {
              if (err) {
                console.log(err);
              } else {
                signOut();
                deleteUser({ variables: { email } });
                console.log(result);
              }
            });
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  useEffect(() => {
    if (user?.email === "guest@aviationresources.io") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <main className="UserProfilePage">
      {user && (
        <div className="user-profile">
          <div>
            <h2 className="title">Profile</h2>
            <div className="user-img-and-email">
              <FaUserCircle className="user-circle" />
              <h3 className="email">E-mail: {user.email}</h3>
            </div>
            <p className="user-name"> {user.name ? user.name : "name"} </p>
            <div className="purpose-section">
              <p className="section-label">Purpose:</p>
              <p className="purpose-choices">
                {user.purpose ? user.purpose : "Tap to Select"}
              </p>
            </div>
            <div className="license-section">
              <p className="section-label">Highest License:</p>
              <p>{user.highest_acs ? user.highest_acs : "Tap to Select"}</p>
            </div>
          </div>
          <div className="logout-delete-buttons">
            <button onClick={signOut}>Log Out</button>
            <button onClick={() => deleteAccount(user.email)}>
              Delete Account
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfilePage;
