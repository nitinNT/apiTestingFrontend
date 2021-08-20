import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/home/Home";
export default function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
