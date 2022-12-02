import AppUser from "./AppUser";
import AirmanCertificationStandard from "./AirmanCertificationStandard.ts";
import { Task } from "./Lesson";

export interface QuestionVisual {
  id: string;
  question: Question;
  question_id: string;
  s3_key: string;
}

export interface Element {
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

export interface ElementType {
  created_at: string;
  elements: Element[];
  id: string;
  text: string;
  updated_at: string;
}

export interface SubElementQuestion {
  id: string;
  question: Question;
  question_id: string;
  sub_element: SubElement;
  sub_element_id: string;
}

export interface SubElement {
  abbreviation_code: string;
  created_at: string;
  element: Element;
  element_id: string;
  id: string;
  sub_element_questions: SubElementQuestion[];
  text: string;
  updated_at: string;
}

export interface ElementQuestion {
  element: Element;
  element_id: string;
  id: string;
  question: Question;
  question_id: string;
}

export interface Question {
  airman_categories: string;
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standard_id: string;
  answers: Answer[];
  deprecated: boolean;
  display_text: string;
  element_questions: ElementQuestion[];
  elements: string | null;
  explanation: string;
  id: string;
  question_visuals: QuestionVisual[];
  reference: string;
  sub_element_questions: SubElementQuestion[];
  test_questions: TestQuestion[];
}

export interface Answer {
  display_letter: string;
  display_text: string;
  explanation: string;
  id: string;
  is_correct: boolean;
  question: Question;
  question_id: string;
  test_question_answers: TestQuestion[];
}

export interface TestQuestion {
  answer: Answer;
  answer_id: string;
  id: string;
  question: Question;
  question_id: string;
  test: Test;
  test_id: string;
  user_answered_correctly: boolean | null;
}

export interface Test {
  airman_certification_standard: AirmanCertificationStandard;
  airman_certification_standards_id: string;
  app_user: AppUser;
  app_user_id: string;
  created_at: string;
  id: string;
  test_questions: TestQuestion[];
}
