import React from 'react';
import { FormText } from 'react-bootstrap';

interface NotesFormProps {}
export const NotesForm = (props: NotesFormProps) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Title"></input>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" rows={3} id="description"></textarea>
      </div>
    </form>
  );
};
