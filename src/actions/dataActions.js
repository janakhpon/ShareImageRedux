import axios from 'axios'
import { URL_LIST } from '../Requests'
import { DATA_ADD } from './types'


//USER_REGISTER
export const addList = (postData) => async dispatch => {
    let cb = await axios({
        method: 'post',
        url: URL_LIST,
        data: postData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    console.log(cb)
    // if (cb.data.err !== '') {
    //     dispatch({
    //         type: USER_SIGNUP_ERROR,
    //         payload: cb.data.err
    //     })
    // } else {
    //     let { _id, username, email, phone } = cb.data.data
    //     localStorage.setItem('_id', _id)
    //     localStorage.setItem('username', username)
    //     localStorage.setItem('email', email)
    //     localStorage.setItem('phone', phone)
    //     dispatch({
    //         type: GET_ME,
    //         payload: cb.data.data
    //     })
    // }
}

