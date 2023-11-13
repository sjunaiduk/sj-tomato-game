import {
  Container,
  Heading,
  Button,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

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
        <Text mt={5} fontSize={"lg"} fontWeight={"bold"}>
          Final Score: {currentScore}
        </Text>
        <Button
          onClick={handlePlayAgain}
          size={"lg"}
          fontSize={"2xl"}
          mt={100}
          colorScheme="red"
        >
          Play Again
        </Button>
      </Box>
    </Container>
  );
};

export default GameOver;
