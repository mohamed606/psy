import { FunctionComponent } from "react";
import Note from "../../model/note";
import NotesItem from "./NoteItem";
import classes from "./NotesList.module.css";

interface NotesListProps {
  notes: Note[];
  onDelete: (id: string) => void
}

const NotesList: FunctionComponent<NotesListProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.notes.map((note) => (
        <NotesItem key={note.id} note={note} onDelete={props.onDelete}/>
      ))}
    </ul>
  );
};

export default NotesList;
