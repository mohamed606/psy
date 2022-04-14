import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import notesSlice from "./notes-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, notes: notesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
