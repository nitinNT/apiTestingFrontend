import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Spacer,
  Input,
  Stack,
  Button,
  Icon
} from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [postmanColLink, setpostmanColLink] = useState("");
  const [emailsList, setEmailsList] = useState([{ email: "" }]);
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
            {emailsList.map((content, i) => {
              return (
                <Flex>
                  <Box width="70%">
                    <Input
                      placeholder="Email here..."
                      type="email"
                      onChange={(e) => (content.email = e.target.value)}
                      size="md"
                    />
                  </Box>
                  <Spacer />
                  <Box>
                    {i === emailsList.length - 1 && i !== 0 ? (
                      <p></p>
                    ) : (
                      <Icon
                        as={AddIcon}
                        onClick={() =>
                          setEmailsList([...emailsList, { email: "" }])
                        }
                      />
                    )}
                  </Box>
                </Flex>
              );
            })}

            <Button width={40} onClick={buttonAction}>
              Run
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
