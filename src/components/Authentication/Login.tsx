import {
  Box,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import User from "../../models/User";
import { authContext } from "../../context/AuthenticationContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useContext(authContext);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Flex justify={"center"} bg={useColorModeValue("transparent", "gray.800")}>
      <Stack spacing={8} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to start {` `}
            <Box as="span" color={"red.400"}>
              playing
            </Box>{" "}
            🍅
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Box
            as="form"
            onSubmit={(e: React.FormEvent<HTMLDivElement>) => {
              e.preventDefault();
              ref.current &&
                login({
                  username: ref.current.value,
                } as User);
              navigate("/");
            }}
          >
            <Stack spacing={4}>
              <FormControl id="Username">
                <FormLabel>Username</FormLabel>
                <Input ref={ref} type="Username" required />
              </FormControl>
              {/* <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl> */}
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"red.400"}>Forgot password?</Text>
                </Stack> */}
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
