import {
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import HighScore from "../../models/HighScore";

const HighScoresList = () => {
  const [highScoresList, setHighScoresList] = useState<HighScore[]>([]);
  return (
    <Container centerContent maxW={"700px"}>
      <Heading mt={10} size={"3xl"}>
        High Scores
      </Heading>
      <TableContainer
        margin={10}
        paddingY={3}
        border={"1px solid grey"}
        borderRadius={15}
        width={"100%"}
      >
        <Table variant="simple">
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
