import AppUser from "../AppUser";
import Resource from "../ResourceModels/Resource";
import Element from "../TestsModels/Element";
import Question from "../TestsModels/Question";
import Test from "../TestsModels/Test";

export interface ResourcesAcs {
  acs_id: string;
  airman_certification_standard: AirmanCertificationStandard;
  created_at: string;
  id: string;
  resource: Resource;
  resource_id: string;
  updated_at: string;
}

export interface AirmanCertificationStandard {
  abbreviation: string;
  area_of_operations: AreaOfOperation[];
  created_at: string;
  icon_value: string;
  id: string;
  name: string;
  questions: Question[];
  ready: boolean;
  resources_acs: ResourcesAcs;
  tests: Test[];
}

export interface ResourcesAoas {
  aoa_id: string;
  area_of_operation: AreaOfOperation;
  created_at: string;
  id: string;
  resource: Resource;
  resource_id: string;
  updated_at: string;
}

export interface AreaOfOperation {
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standards_id: string;
  created_at: string;
  id: string;
  name: string;
  numeral: string;
  order: number;
  resources_aoas: ResourcesAoas;
  tasks: Task[];
  updated_at: string;
}

export interface Resources {
  created_at: string;
  id: string;
  resource: Resource;
  resource_id: string;
  task: Task;
  task_id: string;
  updated_at: string;
}

export interface Task {
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

export interface LessonTask {
  completed: boolean;
  id: string;
  lesson: Lesson;
  lesson_id: string;
  notes: string | null;
  task: Task;
  task_id: string;
}

export interface Lesson {
  app_user: AppUser;
  created_at: string;
  created_by_user_id: string;
  id: string;
  lesson_tasks: LessonTask[];
  name: string;
  updated_at: string;
}
