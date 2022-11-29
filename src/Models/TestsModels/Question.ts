import { AirmanCertificationStandard } from "../LessonsModels/Lesson";
import Answer from "./Answer";
import ElementQuestion from "./ElementQuestion";
import QuestionVisual from "./QuestionVisual";
import SubElementQuestion from "./SubElementQuestion";
import TestQuestion from "./TestQuestion";

export default interface Question {
  airman_categories: string;
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standard_id: string;
  answers: Answer[];
  deprecated: boolean;
  display_text: string;
  element_questions: ElementQuestion[];
  elements: string | null;
  explanation: string;
  id: string;
  question_visuals: QuestionVisual[];
  reference: string;
  sub_element_questions: SubElementQuestion[];
  test_questions: TestQuestion[];
}
