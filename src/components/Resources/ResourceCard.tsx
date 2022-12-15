import Resource from "../../Models/Resource";
import "./ResourceCard.css";
import { Image } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { getURLfromS3Key } from "../../services/s3Services";
import { BsFillCloudDownloadFill } from "react-icons/bs";

interface Props {
  resource: Resource;
}

const ResourceCard = ({ resource }: Props) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getURLfromS3Key(resource.thumbnail_s3_key).then((response) =>
      setThumbnailUrl(response.url)
    );
    getURLfromS3Key(resource.s3_key).then((response) =>
      setPdfUrl(response.url)
    );
  }, []);

  const handleClick = (): void => {
    window.open(pdfUrl, "_blank");
  };

  const handleLoaded = (): void => {
    setLoaded(true);
  };

  return (
    <li className="ResourceCard">
      <BsFillCloudDownloadFill
        className="download-button"
        onClick={handleClick}
        style={{display: loaded ? "block" : "none"}}
      />
      <img src={thumbnailUrl} alt={resource.urlString} onLoad={handleLoaded} />
      <h2 style={{display: loaded ? "block" : "none"}}>{resource.documentName}</h2>
    </li>
  );
};

export default ResourceCard;
