import { useMutation } from "@apollo/client";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { INSERT_TEST } from "../../GraphQL/Mutations";
import { GET_TESTS } from "../../GraphQL/Queries";
import NewTestForm from "./NewTestForm";
import TestsContainer from "./TestsContainer";
import "./TestsPage.css";

const TestsPage = () => {
  const { user } = useContext(AuthContext);
  const [addTest, { data, loading, error }] = useMutation(INSERT_TEST, {
    refetchQueries: [{ query: GET_TESTS, variables: { id: user && user.id } }],
  });

  return (
    <main className="TestsPage">
      <NewTestForm user={user} addTest={addTest} />
      <TestsContainer user={user} />
    </main>
  );
};

export default TestsPage;
