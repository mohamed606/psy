import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
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
  //const [note, setNote] = useState<Note|undefined>(props.note);
  const note = props.note;
  const userLevel = useSelector((state: RootState) => state.notes.userLevel);
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [situationInput, stuationChangeHandler] = useInput(
    note === undefined ? "" : note.situation
  );
  const [ideaInput, setIdeaInput] = useState<string>(
    note === undefined ? "" : note.idea
  );
  const [emotionInput, setEmotionInput] = useState<string>(
    note === undefined ? "" : note.emotion
  );
  const [behaviourInput, setBehaviourInput] = useState<string>(
    note === undefined ? "" : note.behaviour
  );
  const [wrongThinkingInput, setWrongThinkingInput] = useState<string>(
    note === undefined ? "" : note.wrongThinking
  );
  const [ceontInput, setCeontInput] = useState<string>(
    note === undefined ? "" : note.ceont
  );
  const [ceontPInput, setCeontPInput] = useState<string>(
    note === undefined ? "" : note.ceontP
  );
  const [congitiveContinumInput, setCongitiveContinumInput] = useState<number>(
    note === undefined ? 0 : note.cognitiveContinuum
  );
  const [alternativeThoughtInput, setAlternativeThoughtInput] =
    useState<string>(note === undefined ? "" : note.alternativeThought);
  const [newEmotionInput, setNewEmotionInput] = useState<string>(
    note === undefined ? "" : note.newEmotion
  );
  const [newBehaviourInput, setNewBehaviourInput] = useState<string>(
    note === undefined ? "" : note.newBehaviour
  );
  const [degreeOfBeliefInput, setDegreeOfBeliefInput] = useState<number>(
    note === undefined ? 0 : note.degreeOfBelief
  );
  const [degreeOfExcutionInput, setDegreeOfExcutionInput] = useState<number>(
    note === undefined ? 0 : note.degreeOfExcution
  );
  const ideaChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdeaInput(event.target.value);
  };
  const emotionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmotionInput(event.target.value);
  };
  const behaviourChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBehaviourInput(event.target.value);
  };
  const wrongThinkingChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWrongThinkingInput(event.target.value);
  };
  const ceontChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCeontInput(event.target.value);
  };
  const ceontPChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCeontPInput(event.target.value);
  };
  const cognitiveContinuumChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCongitiveContinumInput(+event.target.value);
  };
  const alternativeThoughtChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAlternativeThoughtInput(event.target.value);
  };
  const newEmotionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEmotionInput(event.target.value);
  };
  const newBehaviourChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewBehaviourInput(event.target.value);
  };
  const degreeOfBeliefChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDegreeOfBeliefInput(+event.target.value);
  };
  const degreeOfExcutionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDegreeOfExcutionInput(+event.target.value);
  };
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
