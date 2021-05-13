import { gql, useMutation } from '@apollo/client';
import { GET_NOTES_LIST } from '../queries/getNotesList';
import { getNotesList } from '../queries/__generated__/getNotesList';
import { deleteNotesMutation, deleteNotesMutationVariables } from './__generated__/deleteNotesMutation';

const DELETE_NOTES_MUTATION = gql`
  mutation deleteNotesMutation($id: String!) {
    deleteNotes(id: $id)
  }
`;

export const useDeleteNotes = () => {
  const [deleteNotesMutate, { data, loading, error }] = useMutation<deleteNotesMutation, deleteNotesMutationVariables>(
    DELETE_NOTES_MUTATION,
    {
      update: (cache, { data }) => {
        if (data?.deleteNotes !== '') {
          const existingNotes: getNotesList = cache.readQuery({ query: GET_NOTES_LIST }) ?? { notesList: [] };
          const updatedNotesList = existingNotes.notesList.filter((x) => x.id !== data?.deleteNotes);
          cache.writeQuery({
            query: GET_NOTES_LIST,
            data: {
              notesList: updatedNotesList,
            },
          });
        }
      },
    }
  );

  return { deleteNotesMutate, data, error };
};
