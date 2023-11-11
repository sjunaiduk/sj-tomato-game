import { Box, Button, useColorModeValue } from "@chakra-ui/react";

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
      color={useColorModeValue("gray.600", "gray.300")}
      _hover={{
        color: useColorModeValue("black", "white"),
      }}
    >
      {children}
    </Box>
  ) : (
    <Button>Play</Button>
  );
};
