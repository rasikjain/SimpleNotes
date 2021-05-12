import { gql, useMutation } from '@apollo/client';
import React, { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GET_NOTES_LIST } from './NotesList';
import { createNotesMutationVariables, createNotesMutation_createNotes } from './__generated__/createNotesMutation';
import { getNotesList } from './__generated__/getNotesList';
import { CirclePicker, Color } from 'react-color';

const Header = () => {
  const [isModalOpen, setModalOpenState] = useState(false);

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setTitle('');
    setDescription('');
    setBackgroundColor('');
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

  const [createNotes, { data, loading, error }] = useMutation<
    createNotesMutation_createNotes,
    createNotesMutationVariables
  >(CREATE_NOTES_MUTATION, {
    update(cache, { data }) {
      const existingNotes: getNotesList = cache.readQuery({ query: GET_NOTES_LIST }) ?? { notesList: [] };

      if (data) {
        const newNotesList = [
          ...existingNotes.notesList,
          {
            id: data?.id,
            title: data?.title,
            description: data?.description,
            backgroundColor: data?.backgroundColor,
            isArchived: data?.isArchived,
          },
        ];

        cache.writeQuery({
          query: GET_NOTES_LIST,
          data: {
            notesList: newNotesList,
          },
        });
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createNotes({
      variables: {
        newNotesInput: { description: description, title: title, backgroundColor: backgroundColor, isArchived: false },
      },
    });

    closeModal();
  };

  const [title, setTitle] = useState<string>('');

  const [description, setDescription] = useState<string>('');

  const [backgroundColor, setBackgroundColor] = useState<string>('');

  const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleColorChangeComplete = (hex: string) => {
    setBackgroundColor(hex);
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
                      onChangeComplete={(color) => handleColorChangeComplete(color.hex)}
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
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
