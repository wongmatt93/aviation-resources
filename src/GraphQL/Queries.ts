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
