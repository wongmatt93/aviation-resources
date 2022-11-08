import ResourceCard from "./ResourceCard";
import { useQuery, gql } from "@apollo/client";
import "./ResourcesContainer.css";
import { useEffect, useState } from "react";
import { GET_RESOURCES } from "../../GraphQL/Queries";

const ResourcesContainer = () => {
  const [resources, setResources] = useState([]);

  const { error, loading, data } = useQuery(GET_RESOURCES);

  useEffect(() => {
    data && setResources(data.resources);
  }, [data]);

  console.log(resources);

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
