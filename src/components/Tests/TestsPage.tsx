import { useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import NewTestForm from "./NewTestForm";
import TestsContainer from "./TestsContainer";
import { useNavigate } from "react-router-dom";
import "./TestsPage.css";

const TestsPage = () => {
  const { user, signedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    !signedIn && navigate("/");
  }, [signedIn, navigate]);

  return (
    <main className="TestsPage">
      {signedIn && <NewTestForm user={user} />}
      <TestsContainer user={user} />
    </main>
  );
};

export default TestsPage;
