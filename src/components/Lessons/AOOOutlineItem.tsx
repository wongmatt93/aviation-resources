import { useEffect } from "react";
import AOOOutline from "../../Models/ACSModels/AOOOutline";
import NewTask from "../../Models/LessonsModels/NewTask";
import "./AOOOutlineItem.css";
import TaskItem from "./TaskItem";

interface Props {
  aooOutline: AOOOutline;
  taskIds: NewTask[];
  setTaskIds: React.Dispatch<React.SetStateAction<NewTask[]>>;
}

const AOOOutlineItem = ({ aooOutline, taskIds, setTaskIds }: Props) => {
  return (
    <li className="AOOOutlineItem">
      <h4>
        {aooOutline.numeral}: {aooOutline.name}
      </h4>
      <ul>
        {aooOutline.tasks
          .slice()
          .sort((a, b) => a.letter.localeCompare(b.letter))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              taskIds={taskIds}
              setTaskIds={setTaskIds}
            />
          ))}
      </ul>
    </li>
  );
};

export default AOOOutlineItem;
