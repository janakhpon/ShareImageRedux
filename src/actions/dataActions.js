import axios from 'axios'
import { URL_LIST, URL_PRIVATE_LISTS } from '../Requests'
import { DATA_ADD, DATA_ERROR, GET_STORAGE } from './types'


//USER_REGISTER
export const addList = (postData) => async dispatch => {
    let cb = await axios({
        method: 'post',
        url: URL_LIST,
        data: postData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: DATA_ERROR,
            payload: cb.data.err
        })
    } else {
        dispatch({
            type: DATA_ADD,
            payload: cb.data.data
        })
    }
}

export const getList = () => async dispatch => {
    let cb = await axios({
        method: 'get',
        url: URL_PRIVATE_LISTS,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: DATA_ERROR,
            payload: cb.data.err
        })
    } else {
        dispatch({
            type: GET_STORAGE,
            payload: cb.data.data
        })
    }
}