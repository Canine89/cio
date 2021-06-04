import { authService, firebaseInstance } from "fbase";

const Auth = () => {
  const onSocialClick = async (event) => {
    let provider;
    if (event.target.name === "google") {
      console.log("clikced google");
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <button onClick={onSocialClick} name="google">
        Continue with Google
      </button>
    </div>
  );
};

export default Auth;
