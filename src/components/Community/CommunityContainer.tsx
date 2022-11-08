import "./CommunityContainer.css";
import CommunityPostCard from "./CommunityPostCard";

const CommunityContainer = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="CommunityContainer">
      <ul>
        {array.map((item) => (
          <CommunityPostCard item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CommunityContainer;
