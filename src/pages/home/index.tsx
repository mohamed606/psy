import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesList from "../../components/Notes/NotesList";
import { RootState } from "../../store";
import { notesActions } from "../../store/notes-slice";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();
  const deleteHandler = (id: string) => {
    dispatch(notesActions.removeNote(id));
  };
  return (
    <NotesList notes={notes} onDelete={deleteHandler}/>
  );
};

export default HomePage;
