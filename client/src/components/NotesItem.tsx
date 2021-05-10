import React from 'react';
import { Notes } from '../models/notes';

export const NotesItem = (notesDataItem: Notes) => {
  return (
    <div>
      <div className="card" style={{ width: '20rem', backgroundColor: notesDataItem.backgroundColor || '#fff' }}>
        <div className="card-header">
          <h5 className="card-title">{notesDataItem.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{notesDataItem.description}</p>
          <a href="#" className="card-link">
            Delete
          </a>
          <a href="#" className="card-link">
            Edit
          </a>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};
