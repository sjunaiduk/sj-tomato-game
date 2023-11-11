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
import { useRef } from "react";

interface Props {
  image: string;
  onSubmit: (answer: number) => void;
}

const Game = ({ image, onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
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
          <Text fontSize={"lg"}>
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
            isRequired
            ref={ref}
          />
          <Button
            onClick={() => {
              if (ref.current) {
                onSubmit(parseInt(ref.current.value));
              }
            }}
            size={"lg"}
            colorScheme="blue"
          >
            Submit
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default Game;
