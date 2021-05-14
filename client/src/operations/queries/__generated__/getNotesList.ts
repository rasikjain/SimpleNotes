/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNotesList
// ====================================================

export interface getNotesList_notesList {
  __typename: "Notes";
  id: string;
  title: string;
  description: string;
  backgroundColor: string | null;
  isArchived: boolean | null;
  createdAt: any;
  updatedAt: any;
}

export interface getNotesList {
  /**
   * Get List of Notes
   */
  notesList: getNotesList_notesList[];
}
