import { gql } from "@apollo/client";

export const INSERT_LESSON = gql`
  mutation NewLessonForm(
    $id: uuid!
    $name: String!
    $data: [lesson_task_insert_input!]!
  ) {
    insert_lesson(
      objects: {
        created_by_user_id: $id
        name: $name
        lesson_tasks: { data: $data }
      }
    ) {
      returning {
        id
        name
      }
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation LessonCard($id: uuid!) {
    delete_lesson(where: { id: { _eq: $id } }) {
      returning {
        name
      }
    }
  }
`;

export const INSERT_TEST = gql`
  mutation NewTestForm(
    $id: uuid!
    $acs_id: uuid!
    $data: [test_question_insert_input!]!
  ) {
    insert_test(
      objects: {
        app_user_id: $id
        airman_certification_standards_id: $acs_id
        test_questions: { data: $data }
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_TEST_QUESTION = gql`
  mutation NewTestForm(
    $_set: test_question_set_input!
    $where: test_question_bool_exp!
  ) {
    update_test_question(_set: $_set, where: $where) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_TEST = gql`
  mutation TestCard($id: uuid!) {
    delete_test(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
