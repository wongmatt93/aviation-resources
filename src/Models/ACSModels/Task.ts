import {
  AreaOfOperation,
  LessonTask,
  Resources,
} from "../LessonsModels/Lesson";
import Element from "../TestsModels/Element";

export default interface Task {
  area_of_operation: AreaOfOperation;
  area_of_operation_id: string;
  created_at: string;
  elements: Element[];
  id: string;
  knowledge_description: string;
  lesson_tasks: LessonTask[];
  letter: string;
  name: string;
  objective: string;
  resources: Resources;
  risk_management_description: string;
  skills_description: string;
  updated_at: string;
}
