import { FunctionComponent } from "react";
import NoteForm from "../../components/Notes/NoteForm";

interface AddNotePageProps {
    
}
 
const AddNotePage: FunctionComponent<AddNotePageProps> = () => {
    return ( <NoteForm note={undefined}/> );
}
 
export default AddNotePage;