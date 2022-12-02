import AirmanCertificationStandard from "./AirmanCertificationStandard.ts";
import { ResourcesAoas, Task } from "./Lesson";

export default interface AreaOfOperation {
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
