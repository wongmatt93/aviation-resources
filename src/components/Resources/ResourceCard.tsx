import Resource from "../../Models/Resource";
import "./ResourceCard.css";
import { Image } from "semantic-ui-react";

interface Props {
  resource: Resource;
}

const ResourceCard = ({ resource }: Props) => {
  return (
    <li className="ResourceCard">
      <Image src={resource.urlString} alt={resource.urlString} />
      <h2>{resource.documentName}</h2>
    </li>
  );
};

export default ResourceCard;
