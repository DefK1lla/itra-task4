import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockUsers, unblockUsers, deleteUsers } from "../actions/users";
import { logout } from "../reducers/userReducer";
import Toolbar from "../components/Toolbar";
import UsersTable from "../components/UsersTable";
import { Container } from "react-bootstrap";

function Main() {
    const users = useSelector(state => state.users.data);
    const currentUserId = useSelector(state => state.user.currentUser.id);
    const dispatch = useDispatch();

    function getIds() {
        return users.filter(user => user.isChecked).map(user => user.id);
    }

    function onDelete() {
        const userIds = getIds();
        dispatch(deleteUsers(userIds));
        if (userIds.includes(currentUserId)) return dispatch(logout());
    }

    function onBlock() {
        const userIds = getIds();
        dispatch(blockUsers(userIds));
        if (userIds.includes(currentUserId)) return dispatch(logout());
    }

    function onUnblock() {
        const userIds = getIds();
        dispatch(unblockUsers(userIds));
    }

    return (
        <div>
            <Container>
                <Toolbar onDelete={onDelete} onBlock={onBlock} onUnblock={onUnblock} />
                <UsersTable users={users} />
            </Container>
        </div>
    );
};

export default Main;