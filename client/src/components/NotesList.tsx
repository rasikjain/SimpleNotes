import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Notes } from '../models/notes';
import { NotesItem } from './NotesItem';
import { getNotesList } from './__generated__/getNotesList';

const GET_NOTES_LIST = gql`
  query getNotesList {
    notesList {
      id
      title
      description
      backgroundColor
      isArchived
    }
  }
`;

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
