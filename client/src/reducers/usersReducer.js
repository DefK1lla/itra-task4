const SET_USERS = "SET_USERS";

const defaultState = {
    data: [],
};

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                data: action.payload

            };
        default:
            return state;
    }
}


export const setUsers = users => { return { type: SET_USERS, payload: users } };