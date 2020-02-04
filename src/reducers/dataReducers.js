import {
    DATA_ADD,
    DATA_DELETE,
    DATA_ERROR,
    DATA_GET,
    GET_STORAGE,
    DATA_UPDATE,
    DATA_LOADING
} from '../actions/types'


const initialState = {
    data: null,
    storage: [],
    error: null,
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
                storage: [action.payload, ...state.storage]
            };
        case DATA_GET:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case GET_STORAGE:
            return {
                ...state,
                storage: action.payload,
                loading: false
            };
        case DATA_ERROR:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case DATA_DELETE:
            return {
                ...state,
                storage: state.storage.filter(data => data._id !== action.payload)
            };
        default:
            return state;
    }
}