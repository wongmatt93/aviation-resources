import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { DELETE_TEST } from "../../GraphQL/Mutations";
import { GET_TESTS } from "../../GraphQL/Queries";
import Test from "../../Models/TestsModels/Test";
import "./TestCard.css";
import TestQuestionsList from "./TestQuestionsList";

interface Props {
  test: Test;
}

const TestCard = ({ test }: Props) => {
  const { user } = useContext(AuthContext);
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [deleteTest, { data, loading, error }] = useMutation(DELETE_TEST, {
    refetchQueries: [{ query: GET_TESTS, variables: { id: user && user.id } }],
  });

  useEffect(() => {
    setPercentCompleted(
      (test.test_questions.reduce(
        (pv, cv) => (cv.answer_id ? (pv += 1) : pv),
        0
      ) /
        test.test_questions.length) *
        100
    );

    setPercentCorrect(
      (test.test_questions.reduce(
        (pv, cv) => (cv.user_answered_correctly ? (pv += 1) : pv),
        0
      ) /
        test.test_questions.length) *
        100
    );
  }, [test]);

  const handleClick = (): void => {
    deleteTest({ variables: { id: test.id } });
  };

  return (
    <li className="TestCard">
      <h3>{test.airman_certification_standard.abbreviation}</h3>
      <p>Percent Completed: {percentCompleted}%</p>
      <p>Percent Correct: {percentCorrect}%</p>
      <TestQuestionsList test={test} />
      <button onClick={handleClick}>delete</button>
    </li>
  );
};

export default TestCard;
