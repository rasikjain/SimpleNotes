/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NotesInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createNotesMutation
// ====================================================

export interface createNotesMutation_createNotes {
  __typename: "Notes";
  id: string;
  title: string;
  description: string;
  backgroundColor: string | null;
  isArchived: boolean | null;
}

export interface createNotesMutation {
  createNotes: createNotesMutation_createNotes;
}

export interface createNotesMutationVariables {
  newNotesInput: NotesInput;
}
