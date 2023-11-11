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

interface Props {
  links: string[];
}
export default function Navbar({ links }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
            <Box display={{ base: "none", md: "flex" }}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
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
          maxHeight={isOpen ? "200px" : "0px"}
          transition={"all 0.2s ease-in-out"}
        >
          <Stack as={"nav"} spacing={3} pb={5}>
            {links.map((link) => (
              <>
                <NavLink key={link}>{link}</NavLink>
                <Divider orientation="horizontal" />
              </>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
