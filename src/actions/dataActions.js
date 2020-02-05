import axios from 'axios'
import { URL_LIST, URL_PRIVATE_LISTS, URL_LIST_ID } from '../Requests'
import { DATA_ADD, DATA_ERROR, GET_STORAGE, DATA_SUCCESS } from './types'


//ADD DATA TO LIST
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

//GET PRIVATE LISTS
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

//UPDATE LIST ITEM DATA
export const updateListItem = (postData) => async dispatch => {
    let url = `${URL_LIST_ID}${postData._id}`
    let cb = await axios({
        method: 'post',
        url: url,
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
            type: DATA_SUCCESS,
            payload: cb.data.data
        })
    }
}


//DELETE LIST ITEM
export const deleteListItem = (url) => async dispatch => {
    let cb = await axios({
        method: 'delete',
        url: url,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    dispatch({
        type: DATA_SUCCESS,
        payload: cb.data.msg
    })
    if (cb.data.err !== '') {
        dispatch({
            type: DATA_ERROR,
            payload: cb.data.err
        })
    }
}