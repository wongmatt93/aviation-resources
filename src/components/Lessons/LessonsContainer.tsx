import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_LESSONS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { Lesson } from "../../Models/LessonsModels/Lesson";
import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

interface Props {
  user: AppUser | null;
}

const LessonsContainer = ({ user }: Props) => {
  const { error, loading, data } = useQuery(GET_LESSONS, {
    variables: { id: user && user.id },
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    data && setLessons(data.lesson);
  }, [data]);

  return (
    <ul className="LessonsContainer">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </ul>
  );
};

export default LessonsContainer;
