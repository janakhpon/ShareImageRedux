import axios from 'axios'
import { URL_LIST } from '../Requests'
import { DATA_ADD, DATA_ERROR } from './types'


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

