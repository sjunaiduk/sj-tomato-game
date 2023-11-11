import GameCard from "./GameCard";
import {
  Container,
  HStack,
  Heading,
  Skeleton,
  Text,
  useToast,
} from "@chakra-ui/react";
import useGameClient from "../../hooks/useGameClient";
import GameOver from "./GameOver";
import GameRules from "../../constants/GameRules";

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

  const toast = useToast();

  const handleSumbit = (answer: number) => {
    if (answer === currentQuestion.solution) {
      setCurrentScore(currentScore + 1);
      toast({
        title: "Correct!",
        description: "You got it right!",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incorrect!",
        description: "You got it wrong!",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
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
  if (currentQuestionNumber > GameRules.totalQuestions) {
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
            Question {currentQuestionNumber} of {GameRules.totalQuestions}
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
