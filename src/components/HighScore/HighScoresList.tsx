import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HighScore from "../../models/HighScore";
import { loadHighscores } from "../../services/highscore-manager";

const HighScoresList = () => {
  const [highScoresList, setHighScoresList] = useState<HighScore[]>([]);
  useEffect(() => {
    setHighScoresList(loadHighscores());
  }, []);

  return (
    <Container centerContent maxW={"700px"}>
      <TableContainer
        margin={10}
        paddingY={3}
        border={useColorModeValue("2px solid green", "2px solid red")}
        boxShadow={useColorModeValue(
          "0px 0px 3px 0px red",
          "0px 0px 4px 0px green"
        )}
        borderRadius={15}
        width={"100%"}
      >
        <Table variant="simple" fontSize={"lg"} fontWeight={"600"}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {highScoresList.map((highScore) => {
              return (
                <Tr key={highScore.name}>
                  <Td>{highScore.name}</Td>
                  <Td isNumeric>{highScore.score}</Td>
                </Tr>
              );
            })}
            {highScoresList.length === 0 && (
              <Tr>
                <Td colSpan={2}>No high scores yet!</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HighScoresList;
