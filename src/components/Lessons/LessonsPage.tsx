import { useMutation } from "@apollo/client";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { INSERT_LESSON } from "../../GraphQL/Mutations";
import { GET_LESSONS } from "../../GraphQL/Queries";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  const { user } = useContext(AuthContext);
  const [addLesson, { data, loading, error }] = useMutation(INSERT_LESSON, {
    refetchQueries: [
      { query: GET_LESSONS, variables: { id: user && user.id } },
    ],
  });

  return (
    <main className="LessonsPage">
      <NewLessonForm user={user} addLesson={addLesson} />
      <LessonsContainer user={user} />
    </main>
  );
};

export default LessonsPage;
