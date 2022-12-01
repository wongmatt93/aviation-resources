import TestQuestion from "../../Models/TestsModels/TestQuestion";
import "./TestQuestionCard.css";

interface Props {
  question: TestQuestion;
}

const cardStyles = {
  unanswered: {
    border: "1px solid black",
  },
  answeredCorrectly: {
    border: "1px solid green",
  },
  answeredIncorrectly: {
    border: "1px solid red",
  },
  correctAnswer: {
    color: "green",
  },
  incorrectAnswer: {
    color: "red",
  },
};

const TestQuestionCard = ({ question }: Props) => {
  return (
    <li
      className="TestQuestionCard"
      style={
        question.user_answered_correctly === null
          ? cardStyles.unanswered
          : question.user_answered_correctly
          ? cardStyles.answeredCorrectly
          : cardStyles.answeredIncorrectly
      }
    >
      <p>
        {question.question.airman_certification_standard.abbreviation}{" "}
        {question.question.reference} {question.question.airman_categories}
      </p>
      <h4>{question.question.display_text}</h4>
      <ul>
        {question.question.answers.map((answer) => (
          <li key={answer.id}>
            <p
              style={
                question.answer_id === answer.id && answer.is_correct
                  ? cardStyles.correctAnswer
                  : question.answer_id === answer.id && !answer.is_correct
                  ? cardStyles.incorrectAnswer
                  : undefined
              }
            >
              {answer.display_letter}: {answer.display_text}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TestQuestionCard;
