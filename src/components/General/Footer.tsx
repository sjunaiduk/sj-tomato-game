import {
  useColorModeValue,
  Container,
  Stack,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={"auto"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Syed Junaid Services. All rights reserved</Text>
        <HStack>
          <Text>🍅</Text>
          <Text>🍅</Text>
          <Text>🍅</Text>
          <Text>🍅</Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
