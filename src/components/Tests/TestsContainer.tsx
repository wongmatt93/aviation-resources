import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_TESTS } from "../../GraphQL/Queries";
import TestCard from "./TestCard";
import "./TestsContainer.css";

const TestsContainer = () => {
  const { error, loading, data } = useQuery(GET_TESTS);

  useEffect(() => {
    data && console.log(data.test);
  }, [data]);

  return <ul className="TestsContainer"></ul>;
};

export default TestsContainer;
