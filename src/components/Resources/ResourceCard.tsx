import { LoadedResource } from "../../Models/Resource";
import "./ResourceCard.css";
import { useState } from "react";
import { BsFillCloudDownloadFill } from "react-icons/bs";

interface Props {
  resource: LoadedResource;
}

const ResourceCard = ({ resource }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const handleClick = (): void => {
    window.open(resource.pdfURL, "_blank");
  };

  const handleLoaded = (): void => {
    setLoaded(true);
  };

  return (
    <li className="ResourceCard">
      <BsFillCloudDownloadFill
        className="download-button"
        onClick={handleClick}
        style={{ display: loaded ? "block" : "none" }}
      />
      <img
        src={resource.thumbnailURL}
        alt={resource.thumbnailURL}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={handleLoaded}
      />
      <h2 style={{ display: loaded ? "block" : "none" }}>
        {resource.documentName}
      </h2>
    </li>
  );
};

export default ResourceCard;
