import ResourceCard from "./ResourceCard";
import { useQuery, gql } from "@apollo/client";
import "./ResourcesContainer.css";
import { useEffect, useState } from "react";
import { GET_RESOURCES } from "../../GraphQL/Queries";
import Resource from "../../Models/ResourceModels/Resource";

interface Props {
  search: string;
}

const ResourcesContainer = ({ search }: Props) => {
  const [resources, setResources] = useState<Resource[]>([]);

  const { error, loading, data } = useQuery(GET_RESOURCES);

  useEffect(() => {
    data && setResources(data.resources);
  }, [data]);

  return (
    <ul className="ResourcesContainer">
      {resources
        .filter((resource) =>
          resource.documentName.toLowerCase().includes(search.toLowerCase())
        )
        .map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
    </ul>
  );
};

export default ResourcesContainer;
