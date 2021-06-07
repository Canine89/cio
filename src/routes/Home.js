import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import CoinBoard from "components/CoinBoard";

const Home = ({ user }) => {
  const [board, setBoard] = useState([]);
  const [userCoin, setUserCoin] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const toast = useToast();

  useEffect(() => {
    dbService.collection("cio").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setBoard(newArray);
      if (newArray.length > 0) {
        setUserCoin(
          newArray
            .filter((data) => data.uid === user.uid)
            .reduce((pre, val) => {
              return pre + val.coin;
            }, 0)
        );
      }
    });
  }, []);

  const addCoin = async () => {
    const documentId = board.find((data) => data.uid === user.uid);
    if (documentId) {
      await dbService
        .doc(`cio/${documentId.id}`)
        .update({ coin: userCoin + 10, updatedAt: Date.now() });
    } else {
      await dbService.collection("cio").add({
        coin: 10,
        createdAt: Date.now(),
        uid: user.uid,
        displayName: user.displayName,
        updatedAt: Date.now(),
        photoURL: user.photoURL,
      });
    }
  };

  return (
    <Container>
      <Box padding="4" bg="#f8eded">
        {buttonClicked ? (
          <Button mr="-px" bg="#eeb76b" border="2px" borderColor="#E9AD03">
            🙌 적립 완료!
          </Button>
        ) : (
          <Button
            type="submit"
            mr="-px"
            bg="#eeb76b"
            border="2px"
            borderColor="#E9AD03"
            onClick={() => {
              toast({
                title: "코인이 적립되었습니다.",
                description: "적립 코인은 10원입니다.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              addCoin();
              setButtonClicked(true);
            }}
          >
            💰 오늘의 코인 적립
          </Button>
        )}
      </Box>
      <Box padding="4" bg="#f6dfeb">
        <CoinBoard user={user} board={board} />
      </Box>
    </Container>
  );
};

export default Home;
