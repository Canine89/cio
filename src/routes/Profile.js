import { authService } from "fbase";
import { Container, Box } from "@chakra-ui/react";

const Profile = ({ user }) => {
  const onLogOutClick = () => authService.signOut();
  return (
    <Container>
      <Box padding="4" bg="gray.100">
        <li>
          <img src={user.photoURL} />
        </li>
        <li>로그인한 계정 {user.displayName}</li>
        <li>로그인한 이메일 {user.email}</li>
        <button onClick={onLogOutClick}>Log Out</button>
      </Box>
    </Container>
  );
};

export default Profile;
