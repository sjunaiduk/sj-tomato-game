import { Box, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { Links } from "./constants/Links";
import GameCard from "./components/GameCard";
function App() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Navbar links={Links} />
        <Stack mt={"5rem"} alignItems={"center"} padding={2}>
          <GameCard image="https://www.sanfoh.com/uob/tomato/data/tecddf6ec4de4cf8f834da72c5bn785.png" />
        </Stack>
      </SimpleGrid>
    </>
  );
}

export default App;
