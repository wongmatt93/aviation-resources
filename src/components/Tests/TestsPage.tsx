import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import NewTestForm from "./NewTestForm";
import TestsContainer from "./TestsContainer";
import "./TestsPage.css";

const TestsPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="TestsPage">
      <NewTestForm user={user} />
      <TestsContainer user={user} />
    </main>
  );
};

export default TestsPage;
