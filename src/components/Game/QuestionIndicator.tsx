import { HStack, Text } from "@chakra-ui/react";
interface Props {
  totalQuestions: number;
  currentQuestionNumber: number;
}
export const QuestionIndicator = ({
  totalQuestions,
  currentQuestionNumber,
}: Props) => {
  const questions = Array.from(Array(totalQuestions).keys());

  return (
    <HStack
      mt={3}
      justifyContent={"space-between"}
      width={"70%"}
      marginInline={"auto"}
    >
      {questions.map((_, index) => (
        <Text
          key={index}
          fontSize="xl"
          color={index === currentQuestionNumber - 1 ? "black.500" : "gray.500"}
          fontWeight={index === currentQuestionNumber - 1 ? "bold" : "normal"}
          //underline if active
          textDecoration={
            index === currentQuestionNumber - 1 ? "underline" : "none"
          }
        >
          Q{index + 1}
        </Text>
      ))}
    </HStack>
  );
};
