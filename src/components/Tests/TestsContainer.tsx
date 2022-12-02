import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_TESTS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { Test } from "../../Models/Test";
import TestCard from "./TestCard";
import "./TestsContainer.css";

interface Props {
  user: AppUser | null;
}

const TestsContainer = ({ user }: Props) => {
  const { error, loading, data } = useQuery(GET_TESTS, {
    variables: { id: user && user.id },
  });
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    data && setTests(data.test);
  }, [data]);

  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <ul className="TestsContainer">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} user={user} />
      ))}
    </ul>
  );
};

export default TestsContainer;
