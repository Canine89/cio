import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation user={isLoggedIn} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home user={isLoggedIn} />
            </Route>
            <Route exact path="/profile">
              <Profile user={isLoggedIn} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
