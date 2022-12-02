import { useEffect, useState } from "react";
import { Task } from "../../Models/Lesson";
import NewTask from "../../Models/NewTask";
import "./TaskItem.css";

interface Props {
  task: Task;
  taskIds: NewTask[];
  setTaskIds: React.Dispatch<React.SetStateAction<NewTask[]>>;
}

const TaskItem = ({ task, taskIds, setTaskIds }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checked) {
      setTaskIds((prev) => {
        return [...prev, { task_id: task.id }];
      });
    } else {
      const index: number = taskIds.findIndex(
        (item) => item.task_id === task.id
      );
      if (index !== -1) {
        setTaskIds((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <li className="TaskItem">
      <label htmlFor={task.name}>
        {task.letter}: {task.name}
      </label>
      <input
        type="checkbox"
        name={task.name}
        id={task.name}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </li>
  );
};

export default TaskItem;
