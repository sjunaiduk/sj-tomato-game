import { useState } from "react";
import GameCard from "./Game";
import { Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Question from "../models/Question";

const GameCoordinator = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question
  );

  const totalQuestions = 5;
  const handleSumbit = (answer: number) => {
    if (answer === currentQuestion.solution) {
      setCurrentScore(currentScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

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
        <GameCard
          onSubmit={handleSumbit}
          image="https://www.sanfoh.com/uob/tomato/data/tecddf6ec4de4cf8f834da72c5bn785.png"
        />
      </Container>
    </>
  );
};

export default GameCoordinator;
