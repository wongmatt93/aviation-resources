import AppUser from "../AppUser";
import { AirmanCertificationStandard } from "../LessonsModels/Lesson";
import TestQuestion from "./TestQuestion";

export default interface Test {
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standards_id: string;
  app_user: AppUser;
  app_user_id: string;
  created_at: string;
  id: string;
  test_questions: TestQuestion[];
}
