import GameCard from "./GameCard";
import {
  Box,
  Container,
  Heading,
  Skeleton,
  Text,
  useToast,
} from "@chakra-ui/react";
import useGameClient from "../../hooks/useGameClient";
import GameOver from "./GameOver";
import GameRules from "../../constants/GameRules";
import { saveHighScoreByName } from "../../services/highscore-manager";
import { useContext } from "react";
import { authContext } from "../../context/AuthenticationContext";
import ScoreIndicator from "./ScoreIndicator";
import { QuestionIndicator } from "./QuestionIndicator";

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

  const { user } = useContext(authContext);

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

  const isGameOver = currentQuestionNumber > GameRules.totalQuestions;
  if (isGameOver) {
    saveHighScore();
  }
  function saveHighScore() {
    if (user) {
      saveHighScoreByName(user.username, currentScore);
    }
  }

  return (
    <>
      <Container centerContent paddingBottom={20}>
        <Heading mt={10} size={"xl"}>
          Tomato Arena
        </Heading>

        <Box my={3} width={"100%"}>
          <ScoreIndicator currentScore={currentScore} />

          <QuestionIndicator
            currentQuestionNumber={currentQuestionNumber}
            totalQuestions={GameRules.totalQuestions}
          />
        </Box>
        {isGameOver ? (
          <GameOver
            handlePlayAgain={handlePlayAgain}
            currentScore={currentScore}
          />
        ) : (
          <Skeleton borderRadius={20} isLoaded={!isLoading}>
            <GameCard
              onSubmit={handleSumbit}
              image={currentQuestion.question}
            />
          </Skeleton>
        )}
      </Container>
    </>
  );
};

export default GameCoordinator;
