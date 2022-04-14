import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import { useEffect } from "react";
import Note from "./model/note";
import { notesActions } from "./store/notes-slice";
import Layout from "./components/Layout/Layout";
import NoteDetailPage from "./pages/noteDetail";
import NoteEditPage from "./pages/noteEdit";
import AddNotePage from "./pages/addNote";
import MainNavigation from "./components/Layout/MainNavigation";

const DUMMY_DATA: Note[] = [
  {
    id: "n1",
    situation: "situation",
    idea: "some idea",
    emotion: "emotion",
    behaviour: "behaviour",
    wrongThinking: "wrong thinking",
    ceont: "ceont",
    ceontP: "ceontp",
    cognitiveContinuum: 0,
    alternativeThought: "alternative thoughts",
    newEmotion: "new emotion",
    newBehaviour: "new behaviour",
    degreeOfBelief: 0,
    degreeOfExcution: 0,
    date: "1/8/2022",
    time: "19:00",
  },
  {
    id: "n2",
    situation: "situation",
    idea: "some idea",
    emotion: "emotion",
    behaviour: "behaviour",
    wrongThinking: "wrong thinking",
    ceont: "ceont",
    ceontP: "ceontp",
    cognitiveContinuum: 0,
    alternativeThought: "alternative thoughts",
    newEmotion: "new emotion",
    newBehaviour: "new behaviour",
    degreeOfBelief: 0,
    degreeOfExcution: 0,
    date: "1/8/2022",
    time: "19:00",
  },
];
function App() {
  const isLogedin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notesActions.replaceNotes(DUMMY_DATA));
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        {isLogedin && <Route path="/" element={<HomePage />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        {isLogedin && <Route path="/addNote" element={<AddNotePage />} />}
        {isLogedin && (
          <Route path="/note/:noteId" element={<NoteDetailPage />} />
        )}
        {isLogedin && (
          <Route path="/noteEdit/:noteId" element={<NoteEditPage />} />
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
