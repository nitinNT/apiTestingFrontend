import { Flex, Box, Spacer, Input, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [postmanColLink, setpostmanColLink] = useState("");
  const [emailsList, setEmailsList] = useState([]);
  const buttonAction = () => {};
  return (
    <Box>
      <Flex bg="green.100">
        <Box p="6">Api Testing Making Simple</Box>
        <Spacer />
        <Box p="5"></Box>
      </Flex>
      <Stack spacing={3}>
        <Box p={5}>API Testing Details</Box>
        <Box p={4} ml={50} wshadow="md" borderWidth="1px">
          <Stack spacing={4}>
            <Input
              placeholder="Postman Collection Link here ..."
              size="md"
              onChange={(e) => setpostmanColLink(e.target.value)}
            />
            <Flex>
              {emailsList.map((content) => {
                return (
                  <Box>
                    <Input
                      placeholder="Email here..."
                      value={content}
                      size="md"
                    />
                  </Box>
                );
              })}
            </Flex>

            <Button width={40} onClick={buttonAction}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
