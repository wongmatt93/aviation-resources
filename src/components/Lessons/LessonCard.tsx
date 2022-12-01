import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { DELETE_LESSON } from "../../GraphQL/Mutations";
import { GET_LESSONS } from "../../GraphQL/Queries";
import { Lesson } from "../../Models/LessonsModels/Lesson";
import "./LessonCard.css";

interface Props {
  lesson: Lesson;
}

const LessonCard = ({ lesson }: Props) => {
  const { user } = useContext(AuthContext);
  const [createdDate, setCreatedDate] = useState("");
  const [deleteLesson, { data, loading, error }] = useMutation(DELETE_LESSON, {
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
