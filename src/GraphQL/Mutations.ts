import { gql } from "@apollo/client";

export const DELETE_APP_USER = gql`
  mutation DeleteUser($email: String!) {
    delete_app_user(where: { email: { _eq: $email } }) {
      returning {
        id
      }
    }
  }
`;

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

export const INSERT_COMMUNITY_POST = gql`
  mutation NewCommunityPostForm($id: uuid!, $text: String!) {
    insert_community_conversation(
      objects: { publishing_user_id: $id, conversation_text: $text }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_COMMUNITY_POST = gql`
  mutation CommunityConversationCard($id: uuid!) {
    delete_community_conversation(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_COMMUNITY_REPLY = gql`
  mutation NewCommunityReplyForm(
    $post_id: uuid!
    $text: String!
    $user_id: uuid!
  ) {
    insert_community_conversation_reply(
      objects: {
        community_conversation_reply_text: $text
        community_conversation_id: $post_id
        publishing_user_id: $user_id
      }
    ) {
      returning {
        id
      }
    }
  }
`;
