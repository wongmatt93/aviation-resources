import Element from "./Element";
import SubElementQuestion from "./SubElementQuestion";

export default interface SubElement {
  abbreviation_code: string;
  created_at: string;
  element: Element;
  element_id: string;
  id: string;
  sub_element_questions: SubElementQuestion[];
  text: string;
  updated_at: string;
}
