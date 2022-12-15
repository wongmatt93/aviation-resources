import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  const { user, signedIn } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  return (
    <main className="LessonsPage">
      {/* shows new lesson form if user is signed in */}
      <input
        type="text"
        placeholder="Search Lessons"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {signedIn && <NewLessonForm user={user} />}
      <LessonsContainer user={user} search={search} />
    </main>
  );
};

export default LessonsPage;
