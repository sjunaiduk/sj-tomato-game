import { Heading } from "@chakra-ui/react";
import HighScoresList from "../components/HighScore/HighScoresList";

const HighScoresPage = () => {
  return (
    <>
      <Heading textAlign={"center"} height="0px" size={"3xl"}>
        High Scores
      </Heading>
      <HighScoresList />
    </>
  );
};

export default HighScoresPage;
