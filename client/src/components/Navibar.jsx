import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const Navibar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    return (
        <div>
            <Container>
                {!isAuth &&
                    <Nav className="d-flex justify-content-end">
                        <Nav.Item className="m-1">
                            <Link to="/registration">Registration</Link>
                        </Nav.Item>

                        <Nav.Item className="m-1">
                            <Link to="/login">Log In</Link>
                        </Nav.Item>
                    </Nav>
                }

                {isAuth &&
                    <Nav className="d-flex justify-content-end">
                        <Nav.Item className="m-1">
                            <Link to="/login" onClick={() => dispatch(logout())}>Log Out</Link>
                        </Nav.Item>
                    </Nav>
                }
            </Container>
        </div>
    );
}

export default Navibar;