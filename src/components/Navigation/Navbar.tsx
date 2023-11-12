import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "./NavLink";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import NavBarLink from "../../models/NavBarLink";

interface Props {
  links: NavBarLink[];
}
export default function Navbar({ links }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        height={"fit-content"}
        bg={useColorModeValue("green.300", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <Image width={"45px"} src="/tomato.png" />

            <Text fontSize={"xl"} fontWeight={"bold"} wordBreak={"normal"}>
              Tomato Game
            </Text>
          </HStack>

          <HStack as={"nav"} spacing={4}>
            <Box alignItems={"center"} display={{ base: "none", md: "flex" }}>
              {links.map((link, index) => (
                <Link key={index} to={link.path}>
                  <NavLink type={link.type}>{link.name}</NavLink>
                </Link>
              ))}
            </Box>
            <Image
              display={{
                md: "none",
              }}
              width={"45px"}
              src="/tomato.png"
            />
            <IconButton
              size={"md"}
              icon={
                colorMode === "light" ? (
                  <MoonIcon color={"white"} />
                ) : (
                  <SunIcon color={"orange"} />
                )
              }
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              borderRadius={"xl"}
              bg={useColorModeValue("gray.600", "gray.700")}
            />
          </HStack>
        </Flex>

        <Box
          display={{ md: "none" }}
          overflow={"hidden"}
          maxHeight={isOpen ? "500px" : "0px"}
          transition={"all 0.2s ease-in-out"}
        >
          <Stack as={"nav"} spacing={3} pb={5}>
            {links.map((link, index) => (
              <>
                <Box key={index} ml={4}>
                  <Link to={link.path}>
                    <NavLink type={link.type}>{link.name}</NavLink>
                  </Link>
                </Box>
                <Divider orientation="horizontal" />
              </>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
