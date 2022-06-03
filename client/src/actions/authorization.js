import authService from '../api/authService';
import { setUser } from "../reducers/userReducer";

const login = (username, password) => {
    return async (dispatch) => {
        try {
            const data = await authService.login(username, password);
            dispatch(setUser(data.user));
            localStorage.setItem('token', data.token);
        } catch (e) {
            alert(e);
        }
    }
};

const registration = async (username, email, password) => {
    try {
        const data = await authService.registration(username, email, password);
        alert(data.message);
        return data.success;
    } catch (e) {
        alert(e);
    }
};

const authentication = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;
            const data = await authService.authentication(token);
            if (data.success) {
                dispatch(setUser(data.user));
                localStorage.setItem('token', data.token);
            } else {
                alert(data.message);
                localStorage.removeItem('token');
            }
        } catch (e) {
            alert('Auth error');
            localStorage.removeItem('token');
        }
    }
};

export { registration, login, authentication };