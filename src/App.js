import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CommentPage from "./pages/CommentPage";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <GuestRoute exact path="/">
            <MainPage />
          </GuestRoute>
          <GuestRoute path="/register">
            <RegisterPage />
          </GuestRoute>

          <GuestRoute path="/login">
            <LoginPage />
          </GuestRoute>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/comment">
            <CommentPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
