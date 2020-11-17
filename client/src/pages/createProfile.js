import React from "react";
import { Container, Row, Col } from "reactstrap";
import CreateProfile from "../components/CreateProfile/profile";

function Profile() {
    return(
        <Container fluid>
            <Row>
            <Col>
                <CreateProfile />
            </Col>
            </Row>
        </Container>
    );
}

export default Profile;
