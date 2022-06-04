import usersService from "../api/usersService";
import { setUsers } from "../reducers/usersReducer";
import { logout } from "../reducers/userReducer";

function parseData(data, dispatch) {
    if (data.users) {
        dispatch(setUsers(data.users));
    } else {
        dispatch(logout());
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        const data = await usersService.getAll();
        parseData(data, dispatch);
    }
};

export const deleteUsers = (userIds) => {
    return async (dispatch) => {
        const data = await usersService.delete(userIds);
        parseData(data, dispatch);
    }
}

export const blockUsers = (userIds) => {
    return async (dispatch) => {
        const data = await usersService.block(userIds);
        parseData(data, dispatch);
    }
}


export const unblockUsers = (userIds) => {
    return async (dispatch) => {
        const data = await usersService.unblock(userIds);
        parseData(data, dispatch);
    }
}
