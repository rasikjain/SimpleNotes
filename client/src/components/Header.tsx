import React, { useState } from 'react';
import { NotesFormModal } from './NotesFormModal';

const Header = () => {
  const [isModalOpen, setModalOpenState] = useState(false);

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setModalOpenState(false);
  };

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
          <NotesFormModal closeModal={closeModal} showModal={isModalOpen}></NotesFormModal>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
