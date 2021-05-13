import { gql, useMutation } from '@apollo/client';
import { Notes } from '../models/notes';
import { GET_NOTES_LIST } from '../operations/queries/getNotesList';
import { getNotesList } from '../operations/queries/__generated__/getNotesList';
import { deleteNotesMutationVariables } from './__generated__/deleteNotesMutation';

export const NotesItem = (notesDataItem: Notes) => {
  const DELETE_NOTES_MUTATION = gql`
    mutation deleteNotesMutation($id: String!) {
      deleteNotes(id: $id)
    }
  `;

  const [deleteNotes, { data, loading, error }] =
    useMutation<boolean, deleteNotesMutationVariables>(DELETE_NOTES_MUTATION);

  const handleDelete = (id: string) => {
    deleteNotes({
      variables: { id: id },
      optimisticResponse: true,
      update: (cache) => {
        const existingNotes: getNotesList = cache.readQuery({ query: GET_NOTES_LIST }) ?? { notesList: [] };
        const updatedNotesList = existingNotes.notesList.filter((t) => t.id !== id);
        cache.writeQuery({
          query: GET_NOTES_LIST,
          data: {
            notesList: updatedNotesList,
          },
        });
      },
    });
  };

  return (
    <div>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body" style={{ backgroundColor: notesDataItem.backgroundColor || '#fff' }}>
          <h5 className="card-title text-center">{notesDataItem.title}</h5>
          <p className="card-text">
            <span className="display-linebreak">{notesDataItem.description}</span>
          </p>
        </div>
        <div className="m-2">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm mx-2"
            onClick={() => handleDelete(notesDataItem.id)}
          >
            Delete
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm mx-2" onClick={() => {}}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
