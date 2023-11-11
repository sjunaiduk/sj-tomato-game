import Question from "./Question";

export default interface GameState {
  currentQuestionNumber: number;
  currentScore: number;
  currentQuestion: Question;
}
