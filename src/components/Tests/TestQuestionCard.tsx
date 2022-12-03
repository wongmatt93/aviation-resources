import { useMutation } from "@apollo/client";
import { UPDATE_TEST_QUESTION } from "../../GraphQL/Mutations";
import { GET_TESTS } from "../../GraphQL/Queries";
import "./TestQuestionCard.css";
import { Answer, TestQuestion } from "../../Models/Test";
import AppUser from "../../Models/AppUser";

interface Props {
  question: TestQuestion;
  user: AppUser | null;
}

// added dynamic styles which get printed based on answers
const cardStyles = {
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

const TestQuestionCard = ({ question, user }: Props) => {
  // graphQL mutation to update every time a question is answered
  const [updateTest, { error }] = useMutation(UPDATE_TEST_QUESTION, {
    refetchQueries: [{ query: GET_TESTS, variables: { id: user && user.id } }],
  });

  const handleClick = (question: TestQuestion, answer: Answer): void => {
    updateTest({
      variables: {
        _set: {
          answer_id: answer.id,
          user_answered_correctly: answer.is_correct,
        },
        where: { id: { _eq: question.id } },
      },
    });
  };

  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
    <li
      className="TestQuestionCard"
      style={
        question.user_answered_correctly
          ? cardStyles.answeredCorrectly
          : question.user_answered_correctly === false
          ? cardStyles.answeredIncorrectly
          : undefined
      }
    >
      <p className="certification-info">
        {question.question.airman_certification_standard.abbreviation}{" "}
        {question.question.reference} {question.question.airman_categories}
      </p>
      <h4 className="question">{question.question.display_text}</h4>
      <ul className="answers-container">
        {question.question.answers
          .slice()
          .sort((a, b) => a.display_letter.localeCompare(b.display_letter))
          .map((answer) => (
            <li
              className="answer"
              key={answer.id}
              onClick={
                question.user_answered_correctly === null
                  ? () => handleClick(question, answer)
                  : undefined
              }
            >
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
