import { Text, Box, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  currentScore: number;
  maxScore: number;
}
const ScoreIndicator = ({ currentScore, maxScore }: Props) => (
  <VStack width={"100%"} mb={3}>
    <HStack>
      <StarIcon color="yellow.400" mr={2} />
      <Text fontWeight="bold" fontSize="3xl" mr={2}>
        Score: {currentScore}
      </Text>
    </HStack>
  </VStack>
);

export default ScoreIndicator;
