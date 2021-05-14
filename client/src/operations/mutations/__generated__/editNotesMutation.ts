/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotesInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: editNotesMutation
// ====================================================

export interface editNotesMutation_updateNotes {
  __typename: "Notes";
  id: string;
  title: string;
  description: string;
  backgroundColor: string | null;
  isArchived: boolean | null;
  createdAt: any;
  updatedAt: any;
}

export interface editNotesMutation {
  updateNotes: editNotesMutation_updateNotes;
}

export interface editNotesMutationVariables {
  editNotesInput: NotesInput;
}
