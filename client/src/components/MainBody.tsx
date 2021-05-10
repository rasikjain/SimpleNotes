import React from 'react';
import { NotesForm } from './NotesForm';
import { NotesList } from './NotesList';

export const MainBody = () => {
  return (
    <div className="container">
      <NotesForm></NotesForm>
      <NotesList></NotesList>
    </div>
  );
};
