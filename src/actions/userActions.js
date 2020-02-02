import axios from 'axios'
import { useHistory } from 'react-router-dom'
import setAuthToken from '../Components/utils'
import { URL_USER_SIGNUP } from '../Requests'
import { GET_USERS, GET_ME, USER_REMOVE, USER_RESET, USER_SIGNIN, USER_SIGNUP, USER_SIGNIN_ERROR, USER_SIGNUP_ERROR, USER_UPDATE, USER_UPDATE_ERROR } from './types'


//USER_REGISTER
export const registerUser = (userData) => dispatch => {
    let history = useHistory()
    const cb = await axios({
        method: 'post',
        url: URL_USER_SIGNUP,
        data: userData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    if (cb.data.err !== '') {
        dispatch({
            type: GET
        })
    } else {
        setOpen(false)
        history.push('/Page-signin')
    }
}