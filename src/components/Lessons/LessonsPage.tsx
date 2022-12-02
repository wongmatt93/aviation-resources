import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="LessonsPage">
      <NewLessonForm user={user} />
      <LessonsContainer user={user} />
    </main>
  );
};

export default LessonsPage;
