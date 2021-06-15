import AppRouter from "components/Router";
import { ChakraProvider, Container, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { authService } from "fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObject, setUserObject] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObject(user);
      } else {
        setUserObject(false);
      }
    });
    setInit(true);
  }, []);

  return (
    <ChakraProvider>
      {init ? <AppRouter user={userObject} /> : "initializing..."}
      <Container>
        <Box
          padding="4"
          bg="#e4bad4"
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            🦄 출첵코인, {new Date().getFullYear()}{" "}
          </Text>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
