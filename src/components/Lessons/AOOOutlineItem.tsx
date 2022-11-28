import AOOOutline from "../../Models/ACSModels/AOOOutline";
import "./AOOOutlineItem.css";

interface Props {
  aooOutline: AOOOutline;
}

const AOOOutlineItem = ({ aooOutline }: Props) => {
  return (
    <li className="AOOOutlineItem">
      <h4>
        {aooOutline.numeral}: {aooOutline.name}
      </h4>
      <ul>
        
      </ul>
    </li>
  );
};

export default AOOOutlineItem;
