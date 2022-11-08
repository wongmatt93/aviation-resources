import CommunityContainer from "./CommunityContainer";
import "./CommunityPage.css";
import NewCommunityPostForm from "./NewCommunityPostForm";

const CommunityPage = () => {
  return (
    <main className="CommunityPage">
      <NewCommunityPostForm />
      <CommunityContainer />
    </main>
  );
};

export default CommunityPage;
