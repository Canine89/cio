import { Container, Box, Button, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { dbService } from "fbase";

const Admin = () => {
  const [matchDocuments, setMatchDocuments] = useState(false);
  const [qValue, setQvalue] = useState("");
  const [aValue, setAvalue] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "quiz") {
      setQvalue(event.target.value);
    } else if (event.target.name === "answer") {
      setAvalue(event.target.value);
    }
  };

  useEffect(() => {
    dbService.collection("cio").onSnapshot((_snapshot) => {
      const newArray = _snapshot.docs.map((_document) => ({
        id: _document.id,
        ..._document.data(),
      }));
      setMatchDocuments(newArray);
    });
  }, []);

  const giveFreeCoupon = async () => {
    matchDocuments.forEach((matchDocument) => {
      dbService.doc(`cio/${matchDocument.id}`).update({
        coupon: matchDocument.coupon + 5,
        updatedAt: Date.now(),
      });
    });
  };

  const addQuiz = (quiz, answer) => {
    dbService.collection("quiz").add({
      quiz: quiz,
      answer: answer,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  };

  return (
    <>
      <Text mb="8px">퀴즈</Text>
      <Textarea
        value={qValue}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        name="quiz"
      />
      <Text mb="8px">정답</Text>
      <Textarea
        value={aValue}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        name="answer"
      />
      <Button onClick={addQuiz(qValue, aValue)}>퀴즈 등록</Button>
      <Button onClick={giveFreeCoupon}>무료 쿠폰 증정</Button>
    </>
  );
};

export default Admin;
