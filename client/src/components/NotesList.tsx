import { useQuery } from '@apollo/client';
import { Notes } from '../models/notes';
import { GET_NOTES_LIST } from '../operations/queries/getNotesList';
import { getNotesList } from '../operations/queries/__generated__/getNotesList';
import { NotesItem } from './NotesItem';

export const NotesList = () => {
  const { data, error, loading } = useQuery<getNotesList>(GET_NOTES_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <div className="row">
      {data?.notesList.map((notesItem: Notes) => (
        <div className="col-sm-6 mb-3 rounded-lg" key={notesItem.id}>
          <NotesItem {...notesItem}></NotesItem>
        </div>
      ))}
    </div>
  );
};
