import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Home() {
  return (
    <Container>
      <Row xs="2">
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="3">
        <Col>Column</Col>
        <Col>Column</Col>
        </Row>
    </Container>
  );
}

export default Home;