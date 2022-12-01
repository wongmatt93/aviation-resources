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
  mutation NewTestForm($id: uuid!, $acs_id: uuid!) {
    insert_test(
      objects: { airman_certification_standards_id: $acs_id, app_user_id: $id }
    ) {
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
