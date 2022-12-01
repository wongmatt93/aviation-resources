import {
  AirmanCertificationStandard,
  ResourcesAoas,
} from "../LessonsModels/Lesson";
import Task from "./Task";

export default interface AOOOutline {
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standards_id: string;
  created_at: string;
  id: string;
  name: string;
  numeral: string;
  order: number;
  resources_aoas: ResourcesAoas[];
  tasks: Task[];
  updated_at: string;
}
