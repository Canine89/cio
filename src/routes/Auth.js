import { authService, firebaseInstance } from "fbase";
import { Button, ButtonGroup, Container, Box } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const onSocialClick = async (event) => {
    let provider;
    if (event.target.name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <Container centerContent>
      <Box padding="4" bg="gray.100">
        <Button
          leftIcon={<FcGoogle />}
          colorScheme="messenger"
          onClick={onSocialClick}
          name="google"
        >
          구글 로그인
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
