import { dbService } from "fbase";

const Home = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("cio").add({
      text: "test",
      createdAt: Date.now(),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="submit" value="+1" />
    </form>
  );
};

export default Home;
