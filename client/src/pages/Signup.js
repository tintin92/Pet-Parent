import React from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
// import './style.css';

function Signup() {
    return (
        <Container className="App">
            <h2>Sign Up</h2>
            <Form className="form">
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
                <p className="or">
                    <br />
                    OR 
                </p>
                <p>
                    Do you have an account?
                    <br/>
                    <a href="/login">
                        Sign in
                    </a>
                </p>
            </Form>
        </Container>
    );
}


export default Signup;
