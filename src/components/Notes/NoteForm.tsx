import React, { Fragment, FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Note from "../../model/note";
import { RootState } from "../../store";
import { notesActions } from "../../store/notes-slice";
import Card from "../UI/Card";
import classes from "./Noteform.module.css";

interface NoteFormProps {
  note: Note | undefined;
}

const NoteForm: FunctionComponent<NoteFormProps> = (props) => {
  const note = props.note;
  const userLevel = useSelector((state: RootState) => state.notes.userLevel);
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [situationInput, stuationChangeHandler] = useInput(
    note === undefined ? "" : note.situation
  );
  const [ideaInput, ideaChangeHandler] = useInput(
    note === undefined ? "" : note.idea
  );
  const [emotionInput, emotionChangeHandler] = useInput(
    note === undefined ? "" : note.emotion
  );
  const [behaviourInput, behaviourChangeHandler] = useInput(
    note === undefined ? "" : note.behaviour
  );
  const [wrongThinkingInput, wrongThinkingChangeHandler] = useInput(
    note === undefined ? "" : note.wrongThinking
  );
  const [ceontInput, ceontChangeHandler] = useInput(
    note === undefined ? "" : note.ceont
  );
  const [ceontPInput, ceontPChangeHandler] = useInput(
    note === undefined ? "" : note.ceontP
  );
  const [congitiveContinumInput, cognitiveContinuumChangeHandler] = useInput(
    note === undefined ? 0 : note.cognitiveContinuum
  );
  const [alternativeThoughtInput, alternativeThoughtChangeHandler] = useInput(
    note === undefined ? "" : note.alternativeThought
  );
  const [newEmotionInput, newEmotionChangeHandler] = useInput(
    note === undefined ? "" : note.newEmotion
  );
  const [newBehaviourInput, newBehaviourChangeHandler] = useInput(
    note === undefined ? "" : note.newBehaviour
  );
  const [degreeOfBeliefInput, degreeOfBeliefChangeHandler] = useInput(
    note === undefined ? 0 : note.degreeOfBelief
  );
  const [degreeOfExcutionInput, degreeOfExcutionChangeHandler] = useInput(
    note === undefined ? 0 : note.degreeOfExcution
  );

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (situationInput.length === 0) {
      setIsFormValid(false);
      return;
    } else {
      setIsFormValid(true);
    }
    const dateObj = new Date();
    const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const date = dateObj.toLocaleDateString();
    const tempNote: Note = {
      id: note === undefined ? dateObj.toISOString() : note.id,
      situation: situationInput,
      idea: ideaInput,
      emotion: emotionInput,
      behaviour: behaviourInput,
      wrongThinking: wrongThinkingInput,
      ceont: ceontInput,
      ceontP: ceontPInput,
      cognitiveContinuum: congitiveContinumInput,
      alternativeThought: alternativeThoughtInput,
      newEmotion: newEmotionInput,
      newBehaviour: newBehaviourInput,
      degreeOfBelief: degreeOfBeliefInput,
      degreeOfExcution: degreeOfExcutionInput,
      date: note === undefined ? date : note.date,
      time: note === undefined ? time : note.time,
    };
    dispatch(notesActions.addNote(tempNote));
    navigator("/", { replace: true });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="situation">Situation</label>
          {!isFormValid && <p>Situation can't be empty</p>}
          <input
            type="text"
            id="situation"
            value={situationInput}
            onChange={stuationChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="idea">Idea</label>
          <input
            id="idea"
            type="text"
            value={ideaInput}
            onChange={ideaChangeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="emotion">Emotion</label>
          <input
            type="text"
            id="emotion"
            value={emotionInput}
            onChange={emotionChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="behaviour">Behaviour</label>
          <input
            type="text"
            id="behaviour"
            value={behaviourInput}
            onChange={behaviourChangeHandler}
          />
        </div>
        {userLevel === 2 && (
          <Fragment>
            <div className={classes.control}>
              <label htmlFor="wrongThinking">Wrong Thinking</label>
              <input
                type="text"
                id="wrongThinking"
                value={wrongThinkingInput}
                onChange={wrongThinkingChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="ceont">
                Confirming evidence of negative thought
              </label>
              <input
                type="text"
                id="ceont"
                value={ceontInput}
                onChange={ceontChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="ceontP">
                contradicting evidence of negative thought
              </label>
              <input
                type="text"
                id="ceontP"
                value={ceontPInput}
                onChange={ceontPChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="cognitiveContinum">Cognitive continum</label>
              <input
                type="number"
                id="cognitiveContinum"
                min="0"
                max="10"
                step="1"
                value={congitiveContinumInput}
                onChange={cognitiveContinuumChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="altThought">Alternative thought</label>
              <input
                type="text"
                id="altThought"
                value={alternativeThoughtInput}
                onChange={alternativeThoughtChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="newEmotion">New emotion</label>
              <input
                type="text"
                id="newEmotion"
                value={newEmotionInput}
                onChange={newEmotionChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="newBehaviour">New behaviour</label>
              <input
                type="text"
                id="newBehaviour"
                value={newBehaviourInput}
                onChange={newBehaviourChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="degreeOfBelief">Degree of belief</label>
              <input
                type="number"
                id="degreeOfBelief"
                min="0"
                max="10"
                step="1"
                value={degreeOfBeliefInput}
                onChange={degreeOfBeliefChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="degreeOfExcution">Degree of excution</label>
              <input
                type="number"
                id="degreeOfExcution"
                min="0"
                max="10"
                step="1"
                value={degreeOfExcutionInput}
                onChange={degreeOfExcutionChangeHandler}
              />
            </div>
          </Fragment>
        )}
        <button className="btn">Done</button>
      </form>
    </Card>
  );
};

export default NoteForm;
