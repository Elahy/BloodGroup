import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Donor from "./Components/Donor";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import DonorDetails from "./Components/DonorDetails";
import Guidelines from "./Components/Guidelines";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const logoClick = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="logo"
          onClick={logoClick}
          src="../images/logo.png"
          alt="logo"
        />
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
          <Route path="/donorlist">
            <Donor />
          </Route>
          <Route path="/donor/:id">
            <DonorDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/guideline">
            <Guidelines />
          </Route>
          <Route path="/contact">
            <Contact />
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
