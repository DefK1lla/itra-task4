import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers, deleteUsers } from "../actions/users";
import { setUsers } from "../reducers/usersReducer";
import Toolbar from "./Toolbar";
import UsersTable from "./UsersTable";
import { Container } from "react-bootstrap";

function Main() {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();
    function onBlock() {

    }


    function onUnblock() {
        console.log('unblock')
    }


    function onDelete() {
        const checkedUsers = users.filter(user => user.isChecked);
        dispatch(deleteUsers(checkedUsers));
    }

    return (
        <div>
            <Container>
                <Toolbar onDelete={onDelete} onBlock={onBlock} onUnblock={onUnblock} />

                <UsersTable />
            </Container>
        </div>
    );
};

export default Main;