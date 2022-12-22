import AppUser from "../../Models/AppUser";
import { Lesson } from "../../Models/Lesson";
import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

interface Props {
  user: AppUser | null;
  search: string;
  lessons: Lesson[];
}

const LessonsContainer = ({ user, search, lessons }: Props) => {
  return (
    <ul className="LessonsContainer">
      {lessons
        .filter(
          (item) =>
            item.name && item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} user={user} />
        ))}
    </ul>
  );
};

export default LessonsContainer;
