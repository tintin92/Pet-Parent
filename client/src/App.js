import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer/footer";



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
