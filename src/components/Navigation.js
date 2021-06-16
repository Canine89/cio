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
            <Link to="/">🏠 홈</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/profile">🧟 {user.displayName}님 반갑습니다!</Link>
          </BreadcrumbItem>
          {user.uid === "BlPR1gz2x6RuoIukzh3Vkq5YbyB2" && (
            <BreadcrumbItem>
              <Link to="/admin">운영자 메뉴</Link>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </Box>
    </Container>
  );
};

export default Navigation;
