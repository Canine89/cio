import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Container, Box, Button, Spacer, Flex } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import CoinBoard from "components/CoinBoard";
import Announcement from "components/Announcement";

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

  useEffect(() => {
    const matchUserSavedData = getMatchUserSavedData();

    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + KR_TIME_DIFF);

    if (matchUserSavedData) {
      setButtonClicked(
        checkTime(
          kr_curr,
          new Date(matchUserSavedData.updatedAt + KR_TIME_DIFF)
        )
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
      
    return nowDateString >= lastDateString;
  };

  const getMatchUserSavedData = () => {
    return board.filter((data) => data.uid === user.uid)[0];
  };

  const getRandomInt = (min, max) => {
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
      return getRandomInt(min, max);
    return min + (byteArray[0] % range);
  };

  const addCoin = async () => {
    const documentId = board.find((data) => data.uid === user.uid);
    const randomCoin = getRandomInt(0, 99);

    if (documentId) {
      await dbService.doc(`cio/${documentId.id}`).update({
        coin: userCoin + randomCoin,
        coupon: getMatchUserSavedData().coupon + 1,
        updatedAt: Date.now(),
      });
    } else {
      await dbService.collection("cio").add({
        coin: randomCoin,
        coupon: 1,
        createdAt: Date.now(),
        uid: user.uid,
        displayName: user.displayName,
        updatedAt: Date.now(),
        photoURL: user.photoURL,
      });
    }

    toast({
      title: "코인이 적립되었습니다.",
      description: `코인이 ${randomCoin}개 적립되었습니다.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setButtonClicked(true);
  };

  return (
    <Container>
      <Box padding="4" bg="#f8eded">
        <Flex space="4">
          <Box>
            {buttonClicked ? (
              <Button bg="#eeb76b" border="2px" borderColor="#E9AD03">
                🙌 적립 완료!
              </Button>
            ) : (
              <Button
                type="submit"
                mr="-px"
                bg="#eeb76b"
                border="2px"
                borderColor="#E9AD03"
                onClick={addCoin}
              >
                💰 오늘의 코인 적립
              </Button>
            )}
          </Box>
          <Box>
            <Button bg="#e798ae" border="2px" ml={4} borderColor="#e4bad4">
              🎟️ 티켓 구입
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box padding="4" bg="#f6dfeb">
        <CoinBoard user={user} board={board} />
      </Box>
      <Box padding="4" bg="#faf3f3">
        <Announcement />
      </Box>
    </Container>
  );
};

export default Home;
