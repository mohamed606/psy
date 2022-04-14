import { Fragment, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store";
import LevelTwoDetails from "./levelTwoDetails";

interface QuoteDetailProps {}

const NoteDetailPage: FunctionComponent<QuoteDetailProps> = () => {
  const params = useParams();
  const { noteId } = params;
  const note = useSelector((state: RootState) => state.notes.notes).find(
    (note) => note.id === noteId
  );
  const userLevel = useSelector((state: RootState) => state.notes.userLevel);
  return (
    <Fragment>
      <h2>Situation</h2>
      <p>{note?.situation}</p>
      <h2>Idea</h2>
      <p>{note?.idea}</p>
      <h2>Emotion</h2>
      <p>{note?.emotion}</p>
      <h2>Behaviour</h2>
      <p>{note?.behaviour}</p>
      {userLevel === 2 && (
        <LevelTwoDetails note={note}/>
      )}
      <Link className="btn" to={`/noteEdit/${noteId}`}>
        Edit
      </Link>
    </Fragment>
  );
};

export default NoteDetailPage;
