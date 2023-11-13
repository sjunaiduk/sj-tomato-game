import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  FormControl,
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
        base: "380px",
        sm: "500px",
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
        <Box
          as="form"
          width={"100%"}
          onSubmit={(event: { preventDefault: () => void }) => {
            event.preventDefault();
            if (ref.current) {
              onSubmit(parseInt(ref.current.value));
            }
          }}
        >
          <Stack
            width={"100%"}
            justifyContent={"center"}
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl
              isRequired
              width={{
                base: "100%",
                md: "45%",
              }}
            >
              <Input
                size={"lg"}
                placeholder="Enter your answer"
                type="number"
                ref={ref}
              />
            </FormControl>

            <Button type="submit" size={"lg"} colorScheme="red">
              Submit
            </Button>
          </Stack>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default Game;
