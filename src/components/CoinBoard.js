import {
  List,
  ListItem,
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react";
import styled from "styled-components";

const Rainbow = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  color: #ffffff;
  background-size: 1800% 1800%;
  border-radius: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 4px;

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
`;

const Silver = styled.div`
  background-color: #c0c0c0;
  color: #ffffff;
  border-radius: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 4px;
`;
const Gold = styled.div`
  background-color: #ffd700;
  color: #ffffff;
  border-radius: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 4px;
`;
const bronze = styled.div`
  background-color: #b08d57;
  color: #ffffff;
  border-radius: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin-bottom: 4px;
`;

const CoinBoard = ({ board }) => {
  console.log(board);
  return (
    <List spacing={3}>
      {board
        .sort((a, b) => b.coin - a.coin)
        .map((data, index) => (
          <ListItem key={data.id}>
            <Flex>
              <Avatar src={data.photoURL} />
              <Box ml="3">
                <Text fontWeight="bold">
                  {index === 0 ? (
                    <>🥇{data.displayName}</>
                  ) : index === 1 ? (
                    <>🥈{data.displayName}</>
                  ) : (
                    <>🥉{data.displayName}</>
                  )}
                  <Badge ml={2} colorScheme="">
                    {index === 0 ? (
                      <Rainbow>{index + 1}등</Rainbow>
                    ) : index === 1 ? (
                      <Gold>{index + 1}등</Gold>
                    ) : (
                      <Silver>{index + 1}등</Silver>
                    )}
                  </Badge>
                </Text>
                <Text fontSize="sm">{data.coin}</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
    </List>
  );
};

export default CoinBoard;
