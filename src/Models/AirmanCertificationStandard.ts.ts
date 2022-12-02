import { ResourcesAcs } from "./Lesson";
import AOOOutline from "./AreaOfOperation";
import { Question, Test } from "./Test";

export default interface AirmanCertificationStandard {
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
