import React, { useState } from "react";
import { login } from "../actions/authorization";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);

    function onSubmit(e) {
        e.preventDefault();
        dispatch(login(username, password));
    }

    return (
        <div>
            <Container>
                <Row className="pt-5 d-flex flex-column align-items-center justify-content-center">
                    <Col xs lg="4">
                        <h1 className="mb-3 text-center">
                            Log In
                        </h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
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
                                Log In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;