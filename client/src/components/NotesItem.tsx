import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { Notes } from '../models/notes';
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
    deleteNotes({ variables: { id: id } });
  };
  return (
    <div>
      <div className="card" style={{ width: '30rem', backgroundColor: notesDataItem.backgroundColor || '#fff' }}>
        <div className="card-header">
          <h5 className="card-title">{notesDataItem.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{notesDataItem.description}</p>
          <button type="button" className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(notesDataItem.id)}>
            Delete
          </button>
          <button type="button" className="btn btn-primary btn-sm mx-2" onClick={() => {}}>
            Edit
          </button>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};
