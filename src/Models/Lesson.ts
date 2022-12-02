import AppUser from "./AppUser";
import Resource from "./Resource";
import AirmanCertificationStandard from "./AirmanCertificationStandard.ts";
import AreaOfOperation from "./AreaOfOperation";

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

export interface ResourcesAcs {
  acs_id: string;
  airman_certification_standard: AirmanCertificationStandard;
  created_at: string;
  id: string;
  resource: Resource;
  resource_id: string;
  updated_at: string;
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

export interface Resources {
  created_at: string;
  id: string;
  resource: Resource;
  resource_id: string;
  task: Task;
  task_id: string;
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
