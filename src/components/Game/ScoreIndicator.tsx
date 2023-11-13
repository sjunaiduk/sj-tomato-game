import { Progress, Text, Flex, Box, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  currentScore: number;
  maxScore: number;
}
const ScoreIndicator = ({ currentScore, maxScore }: Props) => (
  <VStack width={"100%"}>
    <HStack>
      <StarIcon color="yellow.400" mr={2} />
      <Text fontWeight="bold" fontSize="xl" mr={2}>
        Score: {currentScore}
      </Text>
    </HStack>

    <Box width={"100%"}>
      <Progress
        value={(currentScore / maxScore) * 100}
        size="lg"
        colorScheme="green"
      />
    </Box>
  </VStack>
);

export default ScoreIndicator;
