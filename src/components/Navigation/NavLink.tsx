import { Box, Button, useColorModeValue, Text } from "@chakra-ui/react";
import { clearUserFromStorage } from "../../services/login-manager";
import { authContext } from "../Authentication/AuthenticationContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

interface Props {
  children: React.ReactNode;
  type?: "Play" | "Logout" | "Login";
}
export const NavLink = ({ children, type }: Props) => {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();
  return type === "Play" ? (
    <Button ml={2} colorScheme="red" size={"lg"}>
      Play
    </Button>
  ) : type === "Login" ? (
    <Button ml={2} colorScheme="red" size={"lg"}>
      Login
    </Button>
  ) : type === "Logout" ? (
    <Button
      onClick={() => {
        logout();
        navigate("/");
      }}
      ml={2}
      colorScheme="red"
      size={"lg"}
    >
      Logout
    </Button>
  ) : (
    <Box
      px={{
        md: 3,
      }}
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
  );
};
