import { gql, useMutation } from '@apollo/client';
import { GET_NOTES_LIST } from '../queries/getNotesList';
import { getNotesList } from '../queries/__generated__/getNotesList';
import { deleteNotesMutationVariables } from './__generated__/deleteNotesMutation';

const DELETE_NOTES_MUTATION = gql`
  mutation deleteNotesMutation($id: String!) {
    deleteNotes(id: $id)
  }
`;

export const useDeleteNotes = (id: string) => {
  const [deleteNotesMutate, { data, loading, error }] = useMutation<boolean, deleteNotesMutationVariables>(
    DELETE_NOTES_MUTATION,
    {
      update: (cache, { data }) => {
        const existingNotes: getNotesList = cache.readQuery({ query: GET_NOTES_LIST }) ?? { notesList: [] };
        const updatedNotesList = existingNotes.notesList.filter((t) => t.id !== id);
        cache.writeQuery({
          query: GET_NOTES_LIST,
          data: {
            notesList: updatedNotesList,
          },
        });
      },
    }
  );

  return { deleteNotesMutate, data, error };
};
