import HighScore from "../models/HighScore";

const loadHighscores = (): HighScore[] => {
  const response = localStorage.getItem("highscores");
  if (!response) {
    return [];
  }
  return JSON.parse(response);
};

const saveHighScoreByName = (name: string, score: number): void => {
  let highscores = loadHighscores();
  highscores = highscores.filter((hscore) => hscore.name !== name);
  highscores.push({ name, score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
};

export { loadHighscores, saveHighScoreByName };
