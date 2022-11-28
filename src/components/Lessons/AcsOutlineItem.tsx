import ACSOutline from "../../Models/ACSModels/ACSOutline";
import "./AcsOutlineItem.css";
import AOOOutlineItem from "./AOOOutlineItem";

interface Props {
  acsOutline: ACSOutline;
}

const AcsOutlineItem = ({ acsOutline }: Props) => {
  return (
    <li className="AcsOutlineItem">
      <h3>{acsOutline.name}</h3>
      <ul>
        {acsOutline.area_of_operations.map((item)=> <AOOOutlineItem key={item.id} aooOutline={item} />)}
      </ul>
    </li>
  );
};

export default AcsOutlineItem;
