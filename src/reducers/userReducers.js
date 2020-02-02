import {
    GET_USERS,
    GET_ME,
    USER_REMOVE,
    USER_RESET,
    USER_LOADING
} from '../actions/types'

const initialState = {
    user: null,
    users: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ME:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}