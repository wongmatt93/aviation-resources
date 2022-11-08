import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  return (
    <main className="LessonsPage">
      <NewLessonForm />
      <LessonsContainer />
    </main>
  );
};

export default LessonsPage;
