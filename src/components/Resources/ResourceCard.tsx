import Resource from "../../Models/ResourceModels/Resource";
import "./ResourceCard.css";

interface Props {
  resource: Resource;
}

const ResourceCard = ({ resource }: Props) => {
  return (
    <li className="ResourceCard">
      <h2>{resource.documentName}</h2>
    </li>
  );
};

export default ResourceCard;
