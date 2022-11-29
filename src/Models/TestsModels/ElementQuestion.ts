import Question from "./Question";
import Element from "./Element";

export default interface ElementQuestion {
  element: Element;
  element_id: string;
  id: string;
  question: Question;
  question_id: string;
}
