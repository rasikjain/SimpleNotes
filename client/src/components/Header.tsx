import { gql, useMutation } from '@apollo/client';
import React, { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createNotesMutationVariables, createNotesMutation_createNotes } from './__generated__/createNotesMutation';

const Header = () => {
  const [isModalOpen, setModalOpenState] = useState(false);

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setTitle('');
    setDescription('');
    setModalOpenState(false);
  };

  const CREATE_NOTES_MUTATION = gql`
    mutation createNotesMutation($newNotesInput: NotesInput!) {
      createNotes(newNotesInput: $newNotesInput) {
        id
        title
        description
        backgroundColor
        isArchived
      }
    }
  `;

  const [createNotes, { data, loading, error }] =
    useMutation<createNotesMutation_createNotes, createNotesMutationVariables>(CREATE_NOTES_MUTATION);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNotes({
      variables: {
        newNotesInput: { description: description, title: title },
      },
    });

    closeModal();
  };

  const [title, setTitle] = useState<string>('');

  const [description, setDescription] = useState<string>('');

  const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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

          <Modal animation={false} show={isModalOpen} onHide={closeModal} size="lg">
            <form onSubmit={handleSubmit} noValidate={true}>
              <Modal.Header>
                <Modal.Title>Create New Notes</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    onChange={handleTitleInput}
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
                    onChange={handleDescriptionInput}
                    value={description}
                  ></textarea>
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
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
