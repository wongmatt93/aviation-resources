import { gql } from "@apollo/client";

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

export const GET_LESSONS = gql`
  {
    lesson(where: { name: { _eq: "Demo Lesson" } }) {
      created_at
      name
      id
      lesson_tasks {
        id
        task {
          area_of_operation {
            numeral
            id
            name
            airman_certification_standard {
              abbreviation
            }
          }
          name
          letter
        }
      }
    }
  }
`;

export const GET_TESTS = gql`
  {
    test(
      where: { app_user_id: { _eq: "a105afae-a4bb-4b3e-8547-eb967e24291e" } }
    ) {
      id
      test_questions {
        id
        question {
          id
          airman_categories
          display_text
          answers {
            id
            display_text
            is_correct
          }
          airman_certification_standard {
            abbreviation
            name
          }
          reference
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
    airman_certification_standards {
      id
      name
      area_of_operations {
        order
        name
        numeral
        id
        tasks(order_by: { letter: asc }) {
          name
          id
          letter
          objective
          knowledge_description
          risk_management_description
          skills_description
          resources {
            resource {
              urlString
              id
              documentName
              documentNumber
              urlString
              thumbNailURL
            }
          }
          elements {
            text
            id
            abbreviation_code
            sub_elements(order_by: { text: asc }) {
              id
              abbreviation_code
              text
            }
            type {
              id
              text
            }
          }
        }
      }
    }
  }
`;