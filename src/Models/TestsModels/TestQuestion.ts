import Answer from "./Answer";
import Question from "./Question";
import Test from "./Test";

export default interface TestQuestion {
  answer: Answer;
  answer_id: string;
  id: string;
  question: Question;
  question_id: string;
  test: Test;
  test_id: string;
  user_answered_correctly: boolean | null;
}
