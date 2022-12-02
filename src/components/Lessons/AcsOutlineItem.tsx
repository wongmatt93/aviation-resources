import ACSOutline from "../../Models/AirmanCertificationStandard.ts";
import NewTask from "../../Models/NewTask";
import "./AcsOutlineItem.css";
import AOOOutlineItem from "./AOOOutlineItem";

interface Props {
  acsOutline: ACSOutline;
  taskIds: NewTask[];
  setTaskIds: React.Dispatch<React.SetStateAction<NewTask[]>>;
}

const AcsOutlineItem = ({ acsOutline, taskIds, setTaskIds }: Props) => {
  const romanToNum = (roman: string): number => {
    if (roman === "") return 0;
    if (roman.startsWith("L")) return 50 + romanToNum(roman.substring(1));
    if (roman.startsWith("XL")) return 40 + romanToNum(roman.substring(2));
    if (roman.startsWith("X")) return 10 + romanToNum(roman.substring(1));
    if (roman.startsWith("IX")) return 9 + romanToNum(roman.substring(2));
    if (roman.startsWith("V")) return 5 + romanToNum(roman.substring(1));
    if (roman.startsWith("IV")) return 4 + romanToNum(roman.substring(2));
    if (roman.startsWith("I")) return 1 + romanToNum(roman.substring(1));
    return 0;
  };

  return (
    <li className="AcsOutlineItem">
      <h3>{acsOutline.name}</h3>
      <ul>
        {acsOutline.area_of_operations
          .slice()
          .sort((a, b) => romanToNum(a.numeral) - romanToNum(b.numeral))
          .map((item) => (
            <AOOOutlineItem
              key={item.id}
              aooOutline={item}
              taskIds={taskIds}
              setTaskIds={setTaskIds}
            />
          ))}
      </ul>
    </li>
  );
};

export default AcsOutlineItem;
