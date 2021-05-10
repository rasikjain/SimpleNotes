import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Notes } from '../models/notes';
import { NotesItem } from './NotesItem';

interface NotesQueryResponse {
  getAllNotes: Notes[];
}

const GET_NOTES_LIST = gql`
  query {
    getAllNotes {
      id
      title
      description
      backgroundColor
    }
  }
`;

export const NotesList = () => {
  const { data, error, loading } = useQuery<NotesQueryResponse>(GET_NOTES_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <div className="row">
      {data?.getAllNotes.map((notesItem: Notes) => (
        <div className="col-lg-4 mb-3" key={notesItem.id}>
          <NotesItem {...notesItem}></NotesItem>
        </div>
      ))}
    </div>
  );
};
