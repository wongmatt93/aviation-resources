import { ElementType } from "react";
import { Task } from "../LessonsModels/Lesson";
import ElementQuestion from "./ElementQuestion";
import SubElement from "./SubElement";

export default interface Element {
  abbreviation_code: string;
  created_at: string;
  element_questions: ElementQuestion[];
  element_type_id: string;
  id: string;
  sub_elements: SubElement[];
  task: Task;
  task_id: string;
  text: string;
  type: ElementType;
  updated_at: string;
}
