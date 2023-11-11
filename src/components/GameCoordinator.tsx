import { useEffect, useState } from "react";
import GameCard from "./Game";
import { Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Question from "../models/Question";
import tomatoApiClient from "../services/api-client";

const GameCoordinator = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question
  );

  useEffect(() => {
    const controller = new AbortController();
    tomatoApiClient
      .get("/", {
        signal: controller.signal,
      })
      .then((response) => {
        setCurrentQuestion(response.data);
      });

    return () => {
      controller.abort();
    };
  }, [currentQuestionNumber]);

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

        <GameCard onSubmit={handleSumbit} image={currentQuestion.question} />
      </Container>
    </>
  );
};

export default GameCoordinator;
