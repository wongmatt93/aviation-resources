import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { DELETE_LESSON } from "../../GraphQL/Mutations";
import { GET_LESSONS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { Lesson } from "../../Models/Lesson";
import "./LessonCard.css";

interface Props {
  lesson: Lesson;
  user: AppUser | null;
}

const LessonCard = ({ lesson, user }: Props) => {
  const [createdDate, setCreatedDate] = useState("");
  const [deleteLesson] = useMutation(DELETE_LESSON, {
    refetchQueries: [
      { query: GET_LESSONS, variables: { id: user && user.id } },
    ],
  });

  const handleClick = (): void => {
    deleteLesson({ variables: { id: lesson.id } });
  };

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
          <li key={task.id}>
            <p>
              {
                task.task.area_of_operation.airman_certification_standard
                  .abbreviation
              }
              - {task.task.area_of_operation.numeral} - {task.task.letter} |
            </p>
          </li>
        ))}
      </ul>
      <p className="created-at-styles label-bottom-text">Created On</p>
      <p className="created-at-styles bottom-text-date">{createdDate}</p>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default LessonCard;
