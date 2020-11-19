import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateProfile from "./pages/CreateProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/footer";



function App() {

  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/CreateProfile" component={CreateProfile} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}


export default App;
