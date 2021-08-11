import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Donor from "./Components/Donor";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <img className="logo" src="../images/logo.png" alt="logo" />
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/" className="navbtn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbtn">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="homebtn">
          Log In
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/donor">
            <Donor />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
      <footer>
        <div className="bottom-details">
          <span className="copyright_text">Copyright © 2021 Blood Group.</span>
          <span className="policy_terms">
            <Link to="/PrivacyPolicy" className="privacy">
              Privacy policy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
