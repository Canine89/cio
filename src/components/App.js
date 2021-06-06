import AppRouter from "components/Router";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
    });
    setInit(true);
  }, []);
  return (
    <ChakraProvider>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
      <Container>
        <Box padding="4" bg="gray.100">
        <footer>cio-gamble, {new Date().getFullYear()} </footer>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
