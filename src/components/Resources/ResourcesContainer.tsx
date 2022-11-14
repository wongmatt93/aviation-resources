import ResourceCard from "./ResourceCard";
import { useQuery, gql } from "@apollo/client";
import "./ResourcesContainer.css";
import { useEffect, useState } from "react";
import { GET_RESOURCES } from "../../GraphQL/Queries";

interface Props {
  search: string;
}

const ResourcesContainer = ({ search }: Props) => {
  const [resources, setResources] = useState([]);

  const { error, loading, data } = useQuery(GET_RESOURCES);

  useEffect(() => {
    data && setResources(data.resources);
  }, [data]);

  return (
    <div className="ResourcesContainer">
      <ul>
        {resources.map((resource) => (
          <ResourceCard resource={resource} />
        ))}
      </ul>
    </div>
  );
};

export default ResourcesContainer;
