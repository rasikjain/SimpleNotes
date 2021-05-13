import { gql, useMutation } from '@apollo/client';
import { GET_NOTES_LIST } from '../queries/getNotesList';
import { getNotesList } from '../queries/__generated__/getNotesList';
import { createNotesMutationVariables, createNotesMutation_createNotes } from './__generated__/createNotesMutation';

const CREATE_NOTES_MUTATION = gql`
  mutation createNotesMutation($newNotesInput: NotesInput!) {
    createNotes(newNotesInput: $newNotesInput) {
      id
      title
      description
      backgroundColor
      isArchived
    }
  }
`;

export const useCreateNotes = () => {
  const [createNotesMutate, { data, loading, error }] = useMutation<
    createNotesMutation_createNotes,
    createNotesMutationVariables
  >(CREATE_NOTES_MUTATION, {
    update(cache, { data }) {
      const existingNotes: getNotesList = cache.readQuery({ query: GET_NOTES_LIST }) ?? { notesList: [] };

      if (data) {
        const newNotesList = [
          ...existingNotes.notesList,
          {
            id: data?.id,
            title: data?.title,
            description: data?.description,
            backgroundColor: data?.backgroundColor,
            isArchived: data?.isArchived,
          },
        ];

        cache.writeQuery({
          query: GET_NOTES_LIST,
          data: {
            notesList: newNotesList,
          },
        });
      }
    },
  });

  return { createNotesMutate, data, error };
};
