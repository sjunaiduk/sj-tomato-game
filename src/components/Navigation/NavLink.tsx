import { Box, Button, useColorModeValue, Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  type?: "Button";
}
export const NavLink = ({ children, type }: Props) => {
  return type !== "Button" ? (
    <Box
      px={3}
      py={1}
      fontSize={"lg"}
      rounded={"md"}
      transition={"all 0.1s linear"}
      _hover={{
        color: useColorModeValue("black", "white"),
      }}
    >
      <Text textTransform={"capitalize"} fontWeight={"600"}>
        {children}
      </Text>
    </Box>
  ) : (
    <Button colorScheme="red">Play</Button>
  );
};
