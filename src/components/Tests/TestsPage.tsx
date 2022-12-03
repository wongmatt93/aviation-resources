import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import NewTestForm from "./NewTestForm";
import { useQuery } from "@apollo/client";
import { GET_TESTS } from "../../GraphQL/Queries";

import TestsContainer from "./TestsContainer";
import { useNavigate } from "react-router-dom";
import { Test } from "../../Models/Test";
import "./TestsPage.css";

const TestsPage = () => {
  const { user, signedIn } = useContext(AuthContext);
  const { error, loading, data } = useQuery(GET_TESTS, {
    variables: { id: user && user.id },
  });
  const [tests, setTests] = useState<Test[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    data && setTests(data.test);
  }, [data]);

  useEffect(() => {
    !signedIn && navigate("/");
  }, [signedIn, navigate]);

  if (error) return <p>Error! ${error.message}</p>;

  return (
    <main className="TestsPage">
      {/* shows new community post form if user is signed in */}
      {signedIn && <NewTestForm user={user} />}
      {!loading ? (
        <TestsContainer user={user} tests={tests} />
      ) : (
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      )}
    </main>
  );
};

export default TestsPage;
