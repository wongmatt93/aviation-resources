import ResourceCard from "./ResourceCard";
import "./ResourcesContainer.css";
import { LoadedResource } from "../../Models/Resource";

interface Props {
  search: string;
  loadedResources: LoadedResource[];
}

const ResourcesContainer = ({ search, loadedResources }: Props) => {
  return (
    <ul className="ResourcesContainer">
      {loadedResources
        .filter((resource) =>
          resource.documentName.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.updated_at.localeCompare(b.updated_at))
        .map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
    </ul>
  );
};

export default ResourcesContainer;
