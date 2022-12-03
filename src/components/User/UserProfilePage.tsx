import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "semantic-ui-react";
import AuthContext from "../../Context/AuthContext";
import "./UserProfilePage.css";
import profilePicture from "../../assets/profile-img.png";

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
        <div className="user-profile">
          <h2 className="title">Profile</h2>
          <div className="user-img-and-email">
            <Image src={profilePicture} />
            <h3 className="email">E-mail: {user.email}</h3>
          </div>
          <p className="user-name"> {user.name ? user.name : "name"} </p>
          <p>Purpose:</p>
          <p className="purpose-choices">
            {user.purpose ? user.purpose : "Tap to Select"}
          </p>
          <p className="license">Highest License:</p>
          <p>{user.highest_acs ? user.highest_acs : "Tap to Select"}</p>
          <div className="logout-delete-buttons">
            <button onClick={handleClick}>Log Out</button>
            <button>Delete Account</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfilePage;
