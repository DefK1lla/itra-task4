import React, { useState } from "react";
import { registration } from "../actions/authorization";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        registration(username, email, password);
    }

    return (
        <div>
            <Container>
                <Row className="pt-5 d-flex flex-column align-items-center justify-content-center">
                    <Col xs lg="4">
                        <h1 className="mb-3 text-center">
                            Registration
                        </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="useremail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userpassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button onClick={(e) => onSubmit(e)} variant="primary" type="submit">
                                Registration
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;