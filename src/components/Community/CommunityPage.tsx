import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import CommunityContainer from "./CommunityContainer";
import "./CommunityPage.css";
import NewCommunityPostForm from "./NewCommunityPostForm";

const CommunityPage = () => {
  const { user, signedIn } = useContext(AuthContext);

  return (
    <main className="CommunityPage">
      {/* shows new community post form if user is signed in */}
      {signedIn && <NewCommunityPostForm />}
      <CommunityContainer user={user} />
    </main>
  );
};

export default CommunityPage;
