import {
    DATA_ADD,
    DATA_DELETE,
    DATA_ERROR,
    DATA_GET,
    GET_STORAGE,
    DATA_UPDATE,
    DATA_LOADING,
    DATA_SUCCESS
} from '../actions/types'


const initialState = {
    posts: [],
    post: {},
    error: null,
    msg: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                loading: true
            };
        case DATA_ADD:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case DATA_GET:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case GET_STORAGE:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DATA_SUCCESS:
            return {
                ...state,
                msg: action.payload,
                loading: false
            };
        case DATA_DELETE:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default:
            return state;
    }
}