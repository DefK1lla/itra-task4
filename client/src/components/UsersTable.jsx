import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../actions/users';
import { setUsers } from "../reducers/usersReducer";
import { Table, Form } from "react-bootstrap";

function UsersTable() {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                user.isChecked = checked;
                return user;
            });
            dispatch(setUsers(tempUser));
        } else {
            let tempUser = users.map((user) => {
                if (user.id === name) user.isChecked = checked;
                return user;
            }
            );
            dispatch(setUsers(tempUser));
        }
    };

    return (
        <div>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <Form.Check
                                type="checkbox"
                                name="allSelect"
                                checked={!users.some((user) => user?.isChecked !== true)}
                                onChange={handleChange}
                            />
                        </th>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Registration date</th>
                        <th>Date of last authorization</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name={user.id}
                                        checked={user?.isChecked || false}
                                        onChange={handleChange}
                                    />
                                </td>

                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.registration_date}
                                </td>
                                <td>
                                    {user.last_login_date}
                                </td>
                                <td>
                                    {user.status}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersTable;