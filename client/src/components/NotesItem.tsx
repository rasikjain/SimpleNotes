import React from 'react';
import { Notes } from '../models/notes';

export const NotesItem = (notesDataItem: Notes) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{notesDataItem.title}</h5>
          <p className="card-text">{notesDataItem.description}</p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};
