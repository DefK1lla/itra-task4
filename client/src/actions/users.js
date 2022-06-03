import usersService from '../api/usersService';
import { setUsers } from "../reducers/usersReducer";

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return alert('Sign in to continue');
            const data = await usersService.getAll(token);
            dispatch(setUsers(data));
        } catch (e) {
            alert(e);
        }
    }
};

export const deleteUsers = (users) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const data = await usersService.delete(token, users);
            if (data.succsess) {
                dispatch(setUsers(data.users));
            } else {
                alert(data.message);
            }
        } catch (e) {
            alert(e);
        }
    }
}

export const updateUsers = (users, action) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const data = await usersService.delete(token, users, action);
            if (data.succsess) {
                dispatch(setUsers(data.users));
            } else {
                alert(data.message);
            }
        } catch (e) {
            alert(e);
        }
    }
}
