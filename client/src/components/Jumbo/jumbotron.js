import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./style.css";

function Jumbo() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Pet Pals!</h1>
        <p className="lead">Start tracking your pet with this nifty web app today!</p>
        <hr className="my-2" />
        <p>With a budget tracker and day to day tracker -- you can learn more about your pet's needs.</p>
        <p className="lead">
          <Button className="btn" href="/Signup">Sign up here!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;