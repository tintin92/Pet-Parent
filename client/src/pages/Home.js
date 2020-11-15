
import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay  } from 'reactstrap';

function Home() {
  return (
    <Container>
      <Row xs="2">
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        <Col>
        <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
        </Col>
      </Row>
      <Row xs="3">
        <Col>
        <Card inverse>
        <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
        </Col>
        <Col>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        </Row>
    </Container>
  );
}

export default Home;