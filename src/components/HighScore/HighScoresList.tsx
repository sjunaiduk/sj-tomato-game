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

  const orderedHighScoresList = highScoresList.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <Container centerContent maxW={"700px"}>
      <TableContainer
        margin={10}
        paddingY={3}
        boxShadow={useColorModeValue(
          "0px 0px 10px 0px rgba(0,0,0,0.5)",
          "0px 0px 10px 0px  rgb(255 255 255 / 30%)"
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
            {orderedHighScoresList.map((highScore, index) => {
              return (
                <Tr key={highScore.name}>
                  <Td>
                    {index == 0
                      ? "🥇"
                      : index == 1
                      ? "🥈"
                      : index == 2
                      ? "🥉"
                      : ""}
                    {highScore.name}
                  </Td>
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
