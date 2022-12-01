import { gql } from "@apollo/client";

export const GET_APP_USERS = gql`
  query AuthContext($id: uuid!) {
    app_user(where: { id: { _eq: $id } }) {
      id
      created_at
      email
      highest_acs
      name
      purpose
      updated_at
    }
  }
`;

export const GET_RESOURCES = gql`
  query {
    resources {
      id
      documentName
      documentNumber
      urlString
      thumbNailURL
    }
  }
`;

export const GET_AOO = gql`
  query AcsOutlineItem($id: uuid!) {
    area_of_operation(
      where: { airman_certification_standards_id: { _eq: $id } }
    ) {
      id
      airman_certification_standards_id
      created_at
      name
      numeral
      order
      updated_at
    }
  }
`;

export const GET_TASKS = gql`
  query TaskItem($id: uuid!) {
    task(where: { area_of_operation_id: { _eq: $id } }) {
      id
      area_of_operation_id
      created_at
      knowledge_description
      letter
      name
      objective
      risk_management_description
      skills_description
      updated_at
    }
  }
`;

export const GET_LESSONS = gql`
  query LessonsContainer($id: uuid!) {
    lesson(where: { created_by_user_id: { _eq: $id } }) {
      id
      created_at
      created_by_user_id
      name
      updated_at
      lesson_tasks {
        id
        completed
        lesson_id
        notes
        task_id
        task {
          id
          created_at
          area_of_operation_id
          knowledge_description
          letter
          name
          objective
          risk_management_description
          skills_description
          updated_at
          area_of_operation {
            id
            airman_certification_standards_id
            created_at
            name
            numeral
            order
            updated_at
            airman_certification_standard {
              id
              abbreviation
              created_at
              icon_value
              name
              ready
              updated_at
            }
          }
        }
      }
    }
  }
`;

export const GET_TESTS = gql`
  query TestsContainer($id: uuid!) {
    test(where: { app_user_id: { _eq: $id } }) {
      id
      created_at
      app_user_id
      airman_certification_standards_id
      airman_certification_standard {
        id
        name
        created_at
        ready
        updated_at
        icon_value
        abbreviation
      }
      test_questions {
        id
        answer_id
        user_answered_correctly
        question_id
        question {
          airman_categories
          airman_certification_standard_id
          deprecated
          display_text
          elements
          explanation
          id
          reference
          answers {
            id
            display_letter
            display_text
            explanation
            is_correct
          }
          airman_certification_standard {
            id
            abbreviation
            created_at
            icon_value
            name
            ready
            updated_at
          }
        }
      }
    }
  }
`;

export const GET_COMMUNITY_POSTS = gql`
  {
    community_conversation {
      created_at
      id
      publishing_user_id
      updated_at
      conversation_text
      community_conversation_replies {
        community_conversation_id
        community_conversation_reply_text
        created_at
        id
        publishing_user_id
        updated_at
        app_user {
          created_at
          email
          highest_acs
          id
          name
          purpose
          updated_at
        }
      }
      app_user {
        created_at
        email
        highest_acs
        id
        name
        purpose
        updated_at
      }
    }
  }
`;

export const GET_ACS = gql`
  {
    airman_certification_standards(where: { id: {} }) {
      id
      created_at
      icon_value
      name
      ready
      updated_at
      abbreviation
      area_of_operations {
        id
        airman_certification_standards_id
        created_at
        name
        numeral
        order
        updated_at
        tasks {
          id
          area_of_operation_id
          created_at
          knowledge_description
          letter
          name
          objective
          risk_management_description
          skills_description
          updated_at
        }
      }
    }
  }
`;

export const GET_QUESTIONS = gql`
  {
    question {
      id
      airman_categories
      airman_certification_standard_id
      deprecated
      display_text
      elements
      explanation
      reference
    }
  }
`;
