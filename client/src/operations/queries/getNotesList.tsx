import { gql } from '@apollo/client';

export const GET_NOTES_LIST = gql`
  query getNotesList {
    notesList {
      id
      title
      description
      backgroundColor
      isArchived
      createdAt
      updatedAt
    }
  }
`;
