import Question from "./Question";
import TestQuestion from "./TestQuestion";

export default interface Answer {
  display_letter: string;
  display_text: string;
  explanation: string;
  id: string;
  is_correct: boolean;
  question: Question;
  question_id: string;
  test_question_answers: TestQuestion[];
}
