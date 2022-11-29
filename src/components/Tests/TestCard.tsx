import { useEffect, useState } from "react";
import Test from "../../Models/TestsModels/Test";
import "./TestCard.css";

interface Props {
  test: Test;
}

const TestCard = ({ test }: Props) => {
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [percentCorrect, setPercentCorrect] = useState(0);

  useEffect(() => {
    setPercentCompleted(
      (test.test_questions.reduce(
        (pv, cv) => (cv.user_answered_correctly != null ? pv++ : pv),
        0
      ) /
        test.test_questions.length) *
        100
    );

    setPercentCorrect(
      (test.test_questions.reduce(
        (pv, cv) => (cv.user_answered_correctly ? pv++ : pv),
        0
      ) /
        test.test_questions.length) *
        100
    );
  }, [test]);

  console.log(test);
  return (
    <li className="TestCard">
      <h3>{test.airman_certification_standard.abbreviation}</h3>
      <p>Percent Completed: {percentCompleted}%</p>
      <p>Percent Correct: {percentCorrect}%</p>
    </li>
  );
};

export default TestCard;
