import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  const { user, signedIn } = useContext(AuthContext);

  return (
    <main className="LessonsPage">
      {signedIn && <NewLessonForm user={user} />}
      <LessonsContainer user={user} />
    </main>
  );
};

export default LessonsPage;
