import { Container, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  currentScore: number;
}
const GameOver = ({ currentScore }: Props) => {
  return (
    <Container
      centerContent
      mt={30}
      height="500px"
      backgroundColor={"gray.900"}
      borderRadius={20}
    >
      <Heading mt={10} size={"xl"}>
        Game Over!
      </Heading>
      <Text mt={5} fontSize={"lg"} fontWeight={"bold"}>
        Final Score: {currentScore}
      </Text>
      <Button size={"lg"} mt={100} colorScheme="teal" variant="outline">
        Play Again
      </Button>
    </Container>
  );
};

export default GameOver;
