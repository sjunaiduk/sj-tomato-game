import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import GamePage from "../Pages/GamePage";
import HighScoresPage from "../Pages/HighScoresPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "game",
        element: <GamePage />,
      },
      {
        path: "highscores",
        element: <HighScoresPage />,
      },
    ],
  },
]);
