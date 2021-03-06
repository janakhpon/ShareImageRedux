import axios from 'axios'
import setAuthToken from '../Components/utils'
import { URL_USER_SIGNUP, URL_USER_SIGNIN, URL_ME } from '../Requests'
import { GET_USERS, GET_ME, USER_REMOVE, USER_RESET, USER_SIGNIN, USER_SIGNUP, USER_SIGNIN_ERROR, USER_SIGNUP_ERROR, SET_CURRENT_USER, USER_UPDATE, USER_UPDATE_ERROR } from './types'


//USER_REGISTER
export const userSignup = (userData) => async dispatch => {
    let cb = await axios({
        method: 'post',
        url: URL_USER_SIGNUP,
        data: userData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: USER_SIGNUP_ERROR,
            payload: cb.data.err
        })
    } else {
        let { _id, username, email, phone } = cb.data.data
        localStorage.setItem('_id', _id)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('phone', phone)
        dispatch({
            type: GET_ME,
            payload: cb.data.data
        })
    }
}


//USER SIGNIN
export const userSignin = (userData) => async dispatch => {
    let cb = await axios({
        method: 'post',
        url: URL_USER_SIGNIN,
        data: userData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: USER_SIGNUP_ERROR,
            payload: cb.data.err
        })
    } else {
        localStorage.setItem('token', cb.data.token);
        setAuthToken(cb.data.token)
        dispatch({
            type: USER_SIGNUP_ERROR,
            payload: cb.data.err
        })
    }
}

//GET USER
export const getMe = () => async dispatch => {
    let cb = await axios({
        method: 'get',
        url: URL_ME,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: USER_SIGNUP_ERROR,
            payload: cb.data.err
        })
    } else {
        dispatch({
            type: GET_ME,
            payload: cb.data.data
        })
    }
}

//USER_REGISTER
export const setCurrentUser = resdata => {
    return {
        type: SET_CURRENT_USER,
        payload: resdata
    }
}