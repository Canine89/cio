import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = ({ user }) => {
  return (
    <Container>
      <Box
        padding="4"
        bg="#caf7e3"
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
      >
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <Link to="/">홈</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/profile">{user.displayName}님 반갑습니다!</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Container>
  );
};

export default Navigation;
