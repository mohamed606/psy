import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteForm from "../../components/Notes/NoteForm";
import { RootState } from "../../store";

interface NoteFormPageProps {}

const NoteEditPage: FunctionComponent<NoteFormPageProps> = () => {
  const params = useParams();
  const { noteId } = params;
  const note = useSelector((state: RootState) => state.notes.notes).find(
    (note) => note.id === noteId
  );
  return <NoteForm note={note}/>;
};

export default NoteEditPage;
