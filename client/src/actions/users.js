import usersService from "../api/usersService";
import { setUsers } from "../reducers/usersReducer";

export const getUsers = () => {
    return async (dispatch) => {
        const users = await usersService.getAll();
        if (users) dispatch(setUsers(users));
    }
};

export const deleteUsers = (userIds) => {
    return async (dispatch) => {
        const users = await usersService.delete(userIds);
        if (users) dispatch(setUsers(users));
    }
}

export const blockUsers = (userIds) => {
    return async (dispatch) => {
        const users = await usersService.block(userIds);
        if (users) dispatch(setUsers(users));
    }
}


export const unblockUsers = (userIds) => {
    return async (dispatch) => {
        const users = await usersService.unblock(userIds);
        if (users) dispatch(setUsers(users));
    }
}
