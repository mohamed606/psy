import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Note from "../../model/note";
import classes from "./NoteItem.module.css";

interface NotesItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NotesItem: FunctionComponent<NotesItemProps> = (props) => {
  const navigate = useNavigate();
  const viewClickHandler = () => {
    navigate(`/note/${props.note.id}`);
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.note.situation}</p>
        </blockquote>
        <figcaption>{props.note.time}</figcaption>
        <figcaption>{props.note.date}</figcaption>
      </figure>
      <button className="btn" onClick={viewClickHandler}>
        View
      </button>
      <button
        className="btn"
        onClick={() => props.onDelete(props.note.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default NotesItem;
