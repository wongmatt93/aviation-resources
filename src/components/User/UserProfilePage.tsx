import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./UserProfilePage.css";

const UserProfilePage = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (): void => {
    signOut();
    navigate("/");
  };

  return (
    <main className="UserProfilePage">
      {user && (
        <>
          <h2>Profile</h2>
          <h3>{user.email}</h3>
          <p>{user.name}</p>
          <p>Purpose</p>
          <p>{user.purpose ? user.purpose : "Tap to Select"}</p>
          <p>Highest License</p>
          <p>{user.highest_acs ? user.highest_acs : "Tap to Select"}</p>
          <button onClick={handleClick}>Log Out</button>
          <button>Delete Account</button>
        </>
      )}
    </main>
  );
};

export default UserProfilePage;
