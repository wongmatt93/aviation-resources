import { gql } from "@apollo/client";

export const INSERT_LESSON = gql`
  mutation {
    insert_lesson(
      objects: {
        created_by_user_id: "65edcf49-c7aa-4389-a842-66733ba2e867"
        name: "Your Mom"
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
  mutation {
    delete_lesson(where: { name: { _eq: "Your Mom" } }) {
      returning {
        name
      }
    }
  }
`;
