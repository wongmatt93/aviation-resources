import AppUser from "../AppUser";

export interface AirmanCertificationStandard {
  abbreviation: string;
}

export interface AreaOfOperation {
  id: string;
  name: string;
  numeral: string;
  airman_certification_standard: AirmanCertificationStandard;
}

export interface Task {
  name: string;
  letter: string;
  area_of_operation: AreaOfOperation;
}

export interface LessonTask {
  id: string;
  task: Task;
}

export interface Lesson {
  name: string;
  created_at: string;
  id: string;
  lesson_tasks: LessonTask[];
}
