import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Container, Box, Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import CoinBoard from "components/CoinBoard";
import Announcement from "components/Announcement";

const Home = ({ user }) => {
  const [userCoin, setUserCoin] = useState(0);
  const [userCoupon, setUserCoupon] = useState(0);
  const [matchDocument, setMatchDocument] = useState(false);
  const [freeButtonClicked, setFreeButtonClicked] = useState(false);
  const [board, setBoard] = useState([]);
  const toast = useToast();

  useEffect(() => {
    dbService.collection("cio").onSnapshot((_snapshot) => {
      const newArray = _snapshot.docs.map((_document) => ({
        id: _document.id,
        ..._document.data(),
      }));

      // 실시간 DB(board)를 board에 계속 반영
      setBoard(newArray);

      // match 유저를 찾으면 쿠폰과 코인 등록
      const _matchDocument = getMatchSavedDocumentByUid(newArray);
      if (_matchDocument) {
        setUserCoupon(_matchDocument.coupon);
        setUserCoin(_matchDocument.coin);
        setMatchDocument(_matchDocument);
      }
    });
  }, []);

  useEffect(() => {
    hanbunman();
  }, []);

  useEffect(() => {
    if(matchDocument) setFreeButtonClicked(!isFirstTry(matchDocument.couponTimeStamp));
  }, [matchDocument])

  const hanbunman = async () => {
    const test = await dbService.collection("cio").get();
    const result = [];

    test.forEach((document) => {
      result.push(document.data());
    });

    if (getMatchSavedDocumentByUid(result) === undefined) {
      firstUserSetup();
    }
  };

  const firstUserSetup = async () => {
    if (user) {
      await dbService.collection("cio").add({
        coin: 0,
        coupon: 1,

        createdAt: Date.now(),
        updatedAt: Date.now(),
        couponTimeStamp: Date.now(),
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  };

  const getFreeCoupon = () => {
    if (matchDocument) {
      console.log(matchDocument);
      console.log();
    }
  };

  const isFirstTry = (_time) => {
    const lastDate = new Date(_time * 1);
    const nowDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    console.log(nowDate, lastDate);
    return nowDate > lastDate;
  };

  const getMatchSavedDocumentByUid = (_board) => {
    return _board.filter((_data) => _data.uid === user.uid)[0];
  };

  const getRandomInt = (_min, _max) => {
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = _max - _min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
      return getRandomInt(_min, _max);
    return _min + (byteArray[0] % range);
  };

  const buyCoin = async () => {
    const randomCoin = getRandomInt(0, 35);

    if (matchDocument && userCoupon > 0) {
      await dbService.doc(`cio/${matchDocument.id}`).update({
        coin: userCoin + randomCoin,
        coupon: userCoupon - 1,
        updatedAt: Date.now(),
      });
    }

    toast({
      title: "코인이 적립되었습니다.",
      description: `코인이 ${randomCoin}개 적립되었습니다.`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const buyCoupon = async () => {

    if (matchDocument && userCoin > 20) {
      await dbService.doc(`cio/${matchDocument.id}`).update({
        coin: userCoin - 20,
        coupon: userCoupon + 1,
        updatedAt: Date.now(),
      });
    }
  }

  return (
    <Container>
      <Box padding="4" bg="#f8eded">
        <Flex space="4">
          <Box>
            {freeButtonClicked ? (
              <Button
                mr="-px"
                bg="#eeb76b"
                border="2px"
                borderColor="#E9AD03"
                onClick={buyCoin}
                disabled={userCoupon ? false : true}
              >
                💰 코인 구매
              </Button>
            ) : (
              <Button
                bg="#eeb76b"
                border="2px"
                borderColor="#E9AD03"
                onClick={getFreeCoupon}
              >
                🎟️ 무료 쿠폰 받기
              </Button>
            )}
          </Box>
          <Box>
            <ButtonGroup>
              <Button
                bg="#e798ae"
                border="2px"
                ml={4}
                mr="-px"
                borderColor="#e4bad4"
                onClick={buyCoupon}
              >
                🎟️ 쿠폰 구입({userCoupon}장 보유, 20원)
              </Button>
            </ButtonGroup>
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
