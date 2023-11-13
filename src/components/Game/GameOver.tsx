import {
  Container,
  Heading,
  Button,
  Text,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  currentScore: number;
  handlePlayAgain: () => void;
}
const GameOver = ({ currentScore, handlePlayAgain }: Props) => {
  return (
    <Container centerContent mt={30} height="500px" borderRadius={20}>
      <Box
        maxWidth={"800px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        border={useColorModeValue("1px solid gray", "1px solid white")}
        paddingInline={"3rem"}
        paddingBlock={"2rem"}
        borderRadius={20}
      >
        <Heading size={"4xl"} textAlign={"center"}>
          Game Over!
        </Heading>
        <Text my={10} fontSize={"2xl"} fontWeight={"bold"}>
          Final Score: {currentScore}
        </Text>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          gap={3}
        >
          <Button
            onClick={handlePlayAgain}
            size={"lg"}
            fontSize={"2xl"}
            colorScheme="red"
          >
            Play Again
          </Button>
          <Button size={"lg"} fontSize={"2xl"} colorScheme="green">
            <Link to="/highscores">High Scores</Link>
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default GameOver;
