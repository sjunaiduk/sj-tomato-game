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

const HighScoresList = () => {
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
            <Tr>
              <Td>inches</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HighScoresList;
