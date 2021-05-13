import { Notes } from '../models/notes';
import { useDeleteNotes } from '../operations/mutations/deleteNotes';

export const NotesItem = (notesDataItem: Notes) => {
  //DELETE NOTES MUTATE
  const { deleteNotesMutate } = useDeleteNotes(notesDataItem.id);

  const handleDelete = (id: string) => {
    deleteNotesMutate({
      variables: { id: id },
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
