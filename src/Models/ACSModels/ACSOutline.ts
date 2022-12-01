import { ResourcesAcs } from "../LessonsModels/Lesson";
import Question from "../TestsModels/Question";
import Test from "../TestsModels/Test";
import AOOOutline from "./AOOOutline";

export default interface ACSOutline {
  id: string;
  name: string;
  abbreviation: string;
  created_at: string;
  icon_value: string;
  ready: boolean;
  area_of_operations: AOOOutline[];
  questions: Question[];
  resources_acs: ResourcesAcs[];
  tests: Test[];
  updated_at: string;
}
