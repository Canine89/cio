import { dbService } from "fbase";
import { useEffect, useState } from "react";
import CoinBoard from "components/CoinBoard";
import { Container, Button, Box } from "@chakra-ui/react";

const Home = ({ user }) => {
  const [board, setBoard] = useState([]);
  const [userCoin, setUserCoin] = useState(0);

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

  const onSubmit = async (event) => {
    event.preventDefault();
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
      <Box padding="4" bg="gray.400">
        {user.displayName}님의 현재 코인은 {userCoin}입니다.
        <form onSubmit={onSubmit}>
          <Button type="submit">오늘의 코인 적립</Button>
        </form>
      </Box>
      <CoinBoard user={user} board={board} />
    </Container>
  );
};

export default Home;
