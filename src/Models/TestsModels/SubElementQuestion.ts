import Question from "./Question";
import SubElement from "./SubElement";

export default interface SubElementQuestion {
  id: string;
  question: Question;
  question_id: string;
  sub_element: SubElement;
  sub_element_id: string;
}
