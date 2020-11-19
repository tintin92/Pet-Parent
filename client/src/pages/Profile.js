import Budget from "../components/Budget/budget";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/grid/grid";
import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../components/utils/API";
// import CreateProfile from "./CreateProfile"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';

function Profile() {

    const [profile, setProfile] = useState({})

    // whent his component mounts, grab the profile with the _id of props.match.params.id
    const {id} = useParams()
    useEffect(() => {
        API.getProfile(id)
          .then(res => setProfile(res.data))
          .catch(err => console.log(err));
      }, [])
    
      return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>
                    {profile.name} 
                  </h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-10 md-offset-1">
                <article>
                  <h2>Pet Stats</h2>
                  <p>
                    {profile.age},
                    {profile.birthday},
                    {profile.species},
                    {profile.breed},
                    {profile.weight},
                    {profile.location}
                  </p>
                </article>
              </Col>
            </Row>
            <Row>
              <Col size="md-2">
              <div className="col">
                <Card>
                    <Budget />
                    {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody> */}
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Link to="/CreateProfile">← Back to Profiles</Link>
                </div>
              </Col>
            </Row>
          </Container>
        );
   }

   export default Profile;

   