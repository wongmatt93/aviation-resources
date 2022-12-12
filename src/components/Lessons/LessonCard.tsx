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

  // graphQL mutation to delete lessons by lesson id
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
      <div className="info-container">
        <div className="lesson-name-info">
          <h3 className="name-styles">Lesson Name</h3>
          <h4>{lesson.name}</h4>
        </div>
        <p className="name-styles">Task Abbreviations</p>
        <ul>
          {lesson.lesson_tasks.map((task) => (
            <li key={task.id}>
              <p className="certification-abrreviations">
                {
                  task.task.area_of_operation.airman_certification_standard
                    .abbreviation
                }
                - {task.task.area_of_operation.numeral} - {task.task.letter} |
              </p>
            </li>
          ))}
        </ul>
        <div className="created-at-info">
          <p className="label-bottom-text">Created On</p>
          <p className="bottom-text-date">{createdDate}</p>
        </div>
      </div>
      <button className="delete-button" onClick={handleClick}>
        Delete
      </button>
      <button className="download-button">Download</button>
    </li>
  );
};

export default LessonCard;
