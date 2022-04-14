import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Note from "../model/note";

const initialNotes: {
  notes: Note [],
  userLevel: number
} = {
  notes: [],
  userLevel: 1
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotes,
  reducers: {
      addNote: (state, action: PayloadAction<Note>) => {
        const notes = state.notes.filter(note => note.id !== action.payload.id);
        state.notes = notes.concat(action.payload);
      },
      removeNote: (state, action: PayloadAction<string>) => {
          state.notes = state.notes.filter(note => note.id !== action.payload);
      },
      replaceNotes: (state, action: PayloadAction<Note[]>) => {
          state.notes = action.payload;
      },
      toggleUserLevel: (state) => {
        if (state.userLevel === 1){
          state.userLevel = 2;
        }else {
          state.userLevel = 1;
        }
      },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice;

