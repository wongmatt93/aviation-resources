import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

const LessonsContainer = () => {
  const array = [1, 2, 3];
  return (
    <div className="LessonsContainer">
      <ul>
        {array.map((item) => (
          <LessonCard />
        ))}
      </ul>
    </div>
  );
};

export default LessonsContainer;
