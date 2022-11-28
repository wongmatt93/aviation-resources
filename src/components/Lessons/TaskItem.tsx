import { LessonTask, Task } from "../../Models/LessonsModels/Lesson";
import LessonCard from "./LessonCard";
import "./TaskItem.css";

interface Props {
  task: LessonTask;
}

const TaskItem = ({ task }: Props) => {
  return (
    <li className="TaskItem">
      <p>
        {task.task.area_of_operation.airman_certification_standard.abbreviation}
        - {task.task.area_of_operation.numeral} - {task.task.letter} |
      </p>
    </li>
  );
};

export default TaskItem;
