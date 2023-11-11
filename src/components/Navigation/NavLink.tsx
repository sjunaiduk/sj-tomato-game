import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
export const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      fontSize={"lg"}
      rounded={"md"}
      transition={"all 0.1s linear"}
      color={useColorModeValue("gray.600", "gray.300")}
      _hover={{
        color: useColorModeValue("black", "white"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};
