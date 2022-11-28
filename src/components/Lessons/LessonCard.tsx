import { useEffect, useState } from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import { Lesson } from "../../Models/LessonsModels/Lesson";
import "./LessonCard.css";
import TaskItem from "./TaskItem";

interface Props {
  lesson: Lesson;
}

const LessonCard = ({ lesson }: Props) => {
  const [createdDate, setCreatedDate] = useState("");

  useEffect(() => {
    setCreatedDate(
      new Date(lesson.created_at).toDateString().split("").splice(3).join("")
    );
  }, [lesson]);
  return (
    <li className="LessonCard">
      <h3 className="name-styles">Lesson Name</h3>
      <h4 className="name-styles">{lesson.name}</h4>
      <ul>
        {lesson.lesson_tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <p className="created-at-styles label-bottom-text">Created On</p>
      <p className="created-at-styles bottom-text-date">{createdDate}</p>
    </li>
  );
};

export default LessonCard;
