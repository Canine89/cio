import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ user }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        {user && <Navigation user={user} />}
        <Switch>
          {user ? (
            <>
              <Route exact path="/">
                <Home user={user} />
              </Route>
              <Route exact path="/profile">
                <Profile user={user} />
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
    </BrowserRouter>
  );
};

export default AppRouter;
