import GameCard from "./Game";
import { Container, HStack, Heading, Skeleton, Text } from "@chakra-ui/react";
import useGameClient from "../hooks/useGameClient";
import GameOver from "./GameOver";

const GameCoordinator = () => {
  const {
    currentScore,
    setCurrentScore,
    currentQuestion,
    currentQuestionNumber,
    setCurrentQuestionNumber,
    isLoading,
    error,
  } = useGameClient();

  const totalQuestions = 5;
  const handleSumbit = (answer: number) => {
    if (answer === currentQuestion.solution) {
      setCurrentScore(currentScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };
  const handlePlayAgain = () => {
    console.log("play again ", currentQuestionNumber);
    // save scores somewhere
    setCurrentQuestionNumber(1);
    setCurrentScore(0);
  };

  if (error) {
    return (
      <Container centerContent>
        <Heading mt={10} size={"xl"}>
          Tomato Arena
        </Heading>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Something went wrong... Please try again later
        </Text>
      </Container>
    );
  }
  if (currentQuestionNumber > totalQuestions) {
    return (
      <GameOver handlePlayAgain={handlePlayAgain} currentScore={currentScore} />
    );
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

        <Skeleton borderRadius={20} isLoaded={!isLoading}>
          <GameCard onSubmit={handleSumbit} image={currentQuestion.question} />
        </Skeleton>
      </Container>
    </>
  );
};

export default GameCoordinator;
