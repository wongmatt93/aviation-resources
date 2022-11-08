import NewTestForm from "./NewTestForm";
import TestsContainer from "./TestsContainer";
import "./TestsPage.css";

const TestsPage = () => {
  return (
    <main className="TestsPage">
      <NewTestForm />
      <TestsContainer />
    </main>
  );
};

export default TestsPage;
