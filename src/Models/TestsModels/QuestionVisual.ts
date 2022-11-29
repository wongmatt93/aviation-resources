import Question from "./Question";

export default interface QuestionVisual {
  id: string;
  question: Question;
  question_id: string;
  s3_key: string;
}
