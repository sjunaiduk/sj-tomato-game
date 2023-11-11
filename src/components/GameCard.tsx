import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  image: string;
}

const GameCard = ({ image }: Props) => {
  return (
    <Card
      minHeight={{
        md: "580px",
      }}
      minWidth={{
        md: "700px",
      }}
      borderRadius={20}
    >
      <CardBody>
        <VStack>
          <Heading size={"xl"}>Tomato Arena</Heading>
          <Text fontSize={"md"}>
            Work out the solution to the problem and submit your answer to win!
          </Text>
          <Divider mb={3} />
          <Image borderRadius={20} src={image} />
        </VStack>
      </CardBody>
      <CardFooter>
        <Stack
          width={"100%"}
          justifyContent={"center"}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Input
            size={"lg"}
            width={{
              base: "100%",
              md: "50%",
            }}
            placeholder="Enter your answer"
            type="number"
          />
          <Button size={"lg"} colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
