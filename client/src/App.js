import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Jumbo from "./components/Jumbo/jumbotron";
import Footer from "./components/Footer/footer";


function App() {
    return (
      <Router>
        <Navbar />
        <Jumbo />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }


export default App;
