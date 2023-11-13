import { Box, Button, useColorModeValue, Text } from "@chakra-ui/react";
import { authContext } from "../../context/AuthenticationContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import NavBarLink from "../../models/NavBarLink";

interface Props {
  link: NavBarLink;
}
export const NavLink = ({ link }: Props) => {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();
  return link.type === "Play" ? (
    <Button
      ml={{
        md: 2,
      }}
      colorScheme="red"
      size={"lg"}
    >
      {link.name}
    </Button>
  ) : link.type === "Login" ? (
    <Button
      ml={{
        md: 2,
      }}
      colorScheme="red"
      size={"lg"}
    >
      {link.name}
    </Button>
  ) : link.type === "Logout" ? (
    <Button
      onClick={() => {
        logout();
        navigate("/");
      }}
      ml={{
        md: 2,
      }}
      colorScheme="green"
      size={"lg"}
    >
      {link.name}
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
        {link.name}
      </Text>
    </Box>
  );
};
