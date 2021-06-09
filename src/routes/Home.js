import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import CoinBoard from "components/CoinBoard";
import Announcement from "components/Announcement";

const Home = ({ user }) => {
  const [board, setBoard] = useState([]);
  const [userCoin, setUserCoin] = useState(0);
  const [randCoin, setrandCoin] = useState(10);
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

  useEffect(() => {
    console.log(user.uid);
    console.log(board);
    const matchUserSavedData = board.filter((data) => data.uid === user.uid)[0];
    if (matchUserSavedData) {
      setButtonClicked(
        checkTime(new Date(), new Date(matchUserSavedData.updatedAt))
      );
    }
  }, [board]);

  const checkTime = (now, last) => {
    const nowDateString =
      now.getFullYear().toString() +
      now.getMonth().toString() +
      now.getDate().toString();
    const lastDateString =
      last.getFullYear().toString() +
      last.getMonth().toString() +
      last.getDate().toString();

    return nowDateString <= lastDateString;
  };

  const addCoin = async () => {
    const documentId = board.find((data) => data.uid === user.uid);
    const randomCoin = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 100000000);

    setrandCoin(randomCoin);
    
    if (documentId) {
      await dbService.doc(`cio/${documentId.id}`).update({
        coin: userCoin + randomCoin,
        updatedAt: Date.now(),
      });
    } else {
      await dbService.collection("cio").add({
        coin: randomCoin,
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
            🙌적립 완료!
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
                description: `적립 코인은 ${randCoin}원입니다.`,
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              addCoin();
              setButtonClicked(true);
            }}
          >
            💰오늘의 코인 적립
          </Button>
        )}
      </Box>
      <Box padding="4" bg="#f6dfeb">
        <CoinBoard user={user} board={board} />
      </Box>
      <Box padding="4" bg="#f6dfeb">
        <Announcement />
      </Box>
    </Container>
  );
};

export default Home;
