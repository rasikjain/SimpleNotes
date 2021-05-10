import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { Notes } from '../models/notes';
import { NotesFormModal } from './NotesFormModal';

const Header = () => {
  const [isModalOpen, setModalOpenState] = useState(false);

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setModalOpenState(false);
  };

  const createNotes = (data: Notes) => {};

  interface createNotesQueryResponse {
    createNotes: Notes;
  }

  const GET_NOTES_LIST = gql`
    query {
      createNotes {
        id
        title
        description
        backgroundColor
      }
    }
  `;

  return (
    <div>
      <div className="row py-2">
        <div className="col-sm-10 col-10 text-center">
          <h3>Simple Notes App</h3>
        </div>
        <div className="col-sm-2 col-12 container-fluid">
          <button type="button" className="btn btn-primary btn-lg float-right" onClick={openModal}>
            Create New Notes
          </button>
          <NotesFormModal closeModal={closeModal} showModal={isModalOpen} createNotes={() => {}}></NotesFormModal>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
