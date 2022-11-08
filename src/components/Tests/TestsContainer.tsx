import TestCard from "./TestCard";
import "./TestsContainer.css";

const TestsContainer = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className="TestsContainer">
      <ul>
        {array.map((item) => (
          <TestCard />
        ))}
      </ul>
    </div>
  );
};

export default TestsContainer;
