import userToken from "../utils/token";

const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const defaultState = {
    currentUser: {},
    isAuth: null
};

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            };
        case LOGOUT:
            userToken.remove();
            return {
                ...state,
                currentUser: {},
                isAuth: false
            };
        default:
            return state;
    }
}

export const setUser = user => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });