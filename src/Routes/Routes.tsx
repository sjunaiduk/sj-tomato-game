import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import GamePage from "../Pages/GamePage";
import HighScoresPage from "../Pages/HighScoresPage";
import Login from "../components/Authentication/Login";

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
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
