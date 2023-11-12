import {
  Button,
  Container,
  Stack,
  chakra,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthenticationContext";

const HomePage = () => {
  const { user } = useContext(authContext);
  return (
    <>
      <Container p={{ base: 8, sm: 14 }}>
        <Stack direction="column" spacing={6} alignItems="center">
          <chakra.h1
            fontSize={{ base: "4xl", sm: "5xl" }}
            fontWeight="bold"
            textAlign="center"
            maxW="600px"
          >
            Welcome to the Tomato Game <br />
            <chakra.span
              fontSize={"4xl"}
              color={useColorModeValue("gray.800", "white")}
              bg="linear-gradient(transparent 50%, #ed4848 50%)"
            >
              {"{"}by Syed Junaid{"}"}
            </chakra.span>
          </chakra.h1>
          <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.400">
            Welcome to 'The Great Tomato Equation' {user?.username}! 🍅 Solve
            our ripe numerical puzzles to become the Tomato Titan. It’s a race
            to ketchup with your math skills!
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            justifyContent={"center"}
            alignItems="center"
            w={{ base: "100%", sm: "auto" }}
            spacing={5}
          >
            <Link to="game">
              <Button
                colorScheme="red"
                rounded="md"
                size="lg"
                height="3.5rem"
                fontSize="1.2rem"
              >
                Start Game
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
