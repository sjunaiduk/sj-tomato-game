import GameCard from "./Game";
import { Button, Container, HStack, Heading, Text } from "@chakra-ui/react";
import useGameClient from "../hooks/useGameClient";
import GameOver from "./GameOver";

const GameCoordinator = () => {
  const {
    currentScore,
    setCurrentScore,
    currentQuestion,
    currentQuestionNumber,
    setCurrentQuestionNumber,
  } = useGameClient();

  const totalQuestions = 5;
  const handleSumbit = (answer: number) => {
    if (answer === currentQuestion.solution) {
      setCurrentScore(currentScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  if (currentQuestionNumber > totalQuestions) {
    return <GameOver currentScore={currentScore} />;
  }

  return (
    <>
      <Container centerContent>
        <Heading mt={10} size={"xl"}>
          Tomato Arena
        </Heading>

        <HStack my={3}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Current Score: {currentScore}
          </Text>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Question {currentQuestionNumber} of {totalQuestions}
          </Text>
        </HStack>

        <GameCard onSubmit={handleSumbit} image={currentQuestion.question} />
      </Container>
    </>
  );
};

export default GameCoordinator;
