import AppUser from "../../Models/AppUser";
import { Test } from "../../Models/Test";
import TestCard from "./TestCard";
import "./TestsContainer.css";

interface Props {
  user: AppUser | null;
  tests: Test[];
}

const TestsContainer = ({ user, tests }: Props) => {
  return (
    <ul className="TestsContainer">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} user={user} />
      ))}
    </ul>
  );
};

export default TestsContainer;
