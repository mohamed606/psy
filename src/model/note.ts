type Note = {
  id: string;
  situation: string;
  idea: string;
  emotion: string;
  behaviour: string;
  wrongThinking: string;
  ceont: string;
  ceontP: string;
  cognitiveContinuum: number;
  alternativeThought: string;
  newEmotion: string;
  newBehaviour: string;
  degreeOfBelief: number;
  degreeOfExcution: number;
  date: string;
  time: string;
}

/*class Note {
  id: string;
  situation: string;
  idea: string;
  emotion: string;
  behaviour: string;
  wrongThinking: string;
  ceont: string;
  ceontP: string;
  cognitiveContinuum: number;
  alternativeThought: string;
  newEmotion: string;
  newBehaviour: string;
  degreeOfBelief: number;
  degreeOfExcution: number;
  date: string;
  time: string;

  constructor(
    id: string,
    situation: string,
    idea: string = "",
    emotion: string = "",
    behaviour: string = "",
    wrongThinking: string = "",
    ceont: string = "",
    ceontP: string = "",
    cognitiveContinuum: number = 0,
    alternativeThought: string = "",
    newEmotion: string = "",
    newBehaviour: string = "",
    degreeOfBelief: number = 0,
    degreeOfExcution: number = 0,
    date: string,
    time: string
  ) {
    this.id = id;
    this.situation = situation;
    this.idea = idea;
    this.emotion = emotion;
    this.behaviour = behaviour;
    this.wrongThinking = wrongThinking;
    this.ceont = ceont;
    this.ceontP = ceontP;
    this.cognitiveContinuum = cognitiveContinuum;
    this.alternativeThought = alternativeThought;
    this.newEmotion = newEmotion;
    this.newBehaviour = newBehaviour;
    this.degreeOfBelief = degreeOfBelief;
    this.degreeOfExcution = degreeOfExcution;
    this.date = date;
    this.time = time;
  }
}*/

export default Note;
