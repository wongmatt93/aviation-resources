import ACSOutline from "../../Models/ACSModels/ACSOutline";
import "./LessonCard.css";

interface Props {
  outline: ACSOutline;
}

const LessonCard = ({ outline }: Props) => {
  return (
    <li className="LessonCard">
      <h2>{outline.name}</h2>
      <ul>
        {outline.area_of_operations.map((aoo) => (
          <li>
            <h3>{aoo.name}</h3>
            <ul>
              {aoo.tasks.map((task) => (
                <li>
                  <h4>{task.name}</h4>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default LessonCard;
