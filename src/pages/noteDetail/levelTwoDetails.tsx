import { Fragment, FunctionComponent } from "react";
import Note from "../../model/note";

interface LevelTwoDetailsProps {
    note: Note|undefined
}
 
const LevelTwoDetails: FunctionComponent<LevelTwoDetailsProps> = (props) => {
    const note = props.note;
    return ( 
        <Fragment>
        <h2>Wrong Thinking</h2>
        <p>{note?.wrongThinking}</p>
        <h2>Confirming evidence of negative thought</h2>
        <p>{note?.ceont}</p>
        <h2>Contradicting evidence of negative thought</h2>
        <p>{note?.ceontP}</p>
        <h2>Congitive Continum</h2>
        <p>{note?.cognitiveContinuum}</p>
        <h2>Alternative Thought</h2>
        <p>{note?.alternativeThought}</p>
        <h2>New Emotion</h2>
        <p>{note?.newEmotion}</p>
        <h2>New Behaviour</h2>
        <p>{note?.newBehaviour}</p>
        <h2>Degree of belief</h2>
        <p>{note?.degreeOfBelief}</p>
        <h2>Degree of excution</h2>
        <p>{note?.degreeOfExcution}</p>
      </Fragment>
     );
}
 
export default LevelTwoDetails;