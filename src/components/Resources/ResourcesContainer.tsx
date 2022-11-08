import ResourceCard from "./ResourceCard";
import "./ResourcesContainer.css";

const ResourcesContainer = () => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="ResourcesContainer">
      <ul>
        {array.map((item) => (
          <ResourceCard />
        ))}
      </ul>
    </div>
  );
};

export default ResourcesContainer;
