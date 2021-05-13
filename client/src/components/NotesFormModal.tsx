import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import { useCreateNotes } from '../operations/mutations/createNotes';

export interface NotesFormModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const NotesFormModal = (props: NotesFormModalProps) => {
  //State
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  //CREATE NOTES MUTATE
  const { createNotesMutate } = useCreateNotes();

  const closeModal = () => {
    setTitle('');
    setDescription('');
    setBackgroundColor('');
    props.closeModal();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createNotesMutate({
      variables: {
        newNotesInput: { description: description, title: title, backgroundColor: backgroundColor, isArchived: false },
      },
    });

    closeModal();
  };

  return (
    <Modal animation={false} show={props.showModal} onHide={closeModal} size="lg">
      <form onSubmit={handleSubmit} noValidate={true}>
        <Modal.Header>
          <Modal.Title>Create New Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
              placeholder="Title"
              value={title}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              rows={8}
              id="description"
              placeholder="Enter text here..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="row">
              <div>
                <label htmlFor="background">Background</label>
              </div>

              <CirclePicker
                color={backgroundColor}
                onChangeComplete={(color) => setBackgroundColor(color.hex)}
                width="400px"
                circleSize={20}
                colors={[
                  '#edaaa6',
                  '#e6da35',
                  '#f09854',
                  '#a1e665',
                  '#15b7ed',
                  '#21ebdd',
                  '#a99af5',
                  '#e077c6',
                  '#f0546e',
                ]}
              ></CirclePicker>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
