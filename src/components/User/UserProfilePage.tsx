import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./UserProfilePage.css";
import { FaUserCircle } from "react-icons/fa";
import Pool from "../../UserPool";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { useMutation } from "@apollo/client";
import { UPDATE_APP_USER_INFO, DELETE_APP_USER } from "../../GraphQL/Mutations";

const UserProfilePage = () => {
  const { user, signOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [highestAcs, setHighestAcs] = useState("");
  const [updateUserInfo] = useMutation(UPDATE_APP_USER_INFO);
  const [deleteUser] = useMutation(DELETE_APP_USER);
  const navigate = useNavigate();

  const handleUpdateName = (name: string) => {
    setName(name);
    updateUserInfo({
      variables: {
        _set: {
          name,
        },
        where: { id: { _eq: user!.id } },
      },
    });
  };

  const handleUpdatePurpose = (purpose: string) => {
    setPurpose(purpose);
    updateUserInfo({
      variables: {
        _set: {
          purpose,
        },
        where: { id: { _eq: user!.id } },
      },
    });
  };

  const handleUpdateHighestAcs = (highestAcs: string) => {
    setHighestAcs(highestAcs);
    updateUserInfo({
      variables: {
        _set: {
          highest_acs: highestAcs,
        },
        where: { id: { _eq: user!.id } },
      },
    });
  };

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
    if (user) {
      user.name ? setName(user.name) : setName("name");
      user.purpose ? setPurpose(user.purpose) : setName("Tap to Select");
      user.highest_acs
        ? setHighestAcs(user.highest_acs)
        : setName("Tap to Select");
      if (user.email === "guest@aviationresources.io") {
        navigate("/");
      }
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
            <input
              type="text"
              className="user-name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => handleUpdateName(e.target.value)}
            />
            <div className="purpose-section">
              <p className="section-label">Purpose:</p>
              <select
                name="purpose"
                id="purpose"
                value={purpose}
                onChange={(e) => handleUpdatePurpose(e.target.value)}
              >
                <option value="Hobby">Hobby</option>
                <option value="Student pilot">Student Pilot</option>
                <option value="Licensed Pilot">Licensed Pilot</option>
                <option value="Certificated Flight Instructor (CFI)">
                  Certified Flight Instructor (CFI)
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="license-section">
              <p className="section-label">Highest License:</p>
              <select name="highestAcs" id="highestAcs" value={highestAcs} onChange={e=> handleUpdateHighestAcs(e.target.value)}>
                <option value="ATP">
                  Airline Transport Pilot and Type Rating for Airplane
                </option>
                <option value="COMM">Commercial Pilot - Airplane</option>
                <option value="IFR">Instrument Rating - Airplane</option>
                <option value="PPL">Private Pilot - Airplane</option>
                <option value="SUAS">
                  Remote Pilot - Small Unmanned Aircraft Systems (Certiciation
                  and Recurrent Knowledge Testing)
                </option>
              </select>
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
