import { useMutation } from "@apollo/client";
import { INSERT_LESSON } from "../../GraphQL/Mutations";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";

const LessonsPage = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(INSERT_LESSON);

  return (
    <main className="LessonsPage">
      <NewLessonForm mutateFunction={mutateFunction} />
      <LessonsContainer />
    </main>
  );
};

export default LessonsPage;
