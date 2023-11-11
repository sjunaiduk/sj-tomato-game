import { SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";
import GameCoordinator from "./components/Game/GameCoordinator";
import HighScoresList from "./components/HighScore/HighScoresList";
function App() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Navbar links={Links} />

        <GameCoordinator />
        <HighScoresList />
      </SimpleGrid>
    </>
  );
}

export default App;
