import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_LESSONS } from "../../GraphQL/Queries";
import { Lesson } from "../../Models/LessonsModels/Lesson";
import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

const LessonsContainer = () => {
  const { error, loading, data } = useQuery(GET_LESSONS);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    data && setLessons(data.lesson);
  }, [data]);

  console.log(lessons);

  return (
    <ul className="LessonsContainer">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </ul>
  );
};

export default LessonsContainer;
