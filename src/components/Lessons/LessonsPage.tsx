import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import LessonsContainer from "./LessonsContainer";
import "./LessonsPage.css";
import NewLessonForm from "./NewLessonForm";
import { Lesson } from "../../Models/Lesson";
import { GET_LESSONS } from "../../GraphQL/Queries";



const LessonsPage = () => {
  const { user, signedIn } = useContext(AuthContext);
  const { error, loading, data } = useQuery(GET_LESSONS, {
    variables: { id: user && user.id },
  });
  const [search, setSearch] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    data && setLessons(data.lesson);
  }, [data]);

  if (error) return <p>Error! {error.message}</p>;


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
      {!loading ? (
          <LessonsContainer user={user} search={search} lessons={lessons}/> 
          ) : ( 
          <div className="loading">
            <h3>Loading...</h3>
          </div>
        )}
    </main>
  );
};

export default LessonsPage;
