import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route path="/Learn" component={Learn} />
          <Route path="/Login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
