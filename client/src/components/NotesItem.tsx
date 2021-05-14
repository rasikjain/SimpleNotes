import { Notes } from '../models/notes';
import { useDeleteNotes } from '../operations/mutations/deleteNotes';
import dateformat from 'dateformat';
import React, { useState } from 'react';
import { NotesFormModal } from './NotesFormModal';

export const NotesItem = (notesDataItem: Notes) => {
  //DELETE NOTES MUTATE
  const { deleteNotesMutate } = useDeleteNotes();

  const handleDelete = (id: string) => {
    deleteNotesMutate({
      variables: { id: id },
    });
  };

  const [isModalOpen, setModalOpenState] = useState(false);

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setModalOpenState(false);
  };

  return (
    <div>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body" style={{ backgroundColor: notesDataItem.backgroundColor || '#fff' }}>
          <h5 className="card-title text-center">{notesDataItem.title}</h5>
          <p className="card-text text-start">
            <span className="display-linebreak">{notesDataItem.description}</span>
          </p>
        </div>
        <div className="m-1 row">
          <div className="col-md-6 text-start">
            <small className="text-muted">Edited: {dateformat(notesDataItem.updatedAt, 'mmm dd, yyyy')}</small>
          </div>
          <div className="card-text col-md-6 text-end">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm mx-2"
              onClick={() => handleDelete(notesDataItem.id)}
            >
              Delete
            </button>
            <button type="button" className="btn btn-outline-primary btn-sm mx-2" onClick={openModal}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <div>
        <NotesFormModal
          closeModal={closeModal}
          showModal={isModalOpen}
          title={notesDataItem.title}
          description={notesDataItem.description}
          backgroundColor={notesDataItem.backgroundColor as string}
          notesID={notesDataItem.id}
        ></NotesFormModal>
      </div>
    </div>
  );
};
