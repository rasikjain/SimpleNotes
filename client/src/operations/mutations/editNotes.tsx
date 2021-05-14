import { gql, useMutation } from '@apollo/client';
import { GET_NOTES_LIST } from '../queries/getNotesList';
import { getNotesList } from '../queries/__generated__/getNotesList';
import { editNotesMutation_updateNotes, editNotesMutationVariables } from './__generated__/editNotesMutation';

const EDIT_NOTES_MUTATION = gql`
  mutation editNotesMutation($editNotesInput: NotesInput!) {
    updateNotes(editNotesInput: $editNotesInput) {
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

export const useEditNotes = () => {
  const [editNotesMutate, { data, loading, error }] =
    useMutation<editNotesMutation_updateNotes, editNotesMutationVariables>(EDIT_NOTES_MUTATION);

  return { editNotesMutate, data, error };
};
