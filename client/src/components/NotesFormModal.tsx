import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Notes } from '../models/notes';

export interface NotesFormModalProps {
  showModal: boolean;
  closeModal: () => void;
  createNotes: (notes: Notes) => void;
}
export const NotesFormModal = (props: NotesFormModalProps) => {
  const createNotes = () => {
    const notesData: Notes = {
      title: '',
      backgroundColor: '',
      description: '',
      id: '',
    };

    props.createNotes(notesData);
  };

  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header>
        <Modal.Title>Create New Notes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title"></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" rows={3} id="description" placeholder="Enter text here..."></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={createNotes}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
