import axios from 'axios';
import { setUser } from "../reducers/userReducer";


export const registration = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            username,
            email,
            password
        });

        alert(response.data.message);
    } catch (e) {
        alert(e);
    }
};

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });

            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
};

export const auth = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get('http://localhost:5000/api/auth/auth', {
                    headers: {
                        authorization: token
                    }
                });

                dispatch(setUser(response.data.user));
                localStorage.setItem('token', response.data.token);
            }
        } catch (e) {
            alert(e.response.data.message);
            localStorage.removeItem('token');
        }
    }
};