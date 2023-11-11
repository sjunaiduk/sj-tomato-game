import { Container, Heading, Button, Text } from "@chakra-ui/react";

interface Props {
  currentScore: number;
  handlePlayAgain: () => void;
}
const GameOver = ({ currentScore, handlePlayAgain }: Props) => {
  return (
    <Container centerContent mt={30} height="500px" borderRadius={20}>
      <Heading mt={10} size={"4xl"}>
        Game Over!
      </Heading>
      <Text mt={5} fontSize={"lg"} fontWeight={"bold"}>
        Final Score: {currentScore}
      </Text>
      <Button
        onClick={handlePlayAgain}
        size={"lg"}
        mt={100}
        colorScheme="teal"
        variant="outline"
      >
        Play Again
      </Button>
    </Container>
  );
};

export default GameOver;
