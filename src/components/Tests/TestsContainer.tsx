import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_TESTS } from "../../GraphQL/Queries";
import Test from "../../Models/TestsModels/Test";
import TestCard from "./TestCard";
import "./TestsContainer.css";

const TestsContainer = () => {
  const { error, loading, data } = useQuery(GET_TESTS);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    data && setTests(data.test);
  }, [data]);

  return (
    <ul className="TestsContainer">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </ul>
  );
};

export default TestsContainer;
