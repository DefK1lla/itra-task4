import authService from "../api/authService";
import { setUser } from "../reducers/userReducer";
import { logout } from "../reducers/userReducer";

const registration = async (username, email, password) => {
    const data = await authService.registration(username, email, password);
    if (data) {
        alert(data.message)
        return true;
    };
};

const login = (username, password) => {
    return async (dispatch) => {
        const user = await authService.login(username, password);
        if (user) dispatch(setUser(user));
    }
};

const authentication = () => {
    return async (dispatch) => {
        const user = await authService.authentication();
        if (user) {
            dispatch(setUser(user));
        } else {
            dispatch(logout());
        }
    }
};

export { registration, login, authentication };