import { SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";
import GameCoordinator from "./components/GameCoordinator";
function App() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Navbar links={Links} />

        <GameCoordinator />
      </SimpleGrid>
    </>
  );
}

export default App;
