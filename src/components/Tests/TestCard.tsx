import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { DELETE_TEST } from "../../GraphQL/Mutations";
import { GET_TESTS } from "../../GraphQL/Queries";
import { Test } from "../../Models/Test";
import "./TestCard.css";
import TestQuestionsList from "./TestQuestionsList";

interface Props {
  test: Test;
}

const TestCard = ({ test }: Props) => {
  const { user } = useContext(AuthContext);
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [percentCorrect, setPercentCorrect] = useState(0);
  const [deleteTest] = useMutation(DELETE_TEST, {
    refetchQueries: [{ query: GET_TESTS, variables: { id: user && user.id } }],
  });

  useEffect(() => {
    const numCompleted: number = test.test_questions.reduce(
      (pv, cv) => (cv.answer_id ? (pv += 1) : pv),
      0
    );
    setPercentCompleted((numCompleted / test.test_questions.length) * 100);
    setPercentCorrect(
      numCompleted
        ? (test.test_questions.reduce(
            (pv, cv) => (cv.user_answered_correctly ? (pv += 1) : pv),
            0
          ) /
            numCompleted) *
            100
        : 0
    );
  }, [test]);

  const handleClick = (): void => {
    deleteTest({ variables: { id: test.id } });
  };

  return (
    <li className="TestCard">
      <h3>{test.airman_certification_standard.abbreviation}</h3>
      <p>Percent Completed: {Math.trunc(percentCompleted)}%</p>
      <p>Percent Correct: {Math.trunc(percentCorrect)}%</p>
      <TestQuestionsList test={test} />
      <button onClick={handleClick}>delete</button>
    </li>
  );
};

export default TestCard;
