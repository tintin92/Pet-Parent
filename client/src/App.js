import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import createProfile from "./pages/createProfile";
import Footer from "./components/Footer/footer";
import { StoreProvider } from "./components/utils/GlobalState";



function App() {

    return (
      <Router>
        <div>
        <StoreProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createProfile" component={createProfile} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
        <Footer />
        </StoreProvider>
        </div>
      </Router>
    );
  }


export default App;
