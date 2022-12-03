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
  // controlled component for checkbox
  const [checked, setChecked] = useState<boolean>(false);

  // useEffect updates the array every time a box is checked or unchecked
  useEffect(() => {
    if (checked) {
      // adds task id to array when checked
      setTaskIds((prev) => {
        return [...prev, { task_id: task.id }];
      });
    } else {
      // finds index number for checked item
      const index: number = taskIds.findIndex(
        (item) => item.task_id === task.id
      );

      // removes checked item from array when box is unchecked
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
